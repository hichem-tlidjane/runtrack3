//  Récupérez une copie de vos fichiers index.php et script.js. Modifier l’affichage de sorte
// à ce que le message ne soit plus écrit dans une popup mais dans la console web.
// Assurez-vous que tout est bien fonctionnel. 

document.getElementById('popupBtn').addEventListener('click', function() {
    console.log("Hello Javascript!");
});