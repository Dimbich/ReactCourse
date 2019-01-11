export default class Slider {
    constructor (width, height, count) {
        this.width = width;
        this.height = height;
        this.count = count;
    }

    showNextSlide(){
        console.log('Показать следующий слайд');
    }
    showPrevSlide(){
        console.log('Показать предыдущий слайд');
    }
    showInfo(){
        console.log(this.width, this.height, this.count);
    }
}

function Button(){
    return 'button';
}

export {Button};
