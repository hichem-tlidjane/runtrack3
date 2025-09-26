// Prenez ce logo de La Plateforme_ et réalisez un jeu du taquin :
// Le taquin est composé de 8 carreaux qui glissent dans une grille prévue pour 9.
// Il consiste à remettre dans l'ordre les 8 carreaux à partir d'une configuration initiale. Le
// plateau de jeu est initialisé de façon aléatoire.
// Lorsqu’un carreau est cliqué, il se déplace dans la case vide adjacente (si il y en a une).
// Lorsque l’image est correctement recomposée, le message “Vous avez gagné” s’affiche
// en vert et bloque la partie.
// Un bouton “Recommencer” apparaît et permet de relancer une partie.

// Ressources : voici les images :
// image 1
// image 2
// image 3
// image 4
// image 5

// image 6
// image 7
// image 8
// image 9


// 
const images = [
    "01.png", "02.png", "10.png",
    "11.png", "12.png", "20.png",
    "21.png", "22.png", null // null = case vide
];

let tiles = [];
let emptyIndex = 8; // position de la case vide

const gameContainer = document.getElementById('gameContainer');
const resultMessage = document.getElementById('resultMessage');
const restartButton = document.getElementById('restartButton');

function shuffle(array) {
    // Mélange le tableau jusqu'à obtenir une configuration résoluble
    let shuffled, inv;
    do {
        shuffled = array.slice();
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        inv = getInversions(shuffled);
    } while (inv % 2 !== 0); // Un taquin 3x3 n'est résoluble que si le nombre d'inversions est pair
    return shuffled;
}

function getInversions(arr) {
    let inv = 0;
    const flat = arr.filter(x => x !== null);
    for (let i = 0; i < flat.length; i++) {
        for (let j = i + 1; j < flat.length; j++) {
            if (parseInt(flat[i]) > parseInt(flat[j])) inv++;
        }
    }
    return inv;
}

function render() {
    gameContainer.innerHTML = '';
    tiles.forEach((img, idx) => {
        const div = document.createElement('div');
        div.className = 'tile' + (img === null ? ' empty' : '');
        div.dataset.index = idx;
        if (img) {
            const image = document.createElement('img');
            image.src = img;
            image.alt = img;
            image.style.width = "100%";
            image.style.height = "100%";
            div.appendChild(image);
            div.addEventListener('click', () => moveTile(idx));
        }
        gameContainer.appendChild(div);
    });
}

function moveTile(idx) {
    if (canMove(idx)) {
        [tiles[emptyIndex], tiles[idx]] = [tiles[idx], tiles[emptyIndex]];
        emptyIndex = idx;
        render();
        checkWin();
    }
}

function canMove(idx) {
    const row = Math.floor(idx / 3), col = idx % 3;
    const emptyRow = Math.floor(emptyIndex / 3), emptyCol = emptyIndex % 3;
    return (Math.abs(row - emptyRow) + Math.abs(col - emptyCol)) === 1;
}

function checkWin() {
    for (let i = 0; i < 8; i++) {
        if (tiles[i] !== images[i]) {
            resultMessage.textContent = '';
            return false;
        }
    }
    resultMessage.textContent = "Vous avez gagné";
    resultMessage.style.color = "green";
    // Bloque la partie
    document.querySelectorAll('.tile').forEach(tile => tile.classList.add('blocked'));
    return true;
}

function restart() {
    tiles = shuffle(images);
    emptyIndex = tiles.indexOf(null);
    resultMessage.textContent = '';
    resultMessage.style.color = "";
    render();
    // Débloque la partie
    document.querySelectorAll('.tile').forEach(tile => tile.classList.remove('blocked'));
}

restartButton.addEventListener('click', restart);

// Initialisation
restart();