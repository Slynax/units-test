# Test unitaires

## Description : Fonction my_alpha_number_t
### it 1 - Je souhaite tester si la fonction my_alpha_number_t convertit correctement différents types de nombres en chaînes de caractères.

Cas 1 : Passer l'argument 123 et vérifier que le retour est "123".

Cas 2 : Passer l'argument 0 et vérifier que le retour est "0".

Cas 3 : Passer l'argument -456 et vérifier que le retour est "-456".


## Description : Fonction sum
### it 1 - Je souhaite tester si la fonction sum retourne correctement la somme de deux nombres.

Cas 1 : Passer les arguments 2 et 3 et vérifier que le retour est 5.

Cas 2 : Passer les arguments -1 et -1 et vérifier que le retour est -2.

Cas 3 : Passer les arguments 0 et 0 et vérifier que le retour est 0.

### it 2 - Je souhaite tester si la fonction sum retourne 0 lorsque l'un des arguments n'est pas un nombre.

Cas 1 : Passer les arguments 2 et "3" et vérifier que le retour est 0.

Cas 2 : Passer les arguments "a" et "b" et vérifier que le retour est 0.

Cas 3 : Passer les arguments null et 5 et vérifier que le retour est 0.

## Description : Fonction my_size_alpha_t
### it 1 - Je souhaite tester si la fonction my_size_alpha_t retourne correctement la longueur d'une chaîne de caractères.

Cas 1 : Passer l'argument "abc" et vérifier que le retour est 3.

Cas 2 : Passer l'argument "" (vide) et vérifier que le retour est 0.

Cas 3 : Passer l'argument "Hello, World!" et vérifier que le retour est 13.

### it 2 - Je souhaite tester si la fonction my_size_alpha_t retourne 0 lorsque l'entrée n'est pas une chaîne de caractères.

Cas 1 : Passer l'argument 123 et vérifier que le retour est 0.

Cas 2 : Passer l'argument null et vérifier que le retour est 0.

## Description : Fonction my_display_alpha_t
### it 1 - Je souhaite tester si la fonction my_display_alpha_t retourne bien l'alphabet en minuscules.

Cas 1 : Appeler la fonction sans argument et vérifier que le retour est "abcdefghijklmnopqrstuvwxyz".

## Description : Fonction my_array_alpha_t
### it 1 - Je souhaite tester si la fonction my_array_alpha_t convertit correctement une chaîne de caractères en tableau de caractères.

Cas 1 : Passer l'argument "abc" et vérifier que le retour est ['a', 'b', 'c'].

Cas 2 : Passer l'argument "" (vide) et vérifier que le retour est [].

Cas 3 : Passer l'argument "Hello" et vérifier que le retour est ['H', 'e', 'l', 'l', 'o'].

## Description : Fonction my_is_posi_neg_t
### it 1 - Je souhaite tester si la fonction my_is_posi_neg_t identifie correctement les nombres positifs.

Cas 1 : Passer l'argument 10 et vérifier que le retour est "POSITIF".

Cas 2 : Passer l'argument 0.1 et vérifier que le retour est "POSITIF".

### it 2 - Je souhaite tester si la fonction my_is_posi_neg_t identifie correctement les nombres négatifs ou nuls.

Cas 1 : Passer l'argument 0 et vérifier que le retour est "NEGATIVE".

Cas 2 : Passer l'argument -5 et vérifier que le retour est "NEGATIVE".

## Description : Fonction fibo
### it 1 - Je souhaite tester si la fonction fibo retourne correctement les nombres de la séquence de Fibonacci.

Cas 1 : Passer l'argument 0 et vérifier que le retour est 0.

Cas 2 : Passer l'argument 1 et vérifier que le retour est 1.

Cas 3 : Passer l'argument 2 et vérifier que le retour est 1.

Cas 4 : Passer l'argument 3 et vérifier que le retour est 2.

Cas 5 : Passer l'argument 5 et vérifier que le retour est 5.

Cas 6 : Passer l'argument 10 et vérifier que le retour est 55.

### it 2 - Je souhaite tester si la fonction fibo retourne 0 pour des entrées négatives.

Cas 1 : Passer l'argument -1 et vérifier que le retour est 0.

Cas 2 : Passer l'argument -10 et vérifier que le retour est 0.

## Description : Fonction my_display_alpha_reverse_t
### it 1 - Je souhaite tester si la fonction my_display_alpha_reverse_t retourne bien l'alphabet en minuscules inversé.

Cas 1 : Appeler la fonction sans argument et vérifier que le retour est "zyxwvutsrqponmlkjihgfedcba".

## Description : Fonction my_length_array_t
### it 1 - Je souhaite tester si la fonction my_length_array_t retourne correctement la longueur d'un tableau.

