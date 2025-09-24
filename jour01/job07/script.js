// Créez une fonction “jourtravaille” qui prend en paramètre une date au format Date. Si la
// date correspond à un jour férié de l’année 2020, la fonction affiche “Le $jour $mois
// $année est un jour férié”. Si elle correspond à un samedi ou un dimanche, alors le
// message affiché est “Non, $jour $mois $année est un week-end”, sinon afficher “Oui,
// $jour $mois $année est un jour travaillé”.

// $jour correspond au numéro du jour, $mois au mois et $année à l’année. Les jours fériés
// sont référencés sur
// https://demarchesadministratives.fr/actualites/calendrier-des-jours-feries-2019-2020-2021

function jourtravaille(date) {
    let joursFeries2020 = [
        new Date('2020-01-01'), // Jour de l'An
        new Date('2020-04-13'), // Lundi de Pâques
        new Date('2020-05-01'), // Fête du Travail
        new Date('2020-05-08'), // Victoire 1945
        new Date('2020-05-21'), // Ascension
        new Date('2020-06-01'), // Lundi de Pentecôte       
        new Date('2020-07-14'), // Fête Nationale
        new Date('2020-08-15'), // Assomption
        new Date('2020-11-01'), // Toussaint
        new Date('2020-11-11'), // Armistice 1918
        new Date('2020-12-25')  // Noël
    ];
    let jour = date.getDate();
    let mois = date.getMonth() + 1; // Les mois sont indexés à partir de 0
    let annee = date.getFullYear(); 
    let estJourFerie = joursFeries2020.some(jourFerie => 
        jourFerie.getDate() === jour && 
        (jourFerie.getMonth() + 1) === mois && 
        jourFerie.getFullYear() === annee
    );
    let jourSemaine = date.getDay(); // 0 = Dimanche, 6 = Samedi

    if (estJourFerie) {
        console.log(`Le ${jour} ${mois} ${annee} est un jour férié.`);
    } else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, ${jour} ${mois} ${annee} est un week-end.`);
    } else {
        console.log(`Oui, ${jour} ${mois} ${annee} est un jour travaillé.`);
    }

}

// Exemples d'utilisation
jourtravaille(new Date('2020-01-01')); // Jour férié
jourtravaille(new Date('2020-05-04')); // Jour travaillé
jourtravaille(new Date('2020-05-02')); // Week-end
