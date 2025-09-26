// Créez un fichier style.css. Définissez la taille minimale de votre body à 4096px.
// Ajoutez un <footer> qui prend toute la largeur de votre page en position : fixed en bas
// de votre fenêtre.
// De la même façon qu’une barre de chargement, la couleur du footer doit évoluer en
// fonction du pourcentage de scrolling.

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    let opacity = Math.max(0, 1 - scroll / 4096);
    document.getElementById("footer").style.backgroundColor = `rgba(0, 0, 0, ${opacity })`;
});

