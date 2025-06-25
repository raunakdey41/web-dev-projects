let currentState; //To access the current state of any attribute

// Toggling between show and hide for the display bar

let displayBar = document.getElementById("display"); //The dash sign for showing/hiding the bar

let bar = document.getElementById("music-control");//The footer section

displayBar.addEventListener("click", function(){
    currentState = displayBar.getAttribute("title"); //Current condition of the display bar

    let playBarIcons = document.getElementsByClassName("playbar-icons");

    if (currentState.includes("Hide")) {
        bar.style.height = "4vh";
        displayBar.setAttribute("title", "Show Bar");
        for(let i = 0; i < playBarIcons.length; i++){
            playBarIcons[i].style.cssText = 
            `width: 0;
             height: 0; 
             display: none;`
        }
    }
    else{
        bar.style.height = "11vh";
        displayBar.setAttribute("title", "Hide Bar");
        for(let i = 0; i < playBarIcons.length; i++){
            playBarIcons[i].style.cssText = 
            `width: 2.5em;
             height: 2.5em;`
        }
    }
});


// Toggling between play and pause for songs

let playPause = document.getElementById("play");

playPause.addEventListener("click", function(){
    currentState = playPause.getAttribute("src");
    if(currentState.includes("icons/play.svg"))
        playPause.setAttribute("src", "icons/pause.svg");
    else
        playPause.setAttribute("src", "icons/play.svg");
    currentState = "";
});

// Playing on the songs

let songNames = document.querySelectorAll(".song-tiles");
console.log(songNames);

let songContainer = document.querySelectorAll(".song-container");

