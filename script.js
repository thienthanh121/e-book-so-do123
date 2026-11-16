const cover = document.getElementById("cover");

cover.addEventListener("click", (e) => {
  if (!cover.classList.contains("clicked")) {
    cover.classList.add("clicked");
  } else if (!e.target.closest(".start-box")) {
    window.location.href = "gioi-thieu.html";
  }
});
