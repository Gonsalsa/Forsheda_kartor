

const mapImage = document.getElementById("mapImage");
const caption = document.getElementById("caption");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

function setActive(activeBtn) {
  [btn1, btn2].forEach(b => b.classList.remove("active"));
  activeBtn.classList.add("active");
}

btn1.addEventListener("click", () => {
  mapImage.src = "images/karta_omrade_1.png";
  mapImage.alt = "Karta över område 1";
  caption.textContent = "Område 1";
  setActive(btn1);
});

btn2.addEventListener("click", () => {
  mapImage.src = "images/karta_omrade_2.png";
  mapImage.alt = "Karta över område 2";
  caption.textContent = "Område 2";
  setActive(btn2);
});
