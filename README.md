# Tests E2E

commande pour lancer les tests : npm run test-e2e--chrome

## Test du login

### Scenario 1 - Login en admin

Cas 1 : Login avec identifiant et mot de passe et véfier la redirection

Cas 2 : Login avec identifiant et mauvais mot de passe et véfier la redirection

## Test de la messagerie

### Scenario 1 - Envoie d'un message sur la page avis

Cas 1 : Envoyer un message et vérifier l'ajout

Cas 2 : Envoyer un message et vérifier les informations du message

## Test de la page admin

### Scenario 1 - Suppression d'un message

Cas 1 : Cliquer sur "delete" et vérifier si le nombre de messages a diminué de 1

### Scenario 2 - Déconnexion

Cas 1 : Cliquer sur le bouton Disconnect et vérifier que l'on est bien deconnecté

## Test de la page Contact

### Scenario 1 - Création d'un message

Cas 1 : Créer un message et vérifier les valeurs dans l'url

## Test de la page Princing

### Scenario 1 - Redirection vers la page contact

Cas 1 : Cliquer sur le bouton "Contactez-nous" et vérifier la redirection

Cas 2 : Cliquer sur les bouton "contact" des cards
