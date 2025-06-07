document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("https://script.google.com/macros/s/AKfycbxHBm9jF9q-hTAxxtVquykBP1pf9XJcG_SNqoRsZSgXa3iNXoLNPmzXyYSS296ngZb5/exec");
  const data = await res.json();
  const img = document.getElementById("random-img");
  if (img && data.url) {
    img.src = data.url;
  }
});