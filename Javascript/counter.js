const countdisplay = document.getElementById("count");
const increasebtn = document.getElementById("increase");
const decreasebtn = document.getElementById("decrease");
const resetbtn = document.getElementById("reset");

let count = 0;

function updatedisplay() {
  countdisplay.textContent = count;

  if (count > 0) {
    countdisplay.style.color = "green";
  } else if (count < 0) {
    countdisplay.style.color = "red";
  } else {
    countdisplay.style.color = "black";
  }
}

increasebtn.addEventListener("click", () => {
  count++;
  updatedisplay();
});

decreasebtn.addEventListener("click", () => {
  count--;
  updatedisplay();
});

resetbtn.addEventListener("click", () => {
  count = 0;
  updatedisplay();
});
