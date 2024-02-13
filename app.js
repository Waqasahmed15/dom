var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");
var flag = 0;
btn.addEventListener("click", function () {
  if (flag == 0) {
    bulb.style.background = "yellow";
    btn.innerHTML = "OFF";
    flag = 1;
  } else {
    bulb.style.background = "transparent";
    btn.innerHTML = "ON";
    flag = 0;
  }
});
