<!-- Prenez ce logo de La Plateforme_ et réalisez un jeu du taquin :
Le taquin est composé de 8 carreaux qui glissent dans une grille prévue pour 9.
Il consiste à remettre dans l'ordre les 8 carreaux à partir d'une configuration initiale. Le
plateau de jeu est initialisé de façon aléatoire.
Lorsqu’un carreau est cliqué, il se déplace dans la case vide adjacente (si il y en a une).
Lorsque l’image est correctement recomposée, le message “Vous avez gagné” s’affiche
en vert et bloque la partie.
Un bouton “Recommencer” apparaît et permet de relancer une partie.

Ressources : voici les images :
image 1
image 2
image 3
image 4
image 5

image 6
image 7
image 8
image 9 -->

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Taquin - Job 03</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
   <div class="taquin-container">
    <div id="gameContainer">
        <div class="tile"><img src="01.png" alt="1." style="width:100%;height:100%"></div>
        <div class="tile"><img src="02.png" alt="2" style="width:100%;height:100%"></div>
        <div class="tile"><img src="10.png" alt="3" style="width:100%;height:100%"></div>
        <div class="tile"><img src="11.png" alt="4" style="width:100%;height:100%"></div>
        <div class="tile"><img src="12.png" alt="5" style="width:100%;height:100%"></div>
        <div class="tile"><img src="20.png" alt="6" style="width:100%;height:100%"></div>
        <div class="tile"><img src="21.png" alt="7" style="width:100%;height:100%"></div>
        <div class="tile"><img src="22.png" alt="8" style="width:100%;height:100%"></div>
        <div class="tile empty"></div>
    </div>
</div>
    <button id="restartButton">Recommencer</button> 
    <div id="resultMessage"></div>
    <script src="script.js"></script> 
</body>
</html>