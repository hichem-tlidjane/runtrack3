// Maintenant que vous savez comment inclure du javascript et que vous maitrisez la
// console web, vous allez pouvoir explorer davantage la syntaxe, la grammaire et le
// lexique du langage javascript.
// Pour l’ensemble des exercices suivants, vous devez rendre un fichier script.js contenant
// le rendu de l’exercice et un fichier index.php qui l’inclut.
// Déclarez une fonction “bisextile” qui prend en paramètre une variable “année”. Si l’année
// est bisextile, la fonction retourne true, sinon elle retourne false.
// Une année est bisextile si elle est divisible par 4 mais pas par 100, ou si elle est
// divisible par 400.

function bisextile(annee) {
    if((annee % 4 ===0 && annee % 100 !==0) || (annee % 400 ===0)) {
        return true;
    }
    return false;
}

console.log(bisextile(2020)); 
console.log(bisextile(1900));
