<!-- Créez une balise <button> et sélectionnez-la dans votre code JavaScript.
En cliquant sur le bouton, vous devrez faire apparaître le texte sur votre page HTML :
“Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit,
ensuite on prie.”
Ensuite créez un bouton qui servira à cacher tout l’élément html. -->

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 01</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <button id="showBtn">Afficher la citation</button>
    <button id="hideBtn">Cacher la citation</button>
    <div id="text" style="display:none;">
        Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script.js" defer></script>
</body>
</html>