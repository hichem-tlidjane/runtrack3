<!-- Dans cet exercice, 6 images s’assemblent pour former un arc-en-ciel, il vous faudra les
mélanger puis les remettre en ordre.

Le but de ce job sera dans un premier temps de créer une balise <button>. Cette balise
servira à mélanger l’ensemble des images de l’arc-en-ciel.
Par la suite, vous devrez faire en sorte qu’il soit possible de remettre les images dans le
bon ordre, en utilisant un ou plusieurs conteneurs.
Une fois que les 6 images sont ordonnées, un message s’affiche en dessous :
Si l'arc-en-ciel est bien reconstitué, le message “Vous avez gagné” s’affiche en vert.
Sinon, le message “Vous avez perdu” s’affiche en rouge.

Exemple :

Ressources : Liens vers images de l’arc-en-ciel :
arc1.png
arc2.png
arc3.png

arc4.png
arc5.png
arc6.png -->

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arc-en-ciel - Job 02</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="mainContainer">
        <div id="rainbowContainer">
            <img src="arc1.png" alt="Arc-en-ciel 1" class="rainbow-image" data-order="1">
            <img src="arc2.png" alt="Arc-en-ciel 2" class="rainbow-image" data-order="2">
            <img src="arc3.png" alt="Arc-en-ciel 3" class="rainbow-image" data-order="3">
            <img src="arc4.png" alt="Arc-en-ciel 4" class="rainbow-image" data-order="4">
            <img src="arc5.png" alt="Arc-en-ciel 5" class="rainbow-image" data-order="5">
            <img src="arc6.png" alt="Arc-en-ciel 6" class="rainbow-image" data-order="6">
        </div>
        <button id="shuffleButton">Mélanger les images</button>
        <div id="resultMessage"></div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"></script>
    <script src="script.js"></script>
</body>
</html>