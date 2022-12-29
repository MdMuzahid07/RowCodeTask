let camera = document.getElementById("camera");



// load webcam


Webcam.set({
    height: 200,
    width: "100%",
    image_format: "jpeg",
    jpeg_quality: 90
})

Webcam.attach("camera");