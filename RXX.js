console.log("Spotify Clone Running...");
alert("HEY GUYS!! WELCOME TO VAIBHAV'S TOP MUSIC VAULT")
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3'); // default first song
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Superman - Eminem", filePath: "songs/1.mp3", coverPath: "cover1.jpeg"},
    {songName: "The Real Slim Shady", filePath: "songs/2.mp3", coverPath: "cover2.jpeg"},
    {songName: "Perfect - Ed Sheeran", filePath: "songs/3.mp3", coverPath: "cover3.jpeg"},
    {songName: "Alag Aasmaan", filePath: "songs/4.mp3", coverPath: "cover4.jpeg"},
    {songName: "London", filePath: "songs/5.mp3", coverPath: "cover5.jpeg"},
    {songName: "Summertime Sadness", filePath: "songs/6.mp3", coverPath: "cover6.jpeg"},
    {songName: "Don't Matter", filePath: "songs/7.mp3", coverPath: "cover7.jpeg"},
    {songName: "Co2", filePath: "songs/8.mp3", coverPath: "cover8.jpeg"},
    {songName: "Udaarian", filePath: "songs/9.mp3", coverPath: "cover9.jpeg"},
    {songName: "Without Me", filePath: "songs/10.mp3", coverPath: "cover10.jpeg"},
];

// update song list
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByTagName("span")[0].innerText = songs[i].songName;
});

// reset all small play buttons
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((el) => {
        el.classList.remove('fa-circle-pause');
        el.classList.add('fa-circle-play');
    });
};

// master play/pause button
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

// update progress bar
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

// seek audio
myProgressBar.addEventListener('input', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

// play song from list
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    const clickedIndex = parseInt(e.target.id);

    // If the same song is clicked
    if (songIndex === clickedIndex && !audioElement.paused) {
      audioElement.pause();                          // pause
      e.target.classList.remove('fa-circle-pause');
      e.target.classList.add('fa-circle-play');
      return;
    }

    // Otherwise: play the selected song
    makeAllPlays();
    songIndex = clickedIndex;
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
  });
});


// next button
document.querySelector('.fa-forward-step').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});

// previous button
document.querySelector('.fa-backward-step').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 9;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`; // ✅ fixed path
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});
