//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.btn');
    const stopButton = document.querySelector('.stop');
    const audioFolder = './sounds/';
  
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        const soundName = button.innerText;
        const audio = new Audio(audioFolder + soundName + '.mp3');
        audio.play();
      });
    });
  
    stopButton.addEventListener('click', function() {
      const audioElements = document.getElementsByTagName('audio');
      for (let i = 0; i < audioElements.length; i++) {
        audioElements[i].pause();
        audioElements[i].currentTime = 0;
      }
    });
  });
  