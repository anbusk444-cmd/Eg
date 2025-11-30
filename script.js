const gallery = document.getElementById("gallery");

let IMAGES = Array.from({ length: 50 }, (_, i) => ({
  title: "Romantic Moment " + (i + 1),
  seed: "romantic" + (i + 1),
  src: `https://picsum.photos/seed/romantic${i + 1}/800/600`
}));

// Render gallery
IMAGES.forEach((img, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
      <img src="${img.src}" alt="${img.title}">
      <div class="caption">${img.title}</div>
  `;
  card.onclick = () => openLightbox(index);
  gallery.appendChild(card);
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close-btn");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

function openLightbox(i) {
  currentIndex = i;
  lightbox.style.display = "flex";
  lightboxImg.src = IMAGES[i].src;
}

closeBtn.onclick = () => (lightbox.style.display = "none");

prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + IMAGES.length) % IMAGES.length;
  lightboxImg.src = IMAGES[currentIndex].src;
};

nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % IMAGES.length;
  lightboxImg.src = IMAGES[currentIndex].src;
};

lightbox.onclick = (e) => {
  if (e.target === lightbox) lightbox.style.display = "none";
};
