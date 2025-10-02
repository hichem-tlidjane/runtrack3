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
$(function () {
  let images = [
    "01.png",
    "02.png",
    "10.png",
    "11.png",
    "12.png",
    "20.png",
    "21.png",
    "22.png",
    null,
  ];
  let winImages = images.slice(); // Ordre gagnant

  function shuffle(array) {
    let shuffled, inv;
    do {
      shuffled = array.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      inv = getInversions(shuffled);
    } while (inv % 2 !== 0);
    return shuffled;
  }

  function getInversions(arr) {
    let inv = 0;
    const flat = arr.filter((x) => x !== null);
    for (let i = 0; i < flat.length; i++) {
      for (let j = i + 1; j < flat.length; j++) {
        if (flat[i] > flat[j]) inv++;
      }
    }
    return inv;
  }

  function render(tiles) {
    $("#gameContainer").empty();
    tiles.forEach((img, idx) => {
      let div = $('<div class="tile"></div>');
      if (img) {
        div.append(`<img src="${img}" style="width:100%;height:100%">`);
        div.on('click', onTileClick);
      } else {
        div.addClass("empty");
      }
      div.data("index", idx);
      $("#gameContainer").append(div);
    });
  }

  function getTiles() {
    let tiles = [];
    $("#gameContainer .tile").each(function () {
      let img = $(this).find("img").attr("src");
      tiles.push(img ? img : null);
    });
    return tiles;
  }

  function canMove(idx, emptyIdx) {
    let row = Math.floor(idx / 3),
      col = idx % 3;
    let emptyRow = Math.floor(emptyIdx / 3),
      emptyCol = emptyIdx % 3;
    return Math.abs(row - emptyRow) + Math.abs(col - emptyCol) === 1;
  }

  function checkWin(tiles) {
    for (let i = 0; i < 8; i++) {
      if (tiles[i] !== winImages[i]) return false;
    }
    return true;
  }

  function blockGame() {
    $("#gameContainer .tile").off("click");
  }

  function onTileClick() {
    let idx = $(this).index();
    let tiles = getTiles();
    let emptyIdx = tiles.indexOf(null);
    if (canMove(idx, emptyIdx)) {
      // Swap
      [tiles[idx], tiles[emptyIdx]] = [tiles[emptyIdx], tiles[idx]];
      render(tiles);
      if (checkWin(tiles)) {
        $("#resultMessage").text("Vous avez gagné").css("color", "green");
        blockGame();
      }
    }
  }

  function startGame() {
    let tiles = shuffle(images);
    render(tiles);
    $("#resultMessage").text("").css("color", "");
    $("#gameContainer .tile").on("click", onTileClick);
  }

  $("#restartButton").click(function () {
    startGame();
  });

  // Initialisation
  startGame();
});
