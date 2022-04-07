(function () {
  var sound = SoundCache.getSound("C:\\Users\\kjh95\\OneDrive\\바탕 화면\\VircadiaExhibition\\mp3\\음성파일.mp3");
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