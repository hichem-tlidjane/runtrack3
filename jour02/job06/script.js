// Par défaut, votre index.php n’a pas de contenu.
// Lorsqu’un utilisateur effectue un code konami, la page devient stylisée, aux couleurs de
// La Plateforme_.

let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let userInput = [];
document.addEventListener("keydown", (event) => {
    userInput.push(event.keyCode);
    if (userInput.toString().indexOf(konamiCode) >= 0) {
        document.body.style.backgroundColor = "#009999";
        document.body.style.color = "white";
        document.body.style.fontFamily = "Arial, sans-serif";
        document.body.innerHTML = "<h1>Bienvenue à La Plateforme_</h1>";
    }
    if (userInput.length > konamiCode.length) {
        userInput.shift();
    }
});



