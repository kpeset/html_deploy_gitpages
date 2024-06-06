const numberOfGallery = 4;

// FUNCTION CREATION SLIDESHOW

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateGallery = (i) => {
  const main = document.querySelector(".gallery_img");

  const section = document.createElement("section");
  section.id = `gallery${i + 1}`;
  main.appendChild(section);
};

for (let i = 0; i < numberOfGallery; i++) {
  generateGallery(i);
}

// GENERATION IMAGES

for (let k = 0; k < numberOfGallery; k++) {
  for (let l = 0; l < numberOfGallery; l++) {
    const img = document.createElement("img");
    const randomNumber = getRandomNumber(40, 59);
    img.classList.add(`img${k + 1}`);
    img.src = `https://picsum.photos/id/${randomNumber}${l}/600/400`;
    document.getElementById(`gallery${k + 1}`).appendChild(img);
  }
}

// CREATION DES OBUTONS ET ADDEVENTLISTERNER
const createButtons = (gallery, index) => {
  let slideIndex = 1;

  const ctaNext = document.createElement("button");

  ctaNext.classList.add("next_cta");

  ctaNext.textContent = "Photo suivante";

  gallery.appendChild(ctaNext);

  const plusDivs = (n) => {
    showDivs((slideIndex += n));
  };

  const showDivs = (n) => {
    const imgs = gallery.getElementsByClassName(`img${index}`);
    if (n > imgs.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = imgs.length;
    }
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.display = "none";
    }
    imgs[slideIndex - 1].style.display = "block";
  };

  ctaNext.addEventListener("click", () => plusDivs(1));

  showDivs(slideIndex);
};

const galleries = [
  document.getElementById("gallery1"),
  document.getElementById("gallery2"),
  document.getElementById("gallery3"),
  document.getElementById("gallery4"),
];

galleries.forEach((gallery, index) => createButtons(gallery, index + 1));
