// let images = [ 'img/img_1.jpg','img/img_2.jpg', 'img/img_3.jpg'];

// for (let image of images) {
//     document.createElement();
// }

// function loadImage(path) {
//     return new Promise((resolve, reject) => {

//     })
// }


class Slider {
    constructor (width, height, count) {
        this.width = width;
        this.height = height;
        this.count = count;
    }

    nextSlide(){
        console.log('next slide');
    }
    prevSlide(){
        console.log('prev slide');
    }
    showInfo(){
        console.log( this.width, this.height, this.count)
    }
}

class AutoSlider extends Slider {
    constructor(width, height, count, auto){
        super(width, height, count);
        this.auto = auto;
    }
    play(){
        console.log(`Autoplay is ${this.auto}`);
    }
}

const aslide = new AutoSlider(1,2,3,true);

aslide.play();