import request from 'supertest';

const baseURL = 'http://localhost:3000';

jest.setTimeout(300000);

const testPerf = async (endpointTest, userCount, duration) => {
  const endTime = Date.now() + duration;
  const responseTimes = [];
  let successCount = 0;
  let failureCount = 0;

  while (Date.now() < endTime) {
    const promises = [];
    const start = Date.now();

    for (let i = 0; i < userCount; i++) {
      promises.push(
        endpointTest()
          .then(response => {
            responseTimes.push(Date.now() - start);
            if (response.status >= 200 && response.status < 300) {
              successCount++;
            } else {
              failureCount++;
            }
          })
          .catch(() => {
            failureCount++;
          })
      );
    }
    await Promise.all(promises);
  }

  const averageResponseTime = responseTimes.length
    ? responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length
    : 0;

  console.log(`Test de perf pour : ${endpointTest().url}`);
  console.log(`- Nombre d'utilisateurs simultanés : ${userCount}`);
  console.log(`- Temps de test (seconds) : ${duration / 1000}`);
  console.log(`- Temps de réponse moyen : ${averageResponseTime.toFixed(2)}ms`);
  console.log(`- Réponses OK     : ${successCount}`);
  console.log(`- Réponses Erreur : ${failureCount}`);
};

describe('API Perf Testing', () => {
  const getFeedbackEndpoint = () => {
    return request(baseURL)
      .get('/feedback/')
      .set('Accept', 'application/json');
  };

  const postFeedbackEndpoint = () => {
    return request(baseURL)
      .post('/feedback/')
      .send({ name: 'TestName', message: 'TestMessage' });
  };

  const wrongLoginEndpoint = () => {
    return request(baseURL)
      .get('/login/')
      .query({ login: 'wrongUser', password: 'wrongPassword' })
      .set('Accept', 'application/json');
  };

  test('Load test GET /feedback', async () => {
    await testPerf(getFeedbackEndpoint, 10, 10000);
  });

  test('Load test POST /feedback', async () => {
    await testPerf(postFeedbackEndpoint, 10, 10000);
  });

  test('Load test GET /login (wrong credentials)', async () => {
    await testPerf(wrongLoginEndpoint, 10, 10000);
  });
});
