const playBtn = document.querySelector('.play');
const logoBird = document.querySelector('.logo');
const audio =  new Audio;
let isPlay = false;

function playAudio() {
audio.src = "assets/audio/forest.mp3";  
  audio.currentTime = 0;
  audio.play();
  playBtn.classList.add('pause');
  console.log('play');
  isPlay = true;
    }
    function pauseAudio() {
    audio.pause();
    playBtn.classList.remove('pause');
    isPlay = false;
   }
   function playBird() {
    audio.src = "assets/audio/forest.mp3";  
      audio.currentTime = 0;
      audio.play();
      playBtn.classList.add('pause');
      console.log('play');
      isPlay = true;
      Images.style.backgroundImage = `url('./assets/img/forest.jpg')`;
      birdsSound.forEach((btn) => btn.classList.remove('active'));
        }


playBtn.addEventListener('click', () => {isPlay ? pauseAudio ():playAudio()});
logoBird.addEventListener('click', playBird);
  
const birdsSound = document.querySelectorAll('.nav-item');
const birdsSounds = document.querySelector('.nav-list');
const Images = document.querySelector('.main');
function changeSounds(event) {
    audio.src = "assets/audio/forest.mp3";  
    let sound = event.target.dataset.bird;
    if(event.target.classList.contains('nav-item')) {
          audio.src = `./assets/audio/${sound}.mp3`;
          Images.style.backgroundImage = `url('./assets/img/${sound}.jpg')`; 
          audio.play();
          playBtn.classList.add('pause');
          console.log('change');
          isPlay = true;
         birdsSound.forEach((btn) => btn.classList.remove('active'));
          event.target.classList.add('active');
        }
        else if (!isPlay){
            audio.currentTime = 0;
  audio.play();
  playBtn.classList.add('pause');
  isPlay = true;
        }
    };
   //birdsSounds.addEventListener('click', () => {isPlay ? pauseAudio ():changeSounds});
   birdsSounds.addEventListener('click', changeSounds);