Cas 1 : Passer l'argument ['a', 'b', 'c'] et vérifier que le retour est 3.

Cas 2 : Passer l'argument [] (vide) et vérifier que le retour est 0.

Cas 3 : Passer l'argument [1, 2, 3, 4, 5] et vérifier que le retour est 5.

### it 2 - Je souhaite tester si la fonction my_length_array_t arrête le comptage au premier élément falsy.

Cas 1 : Passer l'argument [1, 2, null, 4] et vérifier que le retour est 2.

Cas 2 : Passer l'argument [undefined, 'a'] et vérifier que le retour est 0.

## Description : Fonction my_display_unicode_t
### it 1 - Je souhaite tester si la fonction my_display_unicode_t convertit correctement un tableau de codes décimaux en une chaîne de caractères valide.

Cas 1 : Passer l'argument [65, 66, 67] et vérifier que le retour est "ABC".

Cas 2 : Passer l'argument [97, 98, 99] et vérifier que le retour est "abc".

Cas 3 : Passer l'argument [48, 49, 50] et vérifier que le retour est "012".

Cas 4 : Passer l'argument [32, 65, 97, 48] et vérifier que le retour est " Aa0".

### it 2 - Je souhaite tester si la fonction my_display_unicode_t ignore les codes décimaux en dehors des plages spécifiées.

Cas 1 : Passer l'argument [31, 123, 999] et vérifier que le retour est "" (vide).

## Description : Fonction quickSort
### it 1 - Je souhaite tester si la fonction quickSort retourne un tableau vide lorsque l'entrée est vide.

Cas 1 : Passer l'argument [] et vérifier que le retour est [].

### it 2 - Je souhaite tester si la fonction quickSort retourne le même tableau lorsqu'il contient un seul élément.

Cas 1 : Passer l'argument [1] et vérifier que le retour est [1].

### it 3 - Je souhaite tester si la fonction quickSort trie correctement un tableau déjà trié.

Cas 1 : Passer l'argument [1, 2, 3, 4, 5] et vérifier que le retour est [1, 2, 3, 4, 5].

### it 4 - Je souhaite tester si la fonction quickSort trie correctement un tableau trié en ordre inverse.

Cas 1 : Passer l'argument [5, 4, 3, 2, 1] et vérifier que le retour est [1, 2, 3, 4, 5].

### it 5 - Je souhaite tester si la fonction quickSort trie correctement un tableau avec des éléments dupliqués.

Cas 1 : Passer l'argument [3, 6, 2, 6, 1, 3] et vérifier que le retour est [1, 2, 3, 3, 6, 6].

### it 6 - Je souhaite tester si la fonction quickSort trie correctement un tableau contenant des nombres négatifs.

Cas 1 : Passer l'argument [0, -10, 5, -3, 8, -1] et vérifier que le retour est [-10, -3, -1, 0, 5, 8].

## Description : Fonction permuter
### it 1 - Je souhaite tester si la fonction permuter retourne un tableau contenant un tableau vide lorsque l'entrée est vide.

Cas 1 : Passer l'argument [] et vérifier que le retour est [[]].

### it 2 - Je souhaite tester si la fonction permuter retourne un tableau contenant une seule permutation pour un seul élément.

Cas 1 : Passer l'argument [1] et vérifier que le retour est [[1]].

### it 3 - Je souhaite tester si la fonction permuter retourne toutes les permutations possibles pour plusieurs éléments.

Cas 1 : Passer l'argument [1, 2, 3] et vérifier que le retour est [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]].

### it 4 - Je souhaite tester si la fonction permuter gère correctement les tableaux contenant des éléments dupliqués.

Cas 1 : Passer l'argument [1, 1] et vérifier que le retour est [[1, 1], [1, 1]].

### it 5 - Je souhaite tester si la fonction permuter génère n! permutations pour un tableau de longueur n.

Cas 1 : Passer l'argument [1, 2, 3, 4] et vérifier que le nombre de permutations retournées est 24 (4! = 24).

## Description : Fonction tspBrutForce
### it 1 - Je souhaite tester si la fonction tspBrutForce retourne la distance minimale correcte et la permutation correspondante pour un graphe simple.

Cas 1 : Passer l'objet distances suivant :
```
{
  A: { A: 0, B: 10, C: 15, D: 20 },
  B: { A: 10, B: 0, C: 35, D: 25 },
  C: { A: 15, B: 35, C: 0, D: 30 },
  D: { A: 20, B: 25, C: 30, D: 0 }
}
```
et vérifier que le retour est { minDistance: 80, meilleurePermutation: ['A', 'B', 'D', 'C'] }.

### it 2 - Je souhaite tester si la fonction tspBrutForce gère correctement le cas d'une seule ville en retournant une distance de zéro et la permutation contenant uniquement cette ville.

