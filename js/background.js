const images = ["0.jpg", "1.jpg", "2.jpg"];

//const bgImage = document.createElement("img");
//document.body.appendChild(bgImage);

function getImage() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  document.body.style.backgroundImage = `url(img/${chosenImage})`;
  //bgImage.src = `img/${chosenImage}`;
  //bgImage.classList.add("bgImage");
}

getImage();
setInterval(getImage, 5000);
