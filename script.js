let yesScale = 1;
let noScale = 1;
let noClickCount = 0;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const popup = document.getElementById("popup");
const backBtn = document.getElementById("backBtn");

// YES button opens main popup
yesBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

// Back button closes main popup
backBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// NO button logic (shrinks on each click)
noBtn.addEventListener("click", () => {
  yesScale += 0.25;
  noScale -= 0.2;
  yesBtn.style.transform = `scale(${yesScale})`;

  if (noScale > 0) {
    noBtn.style.transform = `scale(${noScale})`;
  } else {
    noBtn.style.opacity = "0";
    noBtn.style.pointerEvents = "none";
  }
});
