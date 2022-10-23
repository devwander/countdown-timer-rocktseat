document.body.style = "background-color: var(--white); transition: 0.5s;"

let theme = "light";

const body = document.body
const container = document.querySelector(".theme-container");
const themeIcon = document.querySelector(".theme-icon");

container.addEventListener("click", setTheme);

function setTheme() {
  switch (theme) {
    case "dark":
      setLight();
      theme = "light";
      break;
    case "light":
      setDark();
      theme = "dark";
      break;
  }
}

function setLight() {
  body.style.background = "white";
  body.style.transition = "0.5s"
  themeIcon.src = "./assets/moon.svg";
  container.style.background = "var(--sun-button)"
}

function setDark() {
  body.style.background = "var(--background-dark)";
  body.style.transition = "0.5s"
  themeIcon.src = "./assets/moon.svg";
  container.style.background = "var(--moon-button)"
}