document.getElementById("year").textContent = new Date().getFullYear();
document.querySelectorAll(".work-gallery").forEach((gallery) => {
  const images = gallery.querySelectorAll("img");

  if (images.length <= 1) return;

  let current = 0;
  images[0].classList.add("is-active");

  setInterval(() => {
    images[current].classList.remove("is-active");
    current = (current + 1) % images.length;
    images[current].classList.add("is-active");
  }, 3000);
});
