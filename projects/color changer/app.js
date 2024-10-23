let body = document.body;
let btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    color = btn.value;
    bgChange(color);
  });
});

function bgChange(color) {
  body.className = "";

  switch (color) {
    case "purple":
      body.classList.add("purple");
      break;
    case "teal":
      body.classList.add("teal");
      break;
    case "blue":
      body.classList.add("blue");
      break;
    case "pink":
      body.classList.add("pink");
      break;
    case "yellow":
      body.classList.add("yellow");
      break;
    case "green":
      body.classList.add("green");
      break;

    default:
      break;
  }
}
