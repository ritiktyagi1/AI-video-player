const video = document.getElementById('video')
var localstream;
Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('/models')
]).then(startVideo)

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  )
//localstream=video.srcObject;
}
//localstream=video.srcObject;

video.addEventListener('play', () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  document.body.append(canvas)
  const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize)
  setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
    //console.log(detections);
    if(detections.length==0)
    {console.log("not detected");
      vid.pause();}
    else
    {console.log("detected");
    vid.play();}
    //const resizedDetections = faceapi.resizeResults(detections, displaySize)
    //canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    //faceapi.draw.drawDetections(canvas, resizedDetections)
    // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    // faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
  }, 100)
})

var vid = document.getElementById("myVideo"); 
  
  function playVid() { 
    vid.play();
    startVideo();
  } 
  
  function pauseVid() { 
    vid.pause();
    
    const stream = video.srcObject;
  const tracks = stream.getTracks();

  tracks.forEach(function(track) {
    track.stop();
  });

  video.srcObject = null;
  
  } 


  
    // const video = document.querySelector('#basic video');
    // const audio = document.querySelector('#basic audio');
    
    // const captureVideoButton = document.querySelector('#basic .capture-button');
    // const stopVideoButton = document.querySelector('#basic #stop-button');
    
    // //Capture Video
    // captureVideoButton.onclick = function() {
    //    navigator.mediaDevices.getUserMedia({
    //     audio: true,
    //     video: true
    //   })
    //   .then(stream => {
    //     window.localStream = stream;
    //     video.srcObject = stream;
    //     audio.srcObject = stream;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // };
    
    

  
  