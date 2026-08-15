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
