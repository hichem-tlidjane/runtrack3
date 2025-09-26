// Dans cet exercice, 6 images s’assemblent pour former un arc-en-ciel, il vous faudra les
// mélanger puis les remettre en ordre.

// Le but de ce job sera dans un premier temps de créer une balise <button>. Cette balise
// servira à mélanger l’ensemble des images de l’arc-en-ciel.
// Par la suite, vous devrez faire en sorte qu’il soit possible de remettre les images dans le
// bon ordre, en utilisant un ou plusieurs conteneurs.
// Une fois que les 6 images sont ordonnées, un message s’affiche en dessous :
// Si l'arc-en-ciel est bien reconstitué, le message “Vous avez gagné” s’affiche en vert.
// Sinon, le message “Vous avez perdu” s’affiche en rouge.

const shuffleButton = document.getElementById('shuffleButton');
const rainbowContainer = document.getElementById('rainbowContainer');
const resultMessage = document.getElementById('resultMessage');

function shuffleImages() {
    const images = Array.from(rainbowContainer.children);
    // Mélange aléatoire avec Fisher-Yates
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }
    // Vide le conteneur et réinsère les images dans le nouvel ordre
    rainbowContainer.innerHTML = '';
    images.forEach(img => rainbowContainer.appendChild(img));
    resultMessage.textContent = '';
}

shuffleButton.addEventListener('click', shuffleImages);

// Drag & Drop
let draggedImg = null;

rainbowContainer.addEventListener('dragstart', (e) => {
    if (e.target.classList.contains('rainbow-image')) {
        draggedImg = e.target;
    }
});

rainbowContainer.addEventListener('dragover', (e) => {
    e.preventDefault();
});

rainbowContainer.addEventListener('drop', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('rainbow-image') && draggedImg) {
        if (draggedImg !== e.target) {
            // Échange les images
            const draggedIndex = Array.from(rainbowContainer.children).indexOf(draggedImg);
            const targetIndex = Array.from(rainbowContainer.children).indexOf(e.target);
            if (draggedIndex < targetIndex) {
                rainbowContainer.insertBefore(draggedImg, e.target.nextSibling);
            } else {
                rainbowContainer.insertBefore(draggedImg, e.target);
            }
            checkOrder();
        }
    }
    draggedImg = null;
});

function checkOrder() {
    const images = Array.from(rainbowContainer.children);
    const isOrdered = images.every((img, idx) => img.getAttribute('data-order') == idx + 1);
    if (isOrdered) {
        resultMessage.textContent = "Vous avez gagné";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "Vous avez perdu";
        resultMessage.style.color = "red";
    }
}













