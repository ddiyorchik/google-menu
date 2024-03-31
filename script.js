let menuBtn = document.getElementsByClassName("menu-button")[0];
let menu = document.getElementsByClassName("menu")[0];
let isVisible = false;

menuBtn.addEventListener("click", () => {
    if (isVisible) {
        menu.style.visibility = "hidden";
        isVisible = false;
    } else {
        menu.style.visibility = "visible";
        isVisible = true;
    }
});

let accauntBtn = document.getElementById("img-menu");
let accauntMenu = document.querySelector(".accaunt-menu");
let xButton = document.querySelector(".acaunt-menu-x");
let hisVisible = false;

accauntBtn.addEventListener("click", () => {
    if (!hisVisible) {
        accauntMenu.style.visibility = "visible";
        hisVisible = true;
    } else {
        accauntMenu.style.visibility = "hidden";
        hisVisible = false;
    }
});

xButton.addEventListener("click", () => {
    accauntMenu.style.visibility = "hidden";
    hisVisible = false;
});
