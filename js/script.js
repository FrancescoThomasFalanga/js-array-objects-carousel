/*Consegna:
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: 
costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e 
dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca 
la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se 
l'utente clicca la freccia verso sinistra.
*/

// variabili di: immagine grossa attiva, slider a sinistra/sopra e destra/sotto
let mainImage = document.getElementById("active-image");
let upArrowEl = document.getElementById("up-arrow");
let downArrowEl = document.getElementById("down-arrow");


let thumbnailsElement = document.getElementById("thumbnails-container");

// inizializzo contatore per i click
let isClick = 0;

let timer;

// Creo Array di oggetti:
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


// al caricamento della pagina, l'immagine che verrà mostrata sarà quella con INDICE 0 in quanto, inizializzato il contatore è uguale a 0
showImage();

// dai inizio all'autoplay
startTimer();

// Inserisco dinamicamente le thumbnail in pagina:
images.forEach((activeElement) => {

    thumbnailsElement.innerHTML += `<img src="${activeElement.image}" class="thumbnail">`;

})

const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    isClick = index;
    showImage();
  });
});



upArrowEl.addEventListener("click", function() {

    // diminuisco di 1 il contatore ogni volta che si clicca
    isClick--;

    // se il click diventa < 0 allora porta il isClick alla lunghezza dell'array
    if (isClick < 0) {

        isClick = images.length - 1;

    }

    // log del click per controllare se l'INDICE dell'array sia giusto
    console.log(isClick);

    // funzione che al click mostra perfettamente l'immagine corrente
    showImage()

    // ferma l'Autoplay ogni volta che clicca manualmente
    stopTimer();
})


downArrowEl.addEventListener("click", function() {

    // aumento di 1 il contatore ogni volta che si clicca
    isClick++;

    // se il click diventa > della lunghezza dell'array allora porta il isClick a 0
    if (isClick > images.length - 1) {

        isClick = 0;

    }

    // log del click per controllare se l'INDICE dell'array sia giusto
    console.log(isClick);

    // funzione che al click mostra perfettamente l'immagine corrente
    showImage();

    // ferma l'Autoplay ogni volta che clicca manualmente
    stopTimer();
});











// ________________________________________________________________________________________________________________________________________________
//                                                      FUNCTION
// ________________________________________________________________________________________________________________________________________________

// Mostra l'immagine corrente
function showImage() {

    mainImage.innerHTML = `<img src="${images[isClick].image}" id="main-image"> <h2>${images[isClick].title}</h2> <span>${images[isClick].text}</span>`;

}

// per iniziare il timer
function startTimer() {

    timer = setInterval(() => {

        isClick++;

        if (isClick >= images.length) {

            isClick = 0;

        }

        showImage();
        
    }, 3000);

}

// per fermare il timer
function stopTimer() {

    clearInterval(timer);

}

// ________________________________________________________________________________________________________________________________________________
//                                                      /FUNCTION
// ________________________________________________________________________________________________________________________________________________