Cas 1 : Passer l'objet distances suivant :
{
  A: { A: 0 }
}
et vérifier que le retour est { minDistance: 0, meilleurePermutation: ['A'] }.

### it 3 - Je souhaite tester si la fonction tspBrutForce gère correctement le cas de deux villes.

Cas 1 : Passer l'objet distances suivant :
```
{
  A: { A: 0, B: 10 },
  B: { A: 10, B: 0 }
}
```
et vérifier que le retour est { minDistance: 20, meilleurePermutation: ['A', 'B'] }.

### it 4 - Je souhaite tester si la fonction tspBrutForce lance une erreur de type TypeError lorsque l'objet distances est vide.

Cas 1 : Passer l'objet distances vide {} et vérifier que la fonction lance une TypeError.

### it 5 - Je souhaite tester si la fonction tspBrutForce gère correctement les distances asymétriques.

Cas 1 : Passer l'objet distances suivant :
```
{
  A: { A: 0, B: 10 },
  B: { A: 20, B: 0 }
}
```
et vérifier que le retour est { minDistance: 30, meilleurePermutation: ['A', 'B'] }.

## Description : Fonction estValide
### it 1 - Je souhaite tester si la fonction estValide retourne true pour un placement valide d'un nombre dans une grille de Sudoku.

Cas 1 : Passer la grille suivante et vérifier que le placement du numéro 4 en position (0, 2) est valide.
```
[
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
]
```
et vérifier que le retour est true.

### it 2 - Je souhaite tester si la fonction estValide retourne false si le numéro est déjà présent dans la même rangée.

Cas 1 : Passer la grille suivante et vérifier que le placement du numéro 5 en position (0, 2) est invalide car 5 est déjà présent dans la rangée.
```
[
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
]
```
et vérifier que le retour est false.

### it 3 - Je souhaite tester si la fonction estValide retourne false si le numéro est déjà présent dans la même colonne.

Cas 1 : Passer la grille suivante et vérifier que le placement du numéro 3 en position (0, 2) est invalide car 3 est déjà présent dans la colonne.
```
[
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
]
```
et vérifier que le retour est false.

### it 4 - Je souhaite tester si la fonction estValide retourne false si le numéro est déjà présent dans le même sous-grille 3x3.

Cas 1 : Passer la grille suivante et vérifier que le placement du numéro 9 en position (0, 2) est invalide car 9 est déjà présent dans la sous-grille.
```
[
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
]
```
et vérifier que le retour est false.

### it 5 - Je souhaite tester si la fonction estValide gère correctement les cas limites.

Cas 1 : Passer une grille entièrement vide et vérifier que le placement du numéro 1 en position (8, 8) est valide.
```
[
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]
```
et vérifier que le retour est true.

## Description : Fonction resoudreSudoku
### it 1 - Je souhaite tester si la fonction resoudreSudoku résout correctement un puzzle de Sudoku valide.

Cas 1 : Passer la grille suivante et vérifier que la fonction retourne true et que la grille est résolue comme prévu.
```
[
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,0,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9]
]
```
et vérifier que le retour est true et que la grille correspond à la solution attendue :
```
[
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
]
```
### it 2 - Je souhaite tester si la fonction resoudreSudoku retourne false pour un puzzle de Sudoku non résolvable.

Cas 1 : Passer la grille suivante et vérifier que le retour est false.
```
[
  [5, 1, 6, 8, 4, 9, 7, 3, 2],
  [3, 0, 7, 6, 0, 5, 0, 0, 0],
  [8, 0, 9, 7, 0, 0, 0, 6, 5],
  [1, 3, 5, 0, 6, 0, 9, 0, 7],
  [4, 7, 2, 5, 9, 1, 0, 0, 6],
  [9, 6, 8, 3, 7, 0, 5, 0, 0],
  [2, 5, 3, 1, 8, 6, 0, 7, 4],
  [6, 8, 4, 2, 5, 7, 0, 0, 0],
  [7, 9, 1, 0, 3, 0, 6, 5, 8]
]
```
et vérifier que le retour est false.

### it 3 - Je souhaite tester si la fonction resoudreSudoku retourne true pour un puzzle de Sudoku déjà résolu.

Cas 1 : Passer la grille suivante et vérifier que le retour est true et que la grille reste inchangée.
```
[
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
]
```
et vérifier que le retour est true et que la grille correspond exactement à celle fournie.

### it 4 - Je souhaite tester si la fonction resoudreSudoku résout correctement un puzzle de Sudoku ayant plusieurs solutions en retournant au moins une solution valide.

Cas 1 : Passer une grille entièrement vide et vérifier que le retour est true et que toutes les cellules de la grille sont remplies avec des nombres entre 1 et 9.
```
[
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]
```
et vérifier que toutes les cellules sont remplies avec des valeurs entre 1 et 9.


