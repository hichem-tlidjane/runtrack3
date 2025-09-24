// Créez une fonction “sommenombrespremiers” qui prend en paramètres deux variables.
// Si ces deux variables sont des nombres premiers, alors la fonction retourne leur
// somme. Sinon, la fonction retourne false.


function sommenombrespremiers(a, b) {

  function estPremier(num) {
        if (num <= 1) return false;     
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    if (estPremier(a) && estPremier(b)) {
        return a + b;
    }
    return false;
}

console.log(sommenombrespremiers(3, 5)); // 8
console.log(sommenombrespremiers(4, 5)); // false