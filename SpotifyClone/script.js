// Private id
const id = "da69b01d";
const url = `https://api.jamendo.com/v3.0/tracks/?client_id=${id}&format=json&limit=42&search=chill`

let currentState; //To access the current state of any attribute
let displayBar = document.getElementById("display"); //The dash sign for showing/hiding the bar
let bar = document.getElementById("music-control");//The footer section
let playPause = document.getElementById("play"); // Play button on the media control bar
let songNames = document.querySelectorAll(".song-tiles");
console.log(songNames); // Store arrays of the song tiles
let songContainer = document.querySelectorAll(".song-container"); // Store the entire box of songs
let songImages = document.querySelectorAll(".song-tile-images"); // Store the images of the songs

// Fetch songs from Jamendo as soon as window loads
document.addEventListener("DOMContentLoaded", function(){
    fetchSongs();
})

// Toggling between play and pause for songs
playPause.addEventListener("click", function(){
    currentState = playPause.getAttribute("src");
    if(currentState.includes("icons/play.svg"))
        playPause.setAttribute("src", "icons/pause.svg");
    else
        playPause.setAttribute("src", "icons/play.svg");
    currentState = "";
});

// Toggling between show and hide for the display bar
displayBar.addEventListener("click", function(){
    currentState = displayBar.getAttribute("title"); //Current condition of the display bar

    let playBarIcons = document.getElementsByClassName("playbar-icons");

    if (currentState.includes("Hide")) {
        bar.style.height = "4vh";
        displayBar.setAttribute("title", "Show Bar");
        for(let i = 0; i < playBarIcons.length; i++){
            playBarIcons[i].style.cssText = 
            `
            width: 0;
            height: 0; 
            display: none;
            `
        }
        bar.style.transitionDuration = "500ms";
    }
    else{
        bar.style.height = "11vh";
        displayBar.setAttribute("title", "Hide Bar");
        for(let i = 0; i < playBarIcons.length; i++){
            playBarIcons[i].style.cssText = 
            `
            width: 2.5em;
            height: 2.5em;
            `
        }
        bar.style.transitionDuration = "500ms";
    }
});

// for(let obj in songImages){
//     console.log(songImages[obj]);
// }

// Fetch songs from jamendo
async function fetchSongs() {
    let songs = await fetch(url);
    songs = await songs.json();
    console.log(songs);
}