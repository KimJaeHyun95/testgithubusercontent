(function () {
  // console.log(2314235)
  var sound = SoundCache.getSound("http://192.168.0.102:3000/soundfile.mp3");
  var injectorOptions;
  var injector = null;
  var position;

  function playSound() {
    position = MyAvatar.position;
    injectorOptions = {
      position: position,
      volume: 0.5
    };

    injector = Audio.playSound(sound, injectorOptions);
  }



  function stopSound() {
    injector.stop()
  }


  this.clickDownOnEntity = function (entityID) {
    if (injector == null) {
      playSound();
    }
    if (!injector.isPlaying()) {
      console.log("start")
      playSound();
    }
    else {
      console.log("stop")
      stopSound();
    }
  };
});
