document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("https://script.google.com/macros/s/AKfycbyhbfZYUu0GtNLfAxAWpFMqFG7Umg1cDv7H4rFY7uC5-dHu79A_coYDEE0hHMZh74pB/exec");
  const data = await res.json();
  document.getElementById("img-box").src = data.url;
});
