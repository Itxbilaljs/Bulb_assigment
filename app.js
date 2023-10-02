const Bulb = document.getElementById("bulb");
Bulb.addEventListener("mouseover", function (e) {
  if (Bulb.src.includes("off")) {
    Bulb.src = "./img/bulb-on.png";
  } else {
    Bulb.src = "./img/bulb-off.png";
  }
});