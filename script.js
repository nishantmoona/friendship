// ================================
// Friendship Day Website Script
// ================================

// Main elements
const startScreen = document.getElementById("startScreen");
const siteContent = document.getElementById("siteContent");
const startBtn = document.getElementById("startBtn");
const musicBtn = document.getElementById("musicBtn");
const confettiBtn = document.getElementById("confettiBtn");
const backTopBtn = document.getElementById("backTopBtn");

const bgMusic = document.getElementById("bgMusic");

const carouselImage = document.getElementById("carouselImage");
const carouselTitle = document.getElementById("carouselTitle");
const carouselText = document.getElementById("carouselText");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

const gallery = document.getElementById("gallery");
const galleryTabs = document.querySelectorAll(".gallery-tab");
const gallerySubtitle = document.getElementById("gallerySubtitle");

let isMusicPlaying = false;
let currentMemory = 0;
let carouselTimer = null;


// ================================
// 1. Photo Data
// ================================

// Change these numbers according to your actual uploaded photos.
// Example: if you uploaded school1.jpg to school15.jpg, use 15.
const SCHOOL_PHOTO_COUNT = 27;
const OLD_PHOTO_COUNT = 18;

const schoolCaptions = [
  "Holi Evening: 2010",
  "Scooty Gang: 2010",
  "Boond Chaos: 2008",
  "Golden Memories",
  "Summer Break",
  "Benchmates",
  "Innocent Days",
  "School Smiles",
  "Timeless Bond",
  "Childhood Friends: 2012",
  "Madness Faluda: 2009",
  "Best Days",
  "Func City Vibes",
  "Forever Batchmates",
  "Little Legends",
  "Old Stories",
  "Laughing Together",
  "Carefree Days",
  "Friendship Started",
  "Classroom Crew",
  "Sweet Memories",
  "Unfiltered Us",
  "First Day, First Show: 2011",
  "Same Energy",
  "Old Gold: 2013",
  "Precious Times: 2014",
  "Nepal Trip: 2014"
];

const oldCaptions = [
  "Reunion Vibes: Kodaikanal 2017",
  "Still Together",
  "Old Souls",
  "Forever Us",
  "Same Madness: Ooty 2018",
  "Life Happened",
  "Bond Stayed",
  "Growing Together",
  "Memory Lane",
  "Years Later",
  "Unchanged Bond",
  "Real Friends",
  "Timeless Connection",
  "Old Is Gold: Wayanad 2016",
  "Friends Forever",
  "Beautiful Chaos",
  "Together Again",
  "Twenty Years"
];

const allPhotos = [...schoolPhotos, ...oldPhotos];


// ================================
// 2. Carousel Memories
// ================================

const memories = [
  {
    image: "images/school/school1.jpg",
    title: "Where It All Began",
    text: "The first chapters of friendship were written in school corridors, classrooms, lunch breaks, and endless little jokes."
  },
  {
    image: "images/school/school3.jpg",
    title: "School Days, Golden Days",
    text: "Some memories never fade because they belong to the most innocent and unforgettable phase of life."
  },
  {
    image: "images/school/school17.jpg",
    title: "The Laughs We Still Remember",
    text: "Those random laughs, silly moments, and school-time stories still feel special even after so many years."
  },
  {
    image: "images/school/school24.jpg",
    title: "Old Faces, Timeless Bond",
    text: "These pictures hold the warmth of childhood friendships — simple, pure, and impossible to replace."
  },
  {
    image: "images/old/Old1.jpg",
    title: "Growing Up Together",
    text: "From school uniforms to real-life journeys, the friendship kept growing through every phase of life."
  },
  {
    image: "images/old/Old2.jpg",
    title: "Reunion That Feels Like Yesterday",
    text: "No matter how much time passes, meeting old friends brings back the same comfort, laughter, and connection."
  },
  {
    image: "images/old/Old3.jpg",
    title: "Different Paths, Same Bond",
    text: "Life took everyone in different directions, but the friendship stayed close to the heart."
  },
  {
    image: "images/old/Old13.jpg",
    title: "Memories Beyond Time",
    text: "Twenty years of friendship is not just about time — it is about trust, stories, support, and countless shared moments."
  },
  {
    image: "images/old/Old15.jpg",
    title: "Friends for Life",
    text: "Some bonds are not measured by daily conversations, but by the feeling that nothing has changed when you meet again."
  }
];


// ================================
// 3. Opening Screen
// ================================

