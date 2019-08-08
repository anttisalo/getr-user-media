var video = document.querySelector("#videoContainer");
var button = document.querySelector("#startStop");

function videoInit(e) {
  if (video.srcObject) {
    stopVideo();
    button.innerHTML = 'START';
  } else {
    startVideo();
    button.innerHTML = 'STOP';
  }
}

function startVideo(e) {
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function (stream) {
        video.srcObject = stream;
      })
      .catch(function (err0r) {
        console.log("Something went wrong!");
      });
  }
}

function stopVideo(e) {
  var stream = video.srcObject;
  var tracks = stream.getTracks();

  for (var i = 0; i < tracks.length; i++) {
    var track = tracks[i];
    track.stop();
  }

  video.srcObject = null;
}

startVideo();
