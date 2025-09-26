// Créez une balise <button> et sélectionnez-la dans votre code JavaScript.
// En cliquant sur le bouton, vous devrez faire apparaître le texte sur votre page HTML :
// “Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit,
// ensuite on prie.”
// Ensuite créez un bouton qui servira à cacher tout l’élément html.

const buttonShow = document.createElement('button');
buttonShow.textContent = 'Afficher la citation';
document.body.appendChild(buttonShow);
buttonShow.style.marginRight = '10px';

const buttonHide = document.createElement('button');
buttonHide.textContent = 'Cacher la citation';
document.body.appendChild(buttonHide);
buttonHide.style.marginRight = '10px';
buttonHide.style.marginLeft = '10px';
const quote = document.createElement('p');
quote.textContent = "Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.";
document.body.appendChild(quote);
quote.style.marginTop = '20px';
quote.style.fontSize = '18px';
quote.style.display = 'none'; // Initialement caché
buttonShow.addEventListener('click', () => {
    quote.style.display = 'block';
});
buttonHide.addEventListener('click', () => {
    quote.style.display = 'none';
});