// Hide loading screen when page is fully loaded
window.addEventListener("load", function () {
  setTimeout(function () {});
  // document.getElementById("loading-screen").style.display = "none";
});

// * Auto-update copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// * Project modals
// Modal variables
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// Set initial state with GSAP
gsap.set(".modal", { scale: 0.8, opacity: 0, visibility: "hidden" });
gsap.set(overlay, { opacity: 0, visibility: "hidden" });

// Open modal function
const openModal = function () {
  const modalId = this.getAttribute("data-modal");
  const modal = document.getElementById(modalId);
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  gsap.to(modal, {
    duration: 0.5,
    scale: 1,
    opacity: 1,
    visibility: "visible",
    ease: "power2.out",
  });
  gsap.to(overlay, {
    duration: 0.5,
    opacity: 1,
    visibility: "visible",
    ease: "power2.out",
  });
};

// Close modal function
const closeModal = function () {
  const modal = document.querySelector(".modal:not(.hidden)");
  gsap.to(modal, {
    duration: 0.3,
    scale: 0.8,
    opacity: 0,
    visibility: "hidden",
    ease: "power2.in",
    onComplete: () => {
      modal.classList.add("hidden");
    },
  });
  gsap.to(overlay, {
    duration: 0.3,
    opacity: 0,
    visibility: "hidden",
    ease: "power2.in",
    onComplete: () => {
      overlay.classList.add("hidden");
    },
  });
};

// Applying modal functions to elements
btnsOpenModal.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

btnCloseModal.forEach((btn) => {
  btn.addEventListener("click", closeModal);
});
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && document.querySelector(".modal:not(.hidden)")) {
    closeModal();
  }
});

// // Carousel scrolling
// el.scrollIntoView({
//   behaviour: "smooth",
//   inline: "start",
// });

// * ANIME.JS

// Typing animation

// Function to run the animation
function animateLetters() {
  var textWrapper = document.querySelector(".letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime.timeline({ loop: false }).add({
    targets: ".letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 150,
    delay: (el, i) => 50 * (i + 1),
  });
}

// Intersection Observer callback
function onIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateLetters();
      observer.unobserve(entry.target); // Stop observing after animation is triggered
    }
  });
}

// Set up Intersection Observer
document.addEventListener("DOMContentLoaded", function () {
  var observer = new IntersectionObserver(onIntersection, { threshold: 0.1 });
  var target = document.querySelector(".letters");
  observer.observe(target);
});

// * GSAP

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Hero section animations
window.onload = function () {
  const timeline = gsap.from(".hero-content", {
    duration: 2,
    opacity: 0,
    ease: "power3.inOut",
  });
};

const timelineCommit = gsap.timeline({
  defaults: { duration: 1, scale: 1.3, opacity: 0, ease: "power4.inOut" },
  scrollTrigger: {
    trigger: ".commitments-grid",
    start: "top 80%",
  },
});

timelineCommit
  .from(".commit-1", { rotation: 360 })
  .from(".commit-2", { rotation: 360 })
  .from(".commit-3", { rotation: 360, stagger: 0.4 });

// Function to apply animation to a selector
function animateText(selector) {
  // Animate to full opacity
  gsap.to(selector, {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: selector,
      start: "top 50%",
    },
  });
}

// Apply animation to all elements with the class 'animate-slide-up'
document.addEventListener("DOMContentLoaded", function () {
  var textContainers = document.querySelectorAll(".animate-slide-up");
  textContainers.forEach(function (container) {
    animateText(container);
  });
});

// * LOTTIE ANIMATIONS

// Function to load and play the Lottie animation
function loadLottieAnimation(containerId, animationPath) {
  lottie.loadAnimation({
    container: document.getElementById(containerId),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: animationPath,
  });
}

// Load multiple Lottie animations
loadLottieAnimation(
  "lottie-custom-code",
  "./images/lotties/custom-code-lottie.json"
);
loadLottieAnimation("lottie-cms", "./images/lotties/cms-lottie.json");
loadLottieAnimation(
  "lottie-maintenance",
  "./images/lotties/maintenance-lottie.json"
);
loadLottieAnimation("lottie-contact", "./images/lotties/contact-lottie.json");
