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

const allPhotos = [
  // Very old school-time pictures
  { src: "images/school/school1.jpg", category: "school", caption: "School memory 1" },
  { src: "images/school/school2.jpg", category: "school", caption: "School memory 2" },
  { src: "images/school/school3.jpg", category: "school", caption: "School memory 3" },
  { src: "images/school/school4.jpg", category: "school", caption: "School memory 4" },
  { src: "images/school/school5.jpg", category: "school", caption: "School memory 5" },
  { src: "images/school/school6.jpg", category: "school", caption: "School memory 6" },
  { src: "images/school/school7.jpg", category: "school", caption: "School memory 7" },
  { src: "images/school/school8.jpg", category: "school", caption: "School memory 8" },
  { src: "images/school/school9.jpg", category: "school", caption: "School memory 9" },
  { src: "images/school/school10.jpg", category: "school", caption: "School memory 10" },
  { src: "images/school/school11.jpg", category: "school", caption: "School memory 11" },
  { src: "images/school/school12.jpg", category: "school", caption: "School memory 12" },
  { src: "images/school/school13.jpg", category: "school", caption: "School memory 13" },
  { src: "images/school/school14.jpg", category: "school", caption: "School memory 14" },
  { src: "images/school/school15.jpg", category: "school", caption: "School memory 15" },
  { src: "images/school/school16.jpg", category: "school", caption: "School memory 16" },
  { src: "images/school/school17.jpg", category: "school", caption: "School memory 17" },
  { src: "images/school/school18.jpg", category: "school", caption: "School memory 18" },
  { src: "images/school/school19.jpg", category: "school", caption: "School memory 19" },
  { src: "images/school/school20.jpg", category: "school", caption: "School memory 20" },
  { src: "images/school/school21.jpg", category: "school", caption: "School memory 21" },
  { src: "images/school/school22.jpg", category: "school", caption: "School memory 22" },
  { src: "images/school/school23.jpg", category: "school", caption: "School memory 23" },
  { src: "images/school/school24.jpg", category: "school", caption: "School memory 24" },
  { src: "images/school/school25.jpg", category: "school", caption: "School memory 25" },
  { src: "images/school/school26.jpg", category: "school", caption: "School memory 26" },
  { src: "images/school/school27.jpg", category: "school", caption: "School memory 27" },
  

  // Old pictures after school
  { src: "images/old/old1.jpg", category: "old", caption: "Old friendship memory 1" },
  { src: "images/old/old2.jpg", category: "old", caption: "Old friendship memory 2" },
  { src: "images/old/old3.jpg", category: "old", caption: "Old friendship memory 3" },
  { src: "images/old/old4.jpg", category: "old", caption: "Old friendship memory 4" },
  { src: "images/old/old5.jpg", category: "old", caption: "Old friendship memory 5" },
  { src: "images/old/old6.jpg", category: "old", caption: "Old friendship memory 6" },
  { src: "images/old/old7.jpg", category: "old", caption: "Old friendship memory 7" },
  { src: "images/old/old8.jpg", category: "old", caption: "Old friendship memory 8" },
  { src: "images/old/old9.jpg", category: "old", caption: "Old friendship memory 9" },
  { src: "images/old/old10.jpg", category: "old", caption: "Old friendship memory 10" },
  { src: "images/old/old11.jpg", category: "old", caption: "Old friendship memory 11" },
  { src: "images/old/old12.jpg", category: "old", caption: "Old friendship memory 12" },
  { src: "images/old/old13.jpg", category: "old", caption: "Old friendship memory 13" },
  { src: "images/old/old14.jpg", category: "old", caption: "Old friendship memory 14" },
  { src: "images/old/old15.jpg", category: "old", caption: "Old friendship memory 15" },
  { src: "images/old/old16.jpg", category: "old", caption: "Old friendship memory 16" },
  { src: "images/old/old17.jpg", category: "old", caption: "Old friendship memory 17" },
  { src: "images/old/old18.jpg", category: "old", caption: "Old friendship memory 18" }
];

