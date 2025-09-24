// Créez une fonction “tri” qui prend en paramètres un tableau de nombres nommé
// “numbers” et une variable “order” qui contient “asc” ou “desc”. A l’aide de la fonction
// sort() d’un algorithme développé par vos soins, cette fonction doit trier le tableau dans
// l’ordre ascendant ou décroissant, selon le paramètre passé, puis retourner le tableau.

function tri (numbers, order) {
    if (order === 'asc') {
        numbers.sort((a, b) => a - b);
    } else if (order === 'desc') {
        numbers.sort((a, b) => b - a);
    }       console.log(numbers);
    return numbers;

}

tri([3, 7, 4, 1, 5, 9], 'asc'); // [1, 3, 4, 5, 7, 9]
tri([3, 7, 4, 1, 5, 9], 'desc'); // [9, 7, 5, 4, 3, 1]