const images = ["0.jpg", "1.jpg", "2.jpg"];

const bgImage = document.createElement("img");
document.body.appendChild(bgImage);

function getImage() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  bgImage.src = `img/${chosenImage}`;
}

getImage();
setInterval(getImage, 5000);
