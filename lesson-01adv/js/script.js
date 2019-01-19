const images = ['img/img_1.jpg1', 'img/img_2.jpg', 'img/img_3.jpg'];

const imgBlock = document.querySelector('.imageBlock');

const showImage = (path) => {
   return new Promise((resolve, reject) => {
      let img = new Image();
      img.src = path;
      img.onload = () => resolve(img);
      img.onerror = () => reject('Ошибка при загрузке изображения' + path);
   });
};

Promise.all(images.map(path => showImage(path)))
   .then(images => {
      for (let img of images) {
         img.width = img.width / 10;
         img.height = img.height / 10;
         imgBlock.appendChild(img);
      }
   })
   .catch(err => console.error(err));