// Read album ID from URL
const params = new URLSearchParams(window.location.search);
const albumID = Number(params.get("album"));

// Titles for each album
const albumTitles = {
  1: "💗 Album 1: Love Moments",
  2: "🌙 Album 2: Moonlight Romance",
  3: "🌹 Album 3: Red Rose Nights",
  4: "✨ Album 4: Magical Love",
  5: "🔥 Album 5: Deep Passion"
};

// Apply album name
const titleEl = document.getElementById("album-title");
if (titleEl) titleEl.textContent = albumTitles[albumID];

// Generate 10 images per album
const gallery = document.getElementById("gallery");
if (gallery) {
  for (let i = 1; i <= 10; i++) {
    const img = document.createElement("img");
    img.src = `https://picsum.photos/seed/${albumID}-${i}/900/700`;
    img.onclick = () => openLightbox(img.src);
    gallery.appendChild(img);
  }
}

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close-btn");

function openLightbox(src) {
  lightbox.style.display = "flex";
  lightboxImg.src = src;
}

closeBtn.onclick = () => (lightbox.style.display = "none");
lightbox.onclick = (e) => {
  if (e.target === lightbox) lightbox.style.display = "none";
};