if (startBtn && startScreen && siteContent) {
  startBtn.addEventListener("click", () => {
    startScreen.classList.add("hide");
    siteContent.classList.add("show");

    document.body.classList.remove("no-scroll");

    playMusic();
    launchConfetti();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


// ================================
// 4. Music Button
// ================================

function playMusic() {
  if (!bgMusic || !musicBtn) return;

  bgMusic.volume = 0.45;

  bgMusic.play()
    .then(() => {
      isMusicPlaying = true;
      musicBtn.textContent = "Pause Music";
    })
    .catch(() => {
      isMusicPlaying = false;
      musicBtn.textContent = "Play Music";
      console.log("Music will play only after user interaction.");
    });
}

function pauseMusic() {
  if (!bgMusic || !musicBtn) return;

  bgMusic.pause();
  isMusicPlaying = false;
  musicBtn.textContent = "Play Music";
}

if (musicBtn) {
  musicBtn.textContent = "Play Music";

  musicBtn.addEventListener("click", () => {
    if (isMusicPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  });
}


// ================================
// 5. Confetti Button
// ================================

if (confettiBtn) {
  confettiBtn.addEventListener("click", () => {
    launchConfetti();
  });
}


// ================================
// 6. Carousel
// ================================

function updateCarousel() {
  if (!carouselImage || !carouselTitle || !carouselText) return;

  const memory = memories[currentMemory];

  carouselImage.src = memory.image;
  carouselImage.alt = memory.title;
  carouselTitle.textContent = memory.title;
  carouselText.textContent = memory.text;
}

// If a carousel image is missing, move to the next one instead of showing broken image
if (carouselImage) {
  carouselImage.addEventListener("error", () => {
    currentMemory = (currentMemory + 1) % memories.length;
    updateCarousel();
  });
}

function showNextMemory() {
  currentMemory = (currentMemory + 1) % memories.length;
  updateCarousel();
}

function showPreviousMemory() {
  currentMemory = (currentMemory - 1 + memories.length) % memories.length;
  updateCarousel();
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    showNextMemory();
    resetCarouselTimer();
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    showPreviousMemory();
    resetCarouselTimer();
  });
}

function startCarouselTimer() {
  carouselTimer = setInterval(() => {
    showNextMemory();
  }, 4500);
}

function resetCarouselTimer() {
  clearInterval(carouselTimer);
  startCarouselTimer();
}

updateCarousel();
startCarouselTimer();


// ================================
// 7. Gallery Render
// ================================

function renderGallery(category = "all") {
  if (!gallery) return;

  gallery.innerHTML = "";

  const filteredPhotos = category === "all"
    ? allPhotos
    : allPhotos.filter(photo => photo.category === category);

  filteredPhotos.forEach((photo) => {
    const photoCard = document.createElement("div");
    photoCard.className = "photo-card";

    const image = document.createElement("img");
    image.src = photo.src;
    image.alt = photo.caption;
    image.loading = "lazy";

    const caption = document.createElement("p");
    caption.textContent = photo.caption;

    image.addEventListener("click", () => {
      openLightbox(photo.src, photo.caption);
    });

    // If an image file does not exist, remove that card cleanly
    image.addEventListener("error", () => {
      photoCard.remove();
    });

    photoCard.appendChild(image);
    photoCard.appendChild(caption);
    gallery.appendChild(photoCard);
  });

  updateGallerySubtitle(category, filteredPhotos.length);
}

function updateGallerySubtitle(category, count) {
  if (!gallerySubtitle) return;

  if (category === "school") {
    gallerySubtitle.textContent = `Very old memories from school days`;
  } else if (category === "old") {
    gallerySubtitle.textContent = `Old pictures from the journey after school`;
  } else {
    gallerySubtitle.textContent = `Showing all friendship memories`;
  }
}

galleryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    galleryTabs.forEach(item => item.classList.remove("active"));
    tab.classList.add("active");

    const category = tab.getAttribute("data-category");
    renderGallery(category);
  });
});

renderGallery("all");


// ================================
// 8. Lightbox
// ================================

function openLightbox(imageSrc, imageAlt) {
  if (!lightbox || !lightboxImage) return;

  lightboxImage.src = imageSrc;
  lightboxImage.alt = imageAlt || "Selected friendship memory";
  lightbox.classList.add("show");
  document.body.classList.add("no-scroll");
}

function closeLightboxPopup() {
  if (!lightbox || !lightboxImage) return;

  lightbox.classList.remove("show");
  lightboxImage.src = "";
  document.body.classList.remove("no-scroll");
}

if (closeLightbox) {
  closeLightbox.addEventListener("click", closeLightboxPopup);
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightboxPopup();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightboxPopup();
  }
});


// ================================
// 9. Back to Top
// ================================

if (backTopBtn) {
  backTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


// ================================
// 10. Confetti Animation
// ================================

function launchConfetti() {
  const canvas = document.getElementById("confettiCanvas");

  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const colors = ["#f67280", "#f8b195", "#355c7d", "#f6c85f", "#ffffff"];

  for (let i = 0; i < 160; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 4 + 2,
      angle: Math.random() * 360,
      rotation: Math.random() * 8 - 4
    });
  }

  let frame = 0;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach((piece) => {
      ctx.save();
      ctx.translate(piece.x, piece.y);
      ctx.rotate((piece.angle * Math.PI) / 180);
      ctx.fillStyle = piece.color;
      ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);
      ctx.restore();

      piece.y += piece.speed;
      piece.x += Math.sin(piece.y / 35);
      piece.angle += piece.rotation;
    });

    frame++;

    if (frame < 190) {
      requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  draw();
}

window.addEventListener("resize", () => {
  const canvas = document.getElementById("confettiCanvas");

  if (!canvas) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
