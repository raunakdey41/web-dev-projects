let currentState; //To access the current state of any attribute

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

// Toggling between visibility of the media control bar

let mediaControl = document.getElementById("visibility");

mediaControl.addEventListener("click", function(){

    currentState = mediaControl.getAttribute("src");

    if(currentState.includes("show-playbar"))
        mediaControl.setAttribute("src", "icons/hide-playbar.svg");
    else
        mediaControl.setAttribute("src", "icons/show-playbar.svg");
});