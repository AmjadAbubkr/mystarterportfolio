let list = document.getElementById("burger-icon");

list.onclick = function () {
  document.getElementById("menu").style.display = "-webkit-inline-box";
};

let close = document.getElementById("close");
close.onclick = function () {
  document.getElementById("menu").style.display = "none";
};

let body = document.querySelector("body");

// let btn = document.createElement("button");
// let btnc = document.createTextNode("Up");
let icon = document.createElement("i");
body.appendChild(icon);
icon.className = "fa-solid fa-arrow-up";
// btn.appendChild(icon);
// btn.appendChild(btnc)

window.onscroll = function () {
  if (window.scrollY >= 250) {
    icon.style.cssText =
      "border: none; font-weight: bold; color: #262a2e; border-radius: 5px; position: fixed; bottom: 20px; right: 20px; background-color: #57a0fa; padding: 13px;";
  } else {
    icon.style.cssText = "display: none";
  }
};

icon.onclick = function () {
  window.scrollTo({
    top: 0,
    let: 0,
    behavior: "smooth",
  });
};
