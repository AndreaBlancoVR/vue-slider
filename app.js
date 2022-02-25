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

        CurrentIndexFn: function( i ){
            this.currentIndex = i
        },

    }   
});

setInterval( () => {
    app.downFn( this.currentIndex) ;
}, 3000);


