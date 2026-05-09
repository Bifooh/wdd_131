
let title = document.querySelector("h1");
console.log(title);

title.textContent = "DOM Manipulation";


const topics = document.querySelector("#topics");
topics.style.color = "purple";

const wraper = document.getElementById("content");
wraper.style.backgroundColor = "white";

let listItem = document.querySelector(".list");

let paragraph = document.querySelector("p");
paragraph.style.fontSize = "40px";
paragraph.style.color = "cian";

paragraph.classList.add("background");

const image = document.querySelector("img");
image.setAttribute("alt", "Lights");
image.setAttribute("src", "https://www.w3schools.com/w3images/lights.jpg");


const dropdown = document.querySelector("#webdevlist");
const html = document.querySelector("#html");
const css = document.querySelector("#css");
const js = document.querySelector("#js");

dropdown.addEventListener('change', function() {
    html.style.backgroundColor = "white";
    css.style.backgroundColor = "white";
    js.style.backgroundColor = "white";
    let selectedOption = dropdown.value;
    document.getElementById(selectedOption).style.backgroundColor = "yellow";
});

listItem.addEventListener('click', function() {
    listItem.classList.toggle("highlight");
});