function renderGallery(category = "all") {
  if (!gallery) return;

  gallery.innerHTML = "";

  const filteredPhotos = category === "all"
    ? allPhotos
    : allPhotos.filter(photo => photo.category === category);

  filteredPhotos.forEach(photo => {
    const photoCard = document.createElement("div");
    photoCard.className = "photo-card";

    photoCard.innerHTML = `
      <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
      <p>${photo.caption}</p>
    `;

    const image = photoCard.querySelector("img");

    image.addEventListener("click", () => {
      lightboxImage.src = photo.src;
      lightbox.classList.add("show");
    });

    gallery.appendChild(photoCard);
  });

  if (gallerySubtitle) {
    if (category === "school") {
      gallerySubtitle.textContent = "Very old memories from school days";
    } else if (category === "old") {
      gallerySubtitle.textContent = "Old pictures from the journey after school";
    } else {
      gallerySubtitle.textContent = "Showing all friendship memories";
    }
  }
}

galleryTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    galleryTabs.forEach(item => item.classList.remove("active"));
    tab.classList.add("active");

    const category = tab.getAttribute("data-category");
    renderGallery(category);
  });
});

renderGallery("all");

const memories = [
  {
    image: "images/friend1.jpg",
    title: "The beginning",
    text: "The days when friendship was built on lunch boxes, jokes, and school benches."
  },
  {
    image: "images/friend2.jpg",
    title: "Old laughs",
    text: "Some laughs never become old. They only become more precious with time."
  },
  {
    image: "images/friend3.jpg",
    title: "School memories",
    text: "The place where the bond began and the memories became permanent."
  },
  {
    image: "images/friend4.jpg",
    title: "Growing up together",
    text: "From school uniforms to real life, the journey stayed meaningful."
  },
  {
    image: "images/friend5.jpg",
    title: "Reunion moments",
    text: "No matter how much time passes, meeting again feels like yesterday."
  },
  {
    image: "images/friend6.jpg",
    title: "Friends forever",
    text: "Twenty years later, the bond still carries the warmth of school days."
  }
];

let currentMemory = 0;
let isMusicPlaying = false;

startBtn.addEventListener("click", () => {
  startScreen.classList.add("hide");
  siteContent.classList.add("show");

  playMusic();
  launchConfetti();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

function playMusic() {
  bgMusic.volume = 0.45;

  bgMusic.play()
    .then(() => {
      isMusicPlaying = true;
      musicBtn.textContent = "Pause Music";
    })
    .catch(() => {
      isMusicPlaying = false;
      musicBtn.textContent = "Play Music";
      console.log("Music will play after user interaction.");
    });
}

musicBtn.addEventListener("click", () => {
  if (isMusicPlaying) {
    bgMusic.pause();
    isMusicPlaying = false;
    musicBtn.textContent = "Play Music";
  } else {
    playMusic();
  }
});

confettiBtn.addEventListener("click", () => {
  launchConfetti();
});

function updateCarousel() {
  carouselImage.src = memories[currentMemory].image;
  carouselTitle.textContent = memories[currentMemory].title;
  carouselText.textContent = memories[currentMemory].text;
}

nextBtn.addEventListener("click", () => {
  currentMemory = (currentMemory + 1) % memories.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentMemory = (currentMemory - 1 + memories.length) % memories.length;
  updateCarousel();
});

setInterval(() => {
  currentMemory = (currentMemory + 1) % memories.length;
  updateCarousel();
}, 4500);

document.querySelectorAll(".photo-card img").forEach((image) => {
  image.addEventListener("click", () => {
    lightboxImage.src = image.src;
    lightbox.classList.add("show");
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.classList.remove("show");
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove("show");
  }
});

backTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

function launchConfetti() {
  const canvas = document.getElementById("confettiCanvas");
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
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
