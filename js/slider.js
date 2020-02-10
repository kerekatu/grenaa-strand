slider = {
  time: 3000,
  images: ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg"]
};

let i = 0;

function changeImg() {
  document.slider.src = slider.images[i];

  if (i < slider.images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout(changeImg, slider.time);
}

window.addEventListener("load", changeImg);
