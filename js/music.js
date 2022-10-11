var musicbox_shouldPlay = false;
var musicbox_audioLoaded = false;
var audioElement = new Audio('media/X279_Fleur_Bossa_Nova_Arrangement_2_061022.mp3');
audioElement.muted = true;
audioElement.addEventListener('canplaythrough', function() {
  musicbox_audioLoaded = true;
  audioElement.loop = true;
  audioElement.volume = slider.value/100;
})
var volumeCont = document.getElementById("volume-container");
var volumeIcon = document.getElementById("volume-icon");
volumeIcon.addEventListener("click", function(e) {
    if (audioElement.muted) {
        mute(false);
    } else {
        mute(true);
    }
});
var isPlaying = false;
function mute(isMuted){
    if (isMuted){
        volumeCont.classList.add("muted");
    } else {
        volumeCont.classList.remove("muted");
        if (!isPlaying) {
            audioElement.play();
        }
    }
    slider.disabled = isMuted;
    audioElement.muted = isMuted;
}

var slider = document.getElementById("music-volume");
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function(e) {
    audioElement.volume = Math.min(1,this.value/100);
}