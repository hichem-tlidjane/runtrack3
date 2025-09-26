<!-- Créez un <article> ayant comme id “citation” et contenant le texte suivant :
"La vie a beaucoup plus d’imagination que nous”.
Créez un <button> ayant comme id “button”. Lorsque l’on clique sur le bouton,
récupérez le contenu de l’élément ayant comme id “citation” et affichez le contenu dans
la console de développement.
La fonction de récupération et d’affichage doit se nommer “citation()”. -->

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="script.js"></script>
    <article id="citation">La vie a beaucoup plus d’imagination que nous.</article>
    <button id="button" onclick="citation()">Cliquez ici</button>
</body>
</html>