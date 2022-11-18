///////// looding/////
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}


///////////buttons change games//////


document.getElementById("clear").style.visibility = "hidden";


const targetDiv = document.getElementById("tab1");
const btn = document.getElementById("toggle");


btn.onclick = function () {

    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";

    } else {
        targetDiv.style.display = "block";
        targetDiv2.style.display = "none";
        targetDiv3.style.display = "none";
        targetDiv4.style.display = "none";

    }
};


const targetDiv2 = document.getElementById("tab2");
const btn2 = document.getElementById("toggle2");

btn2.onclick = function () {

    if (targetDiv2.style.display !== "none") {
        document.getElementById("clear").style.visibility = "visible";
        targetDiv2.style.display = "none";
    } else {

        targetDiv2.style.display = "block";
        targetDiv.style.display = "none";
        targetDiv3.style.display = "none";
        targetDiv4.style.display = "none";
    }
};


const targetDiv3 = document.getElementById("tab3");
const btn3 = document.getElementById("toggle3");

btn3.onclick = function () {
    document.getElementById("clear").style.visibility = "visible";
    if (targetDiv3.style.display !== "none") {
        targetDiv3.style.display = "none";
    } else {
        targetDiv3.style.display = "block";
        targetDiv.style.display = "none";
        targetDiv2.style.display = "none";
        targetDiv4.style.display = "none";
    }
};


const targetDiv4 = document.getElementById("tab4");
const btn4 = document.getElementById("toggle4");

btn4.onclick = function () {
    document.getElementById("clear").style.visibility = "visible";
    if (targetDiv4.style.display !== "none") {
        targetDiv4.style.display = "none";
    } else {
        targetDiv4.style.display = "block";
        targetDiv.style.display = "none";
        targetDiv2.style.display = "none";
        targetDiv3.style.display = "none";
    }
};


/////////// hamburguer Menu//////

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));
