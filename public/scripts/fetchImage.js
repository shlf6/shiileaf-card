document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("https://script.google.com/macros/s/AKfycbwacYIGoetJPZ9OD2U34d2ygiWKhmfOGC5w6ZDEu-bHWLabqrBvApm2lb_u_dmp1U_7/exec");
  const data = await res.json();
  document.getElementById("img-box").src = data.url;
});
