// for the pop sounds
document.addEventListener("DOMContentLoaded",() => {
  let bubbleWrap = document.getElementById("bw"),
    popSound = new Howl({
      src: [
        //sound
      ],
      autoplay: false,
      loop: false,
      volume: 1.0
    });
  bubbleWrap.addEventListener("change",() => {
    popSound.play();
  });
});
