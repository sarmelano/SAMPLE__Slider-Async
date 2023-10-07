const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = slider.getElementsByTagName('img');
let currentIndex = 0;
let timer;
let timeInterval = 3000;

function showImage(index) {  //принимаем индекс изображения (сначала 0)
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none'; //и скрываем все изображения
  }
  images[index].style.display = 'block'; //кроме текущего
}

//===============обработчик
function nextImage() {
  currentIndex++;  //увеличили
  if (currentIndex >= images.length) { //не превышает ли размер "массива"
    currentIndex = 0;  //если да то начни с начала (с нуля)
  }
  showImage(currentIndex);  //покажи тот самый индекс
  resetTimer();  //сбросим таймер чтоб не мелькал
}

function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;  //если отрицательное значение то идем в конец массива (по кругу)
  }
  showImage(currentIndex);
  resetTimer();
}

function resetTimer() {
  clearInterval(timer); // встроенный стоп
  timer = setInterval(nextImage, timeInterval); //запуск заново
}
//=================обработчик конец

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

showImage(currentIndex);
resetTimer(); //запуск таймера сразу после загрузки страницы