const app = new Vue({
    el: '#app',
    data: {
        currentIndex: 0,
        activeIndex: 0,
        SLIDES: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'SVEZ Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                active: 'true',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'SVIZ Lorem ipsum',
                active: 'false',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'GB Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                active: 'false',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'GER Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                active: 'false',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'PAR Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                active: 'false',
            },    
        ],
    },
    methods: {
        upFn: function(){
            // return (currentIndex > 0 ) ? this.currentIndex -- : currentIndex;
            // this.currentIndex --
                if (this.currentIndex == 0 ){
                    this.currentIndex = 4;
                }
                else {
                    this.currentIndex --
                }
        },

        downFn: function(){
            // return (currentIndex == this.SLIDES.length - 1) ? this.currentIndex = 0 : currentIndex ++;
            // this.currentIndex ++
            if (this.currentIndex == this.SLIDES.length - 1 ){
                this.currentIndex = 0;
            }
            else {
                this.currentIndex ++
            }
        },

        CurrentIndexFn: function(){
            this.currentIndex = [i]
        },
    }
    

});







// const liArr = []
// const overlayArr = []

// // let currentIndex = 0
// let activeIndex = 0


// SLIDES.forEach( ( el, index, array) => {

//     const { image } = el;

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
//     imgElement.src = image; 
// } );



// // Assegno/rimuovo le classi "dimaniche"
// liArr[activeIndex].classList.add('active')
// overlayArr[activeIndex].classList.remove('item-overlay')

// // inserisco immagine titolo e didascalia
// MAIN_IMG.src = SLIDES[activeIndex].image;
// IMG_TITLE.innerHTML = ( SLIDES[activeIndex].title );
// IMG_CAPTION.innerHTML = ( SLIDES[activeIndex].text ); 


// DOWN_ARROW.addEventListener('click', function() {

//     if(activeIndex < SLIDES.length - 1) {
//          liArr[activeIndex].classList.remove('active')
//          overlayArr[activeIndex].classList.add('item-overlay')
//          activeIndex++
//          liArr[activeIndex].classList.add('active')
//          overlayArr[activeIndex].classList.remove('item-overlay')
//          MAIN_IMG.src = SLIDES[activeIndex].image;
//         IMG_TITLE.innerHTML = ( SLIDES[activeIndex].title );
//         IMG_CAPTION.innerHTML = ( SLIDES[activeIndex].text );
//     } 
// } )

// UP_ARROW.addEventListener('click', function() {

//     if(activeIndex > 0) {
//          liArr[activeIndex].classList.remove('active')
//          overlayArr[activeIndex].classList.add('item-overlay')
//          activeIndex--
//          liArr[activeIndex].classList.add('active')
//          overlayArr[activeIndex].classList.remove('item-overlay')
//          MAIN_IMG.src = SLIDES[activeIndex].image;
//         IMG_TITLE.innerHTML = ( SLIDES[activeIndex].title );
//         IMG_CAPTION.innerHTML = ( SLIDES[activeIndex].text );
//     } 
// } )
