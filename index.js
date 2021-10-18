const jsmediatags = window.jsmediatags;
const playButton = document.getElementById('Play');
const icon = document.getElementById('pause-icon');
const songname = document.getElementById('song-name');
const forward = document.getElementById('Next');
const prev = document.getElementById('Previous');
const img = document.getElementById('gifplayer');
const volumerange = document.getElementById('myRange');
const timertouch = document.getElementById('timer');
var index = 0;
img.setAttribute('src','stopped.png')


var isplaying = false;
var songs = [{
    'Name': 'Lemmino -  Earth',
    'Path':'https://firebasestorage.googleapis.com/v0/b/javascript-music-play.appspot.com/o/1.mp3?alt=media&token=2ecac121-7db6-4384-895b-03852a517b1d'
}, {
    Name: 'Overwhelmed',
        Path: 'https://firebasestorage.googleapis.com/v0/b/javascript-music-play.appspot.com/o/2.mp3?alt=media&token=e8786821-85a0-4c9d-a604-f63419b3c5df'
    },
    { Name: 'TwentyonePilots -  Stressed Out', Path: 'https://firebasestorage.googleapis.com/v0/b/javascript-music-play.appspot.com/o/3.mp3?alt=media&token=992ccd3a-b4c1-486a-967e-89b13704c849' },
    { Name: 'Masakali-Cover', Path: 'https://firebasestorage.googleapis.com/v0/b/javascript-music-play.appspot.com/o/4.mp3?alt=media&token=fe82856a-2448-4e51-b665-b63c7a4bff4b' },
    { Name: 'Heathens - TwentyOnePilots', Path: 'https://firebasestorage.googleapis.com/v0/b/javascript-music-play.appspot.com/o/5.mp3?alt=media&token=9d8ebf93-53ea-458c-bd80-a15cf97b2f86' },
    { Name: 'Falling -Travis', Path: 'https://firebasestorage.googleapis.com/v0/b/javascript-music-play.appspot.com/o/6.mp3?alt=media&token=6a57cccd-79ab-4123-80b0-d8f12d5a6e2a' },
    { Name: 'Stay - Justin Bieber', Path: 'https://firebasestorage.googleapis.com/v0/b/javascript-music-play.appspot.com/o/7.mp3?alt=media&token=a244d74a-e312-41c9-a54f-af34fb8dfd35' },
    { Name: 'Everything at Once', Path: 'https://firebasestorage.googleapis.com/v0/b/javascript-music-play.appspot.com/o/8.mp3?alt=media&token=e853415c-3f6f-4f0a-b657-1322f74bf634' },
    { Name: 'Two of Us', Path: 'https://firebasestorage.googleapis.com/v0/b/javascript-music-play.appspot.com/o/9.mp3?alt=media&token=63b5cfcc-6623-4c04-a31c-81cb920454ac' }]

var audio = new Audio(songs[index].Path);
playButton.addEventListener("click", Play)
volumerange.addEventListener("input", function (event) {
    event.preventDefault();
    var volumevalue = volumerange.value/100;
    audio.volume = volumevalue;
    console.log(volumevalue);
    
    
})

forward.addEventListener("click", function (event) {
    event.preventDefault();
    index = index + 1;
    if (index == 9) {
        index = 0;  
    }
    audio.pause();
    audio = new Audio(songs[index].Path)
    audio.play();
    songname.innerText = songs[index].Name;
    isplaying = true;

});
prev.addEventListener("click", function () {
    index = index - 1;
    if (index < 0) {
        index = 8;
    }
    console.log(index);
    audio.pause();
    audio = new Audio(songs[index].Path)
    audio.play();
    songname.innerText = songs[index].Name;
    isplaying = true;

});
function Play(event) {
         
        event.preventDefault();
        if (!isplaying) {
            audio.play();
            icon.setAttribute("class", "fas fa-pause");
            isplaying = true;
            songname.innerText = songs[index].Name;
            img.setAttribute('src', 'playing.gif')
            
            
        }
        else {
            audio.pause();
            icon.setAttribute("class", "fas fa-play");
            isplaying = false;
            img.setAttribute('src','stopped.png')
            

        }

}
var intervalId = window.setInterval(function () {
    /// call your function here
    timertouch.innerText = Math.floor(audio.currentTime / 60) + ":" + parseInt(audio.currentTime%60) + "/" + Math.floor(audio.duration/60) + " : "+ parseInt(audio.duration%60);
}, 1000);