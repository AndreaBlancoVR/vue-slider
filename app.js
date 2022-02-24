
const SLIDES = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
        active: 'true',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum',
        active: 'false',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        active: 'false',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
        active: 'false',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
        active: 'false',
    },    
]



// CREO TUTTE LE VARIABILI NON DINAMICHE (E ANCHE QUALCUNA DI QUELLE DINAMICHE)

const MAIN_SECTION = document.getElementById('main-section');

const ROW_MASTER = document.createElement('div');
ROW_MASTER.classList.add('row-master');
MAIN_SECTION.append(ROW_MASTER);

const MAIN_WRAPPER = document.createElement('div');
MAIN_WRAPPER.classList.add('main-wrapper');
ROW_MASTER.append(MAIN_WRAPPER);

const MAIN_ITEM = document.createElement('div');
MAIN_ITEM.classList.add('main-item');
MAIN_WRAPPER.append(MAIN_ITEM);

const MAIN_IMG = document.createElement('img');
MAIN_ITEM.append(MAIN_IMG);

const MAIN_TEXT = document.createElement('div');
MAIN_TEXT.classList.add('main-text');
MAIN_WRAPPER.append(MAIN_TEXT);

let IMG_TITLE = document.createElement('h3');
MAIN_TEXT.append(IMG_TITLE);

let IMG_CAPTION = document.createElement('p');
MAIN_TEXT.append(IMG_CAPTION);

const SIDE_BAR = document.createElement('aside');
SIDE_BAR.classList.add('side-bar');
ROW_MASTER.append(SIDE_BAR);

const SIDE_WRAPPER = document.createElement('div');
SIDE_WRAPPER.classList.add('side-wrapper');
SIDE_BAR.append(SIDE_WRAPPER);

const UL = document.createElement('ul');
SIDE_WRAPPER.append(UL);

const ARROWS = document.createElement('div');
ARROWS.classList.add('arrows');
SIDE_WRAPPER.append(ARROWS);

const UP_ARROW = document.createElement('span');
UP_ARROW.classList.add('up-arrow');
UP_ARROW.innerHTML = ('SU')
ARROWS.append(UP_ARROW);

const DOWN_ARROW = document.createElement('span');
DOWN_ARROW.classList.add('down-arrow');
DOWN_ARROW.innerHTML = ('GIU\'')
ARROWS.append(DOWN_ARROW);


const liArr = []
const overlayArr = []

let currentIndex = 0
let activeIndex = 0

// for(let i = 0; i < SLIDES.length; i++) {
//     //creo gli li e li pusho in un array
//     const liElement = document.createElement('li');
//     liArr.push(liElement);
//     UL.append(liElement);
    
//     //creo gli overlay
//     let overlay = document.createElement('div')
//     overlayArr.push(overlay)
//     liElement.append(overlay);
//     overlay.classList.add('item-overlay');
    
//     //creo il contenitore delle thumb
//     const imgContElement = document.createElement('div');
//     imgContElement.classList.add('img-container');
//     liElement.append(imgContElement);

//     // if(i > 0 ) {
//     //     liArr.append(overlay);
//     //     liarr[activeIndex].classList.add('active')

//     // }
//     // inserisco le immagini nelle thumb
//     const imgElement = document.createElement('img');
//     imgContElement.append(imgElement);
//     imgElement.src = SLIDES[i].image; 
// }


//      SOSTITUZIONE CICLO CON FOREACH

// SLIDES.forEach( ( el, index, array) => {
//     //creo gli li e li pusho in un array
//     const liElement = document.createElement('li');
//     liArr.push(liElement);
//     UL.append(liElement);
    
//     //creo gli overlay
//     let overlay = document.createElement('div')
//     overlayArr.push(overlay)
//     liElement.append(overlay);
//     overlay.classList.add('item-overlay');
    
//     //creo il contenitore delle thumb
//     const imgContElement = document.createElement('div');
//     imgContElement.classList.add('img-container');
//     liElement.append(imgContElement);

//     // inserisco le immagini nelle thumb
//     const imgElement = document.createElement('img');
//     imgContElement.append(imgElement);
//     imgElement.src = el.image; 
// } );


//      DESTRUTTURAZIONE

SLIDES.forEach( ( el, index, array) => {

    const { image } = el;

    //creo gli li e li pusho in un array
    const liElement = document.createElement('li');
    liArr.push(liElement);
    UL.append(liElement);
    
    //creo gli overlay
    let overlay = document.createElement('div')
    overlayArr.push(overlay)
    liElement.append(overlay);
    overlay.classList.add('item-overlay');
    
    //creo il contenitore delle thumb
    const imgContElement = document.createElement('div');
    imgContElement.classList.add('img-container');
    liElement.append(imgContElement);

    // inserisco le immagini nelle thumb
    const imgElement = document.createElement('img');
    imgContElement.append(imgElement);
    imgElement.src = image; 
} );





// Assegno/rimuovo le classi "dimaniche"
liArr[activeIndex].classList.add('active')
overlayArr[activeIndex].classList.remove('item-overlay')

// inserisco immagine titolo e didascalia
MAIN_IMG.src = SLIDES[activeIndex].image;
IMG_TITLE.innerHTML = ( SLIDES[activeIndex].title );
IMG_CAPTION.innerHTML = ( SLIDES[activeIndex].text ); 


DOWN_ARROW.addEventListener('click', function() {

    if(activeIndex < SLIDES.length - 1) {
         liArr[activeIndex].classList.remove('active')
         overlayArr[activeIndex].classList.add('item-overlay')
         activeIndex++
         liArr[activeIndex].classList.add('active')
         overlayArr[activeIndex].classList.remove('item-overlay')
         MAIN_IMG.src = SLIDES[activeIndex].image;
        IMG_TITLE.innerHTML = ( SLIDES[activeIndex].title );
        IMG_CAPTION.innerHTML = ( SLIDES[activeIndex].text );
    } 
} )

UP_ARROW.addEventListener('click', function() {

    if(activeIndex > 0) {
         liArr[activeIndex].classList.remove('active')
         overlayArr[activeIndex].classList.add('item-overlay')
         activeIndex--
         liArr[activeIndex].classList.add('active')
         overlayArr[activeIndex].classList.remove('item-overlay')
         MAIN_IMG.src = SLIDES[activeIndex].image;
        IMG_TITLE.innerHTML = ( SLIDES[activeIndex].title );
        IMG_CAPTION.innerHTML = ( SLIDES[activeIndex].text );
    } 
} )
