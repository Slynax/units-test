import { 
  my_alpha_number_t, 
  sum, 
  my_size_alpha_t, 
  my_display_alpha_t, 
  my_array_alpha_t, 
  my_is_posi_neg_t, 
  fibo, 
  my_display_alpha_reverse_t, 
  my_length_array_t, 
  my_display_unicode_t,
  quickSort,
  permuter,
  tspBrutForce,
  estValide,
  resoudreSudoku,
} from '../src/index.js';

describe('index.js', () => {

  describe('my_alpha_number_t', () => {
    it('should convert a number to a string', () => {
      expect(my_alpha_number_t(123)).toBe('123');
      expect(my_alpha_number_t(0)).toBe('0');
      expect(my_alpha_number_t(-456)).toBe('-456');
    });
  });

  describe('sum', () => {
    it('should return the sum of two numbers', () => {
      expect(sum(2, 3)).toBe(5);
      expect(sum(-1, -1)).toBe(-2);
      expect(sum(0, 0)).toBe(0);
    });

    it('should return 0 if one of the arguments is not a number', () => {
      expect(sum(2, '3')).toBe(0);
      expect(sum('a', 'b')).toBe(0);
      expect(sum(null, 5)).toBe(0);
    });
  });

  describe('my_size_alpha_t', () => {
    it('should return the length of a string', () => {
      expect(my_size_alpha_t('abc')).toBe(3);
      expect(my_size_alpha_t('')).toBe(0);
      expect(my_size_alpha_t('Hello, World!')).toBe(13);
    });

    it('should return 0 if the input is not a string', () => {
      expect(my_size_alpha_t(123)).toBe(0);
      expect(my_size_alpha_t(null)).toBe(0);
      expect(my_size_alpha_t(undefined)).toBe(0);
    });
  });

  describe('my_display_alpha_t', () => {
    it('should return the lowercase alphabet', () => {
      expect(my_display_alpha_t()).toBe('abcdefghijklmnopqrstuvwxyz');
    });
  });

  describe('my_array_alpha_t', () => {
    it('should convert a string into an array of characters', () => {
      expect(my_array_alpha_t('abc')).toEqual(['a', 'b', 'c']);
      expect(my_array_alpha_t('')).toEqual([]);
      expect(my_array_alpha_t('Hello')).toEqual(['H', 'e', 'l', 'l', 'o']);
    });
  });

  describe('my_is_posi_neg_t', () => {
    it('should identify positive numbers', () => {
      expect(my_is_posi_neg_t(10)).toBe('POSITIF');
      expect(my_is_posi_neg_t(0.1)).toBe('POSITIF');
    });

    it('should identify negative numbers or zero', () => {
      expect(my_is_posi_neg_t(0)).toBe('NEGATIVE');
      expect(my_is_posi_neg_t(-5)).toBe('NEGATIVE');
    });
  });

  describe('fibo', () => {
    it('should return the correct Fibonacci numbers', () => {
      expect(fibo(0)).toBe(0);
      expect(fibo(1)).toBe(1);
      expect(fibo(2)).toBe(1);
      expect(fibo(3)).toBe(2);
      expect(fibo(5)).toBe(5);
      expect(fibo(10)).toBe(55);
    });

    it('should return 0 for negative inputs', () => {
      expect(fibo(-1)).toBe(0);
      expect(fibo(-10)).toBe(0);
    });
  });

  describe('my_display_alpha_reverse_t', () => {
    it('should return the lowercase alphabet in reverse order', () => {
      expect(my_display_alpha_reverse_t()).toBe('zyxwvutsrqponmlkjihgfedcba');
    });
  });

  describe('my_length_array_t', () => {
    it('should return the length of an array', () => {
      expect(my_length_array_t(['a', 'b', 'c'])).toBe(3);
      expect(my_length_array_t([])).toBe(0);
      expect(my_length_array_t([1, 2, 3, 4, 5])).toBe(5);
    });

    it('should stop counting at the first falsy element', () => {
      expect(my_length_array_t([1, 2, null, 4])).toBe(2);
      expect(my_length_array_t([undefined, 'a'])).toBe(0);
    });
  });

  describe('my_display_unicode_t', () => {
    it('should convert an array of decimal codes to a valid string', () => {
      expect(my_display_unicode_t([65, 66, 67])).toBe('ABC');
      expect(my_display_unicode_t([97, 98, 99])).toBe('abc');
      expect(my_display_unicode_t([48, 49, 50])).toBe('012');
      expect(my_display_unicode_t([32, 65, 97, 48])).toBe(' Aa0');
    });

    it('should ignore decimal codes outside the specified ranges', () => {
      expect(my_display_unicode_t([31, 123, 999])).toBe('');
    });
  });

  describe('quickSort', () => {
    it('should return an empty array when input is empty', () => {
      expect(quickSort([])).toEqual([]);
    });

    it('should return the same array when it contains a single element', () => {
      expect(quickSort([1])).toEqual([1]);
    });

    it('should sort an already sorted array', () => {
      expect(quickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should sort a reverse sorted array', () => {
      expect(quickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    it('should sort an array with duplicate elements', () => {
      expect(quickSort([3, 6, 2, 6, 1, 3])).toEqual([1, 2, 3, 3, 6, 6]);
    });

    it('should sort an array with negative numbers', () => {
      expect(quickSort([0, -10, 5, -3, 8, -1])).toEqual([-10, -3, -1, 0, 5, 8]);
    });
  });

  describe('permuter', () => {
    it('should return an array with an empty array when input is empty', () => {
      expect(permuter([])).toEqual([[]]);
    });

    it('should return an array with a single permutation for a single element', () => {
      expect(permuter([1])).toEqual([[1]]);
    });

    it('should return all permutations for multiple elements', () => {
      const input = [1, 2, 3];
      const expectedPermutations = [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1]
      ];
      expect(permuter(input)).toEqual(expectedPermutations);
    });

    it('should handle arrays with duplicate elements correctly', () => {
      const input = [1, 1];
      const expectedPermutations = [
        [1, 1],
        [1, 1]
      ];
      expect(permuter(input)).toEqual(expectedPermutations);
    });

    it('should generate n! permutations for an array of length n', () => {
      const input = [1, 2, 3, 4];
      const permutations = permuter(input);
      expect(permutations.length).toBe(24); // 4! = 24
    });
  });

  describe('tspBrutForce', () => {
    it('should return the correct minimum distance and permutation for a simple graph', () => {
      const distances = {
        A: { A: 0, B: 10, C: 15, D: 20 },
        B: { A: 10, B: 0, C: 35, D: 25 },
        C: { A: 15, B: 35, C: 0, D: 30 },
        D: { A: 20, B: 25, C: 30, D: 0 }
      };
      const result = tspBrutForce(distances);
      expect(result.minDistance).toBe(80);
      expect(result.meilleurePermutation).toEqual(['A', 'B', 'D', 'C']);
    });

    it('should handle a single city by returning zero distance and the single city as the permutation', () => {
      const distances = {
        A: { A: 0 }
      };
      const result = tspBrutForce(distances);
      expect(result.minDistance).toBe(0);
      expect(result.meilleurePermutation).toEqual(['A']);
    });

    it('should handle two cities correctly', () => {
      const distances = {
        A: { A: 0, B: 10 },
        B: { A: 10, B: 0 }
      };
      const result = tspBrutForce(distances);
      expect(result.minDistance).toBe(20);
      expect(result.meilleurePermutation).toEqual(['A', 'B']);
    });

    it('should throw a TypeError when distances is empty', () => {
      const distances = {};
      expect(() => tspBrutForce(distances)).toThrow(TypeError);
    });

    it('should handle asymmetric distances correctly', () => {
      const distances = {
        A: { A: 0, B: 10 },
        B: { A: 20, B: 0 }
      };
      const result = tspBrutForce(distances);
      expect(result.minDistance).toBe(30);
      expect(result.meilleurePermutation).toEqual(['A', 'B']);
    });
  });

  describe('estValide', () => {
    it('should return true for a valid placement', () => {
      const grille = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
      ];
      expect(estValide(grille, 0, 2, 4)).toBe(true);
    });

    it('should return false if the number is already in the same row', () => {
      const grille = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
      ];
      expect(estValide(grille, 0, 2, 5)).toBe(false);
    });

    it('should return false if the number is already in the same column', () => {
      const grille = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
      ];
      expect(estValide(grille, 0, 2, 3)).toBe(false);
    });

    it('should return false if the number is already in the same 3x3 subgrid', () => {
      const grille = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
      ];
      expect(estValide(grille, 0, 2, 9)).toBe(false);
    });

    it('should handle edge cases correctly', () => {
      const grille = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
      ];
      expect(estValide(grille, 8, 8, 1)).toBe(true);
    });
  });

  describe('resoudreSudoku', () => {
    it('should solve a valid Sudoku puzzle', () => {
      const grille = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
      ];
      const expectedSolution = [
        [5,3,4,6,7,8,9,1,2],
        [6,7,2,1,9,5,3,4,8],
        [1,9,8,3,4,2,5,6,7],
        [8,5,9,7,6,1,4,2,3],
        [4,2,6,8,5,3,7,9,1],
        [7,1,3,9,2,4,8,5,6],
        [9,6,1,5,3,7,2,8,4],
        [2,8,7,4,1,9,6,3,5],
        [3,4,5,2,8,6,1,7,9]
      ];
      const result = resoudreSudoku(grille);
      expect(result).toBe(true);
      expect(grille).toEqual(expectedSolution);
    });

    it('should return false for an unsolvable Sudoku puzzle', () => {
      const grille = [
        [5, 1, 6, 8, 4, 9, 7, 3, 2],
        [3, 0, 7, 6, 0, 5, 0, 0, 0],
        [8, 0, 9, 7, 0, 0, 0, 6, 5],
        [1, 3, 5, 0, 6, 0, 9, 0, 7],
        [4, 7, 2, 5, 9, 1, 0, 0, 6],
        [9, 6, 8, 3, 7, 0, 5, 0, 0],
        [2, 5, 3, 1, 8, 6, 0, 7, 4],
        [6, 8, 4, 2, 5, 7, 0, 0, 0],
        [7, 9, 1, 0, 3, 0, 6, 5, 8]
      ];
      const result = resoudreSudoku(grille);
      expect(result).toBe(false);
    });

    it('should return true for an already solved Sudoku puzzle', () => {
      const grille = [
        [5,3,4,6,7,8,9,1,2],
        [6,7,2,1,9,5,3,4,8],
        [1,9,8,3,4,2,5,6,7],
        [8,5,9,7,6,1,4,2,3],
        [4,2,6,8,5,3,7,9,1],
        [7,1,3,9,2,4,8,5,6],
        [9,6,1,5,3,7,2,8,4],
        [2,8,7,4,1,9,6,3,5],
        [3,4,5,2,8,6,1,7,9]
      ];
      const result = resoudreSudoku(grille);
      expect(result).toBe(true);
      expect(grille).toEqual([
        [5,3,4,6,7,8,9,1,2],
        [6,7,2,1,9,5,3,4,8],
        [1,9,8,3,4,2,5,6,7],
        [8,5,9,7,6,1,4,2,3],
        [4,2,6,8,5,3,7,9,1],
        [7,1,3,9,2,4,8,5,6],
        [9,6,1,5,3,7,2,8,4],
        [2,8,7,4,1,9,6,3,5],
        [3,4,5,2,8,6,1,7,9]
      ]);
    });

    it('should solve a Sudoku puzzle with multiple solutions by returning one valid solution', () => {
      const grille = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
      ];
      const result = resoudreSudoku(grille);
      expect(result).toBe(true);
      for (let row of grille) {
        for (let cell of row) {
          expect(cell).toBeGreaterThanOrEqual(1);
          expect(cell).toBeLessThanOrEqual(9);
        }
      }
    });
  });

});