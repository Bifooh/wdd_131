
let title = document.querySelector("h1");
console.log(title);

title.textContent = "DOM Manipulation";


const topics = document.querySelector("#topics");
topics.style.color = "purple";

const wraper = document.getElementById("content");
wraper.style.backgroundColor = "lightblue";

let listItem = document.querySelector(".list");

listItem.style.border = "3px solid black";

let paragraph = document.querySelector("p");
paragraph.style.fontSize = "40px";
paragraph.style.color = "cian";

paragraph.classList.add("background");

const image = document.querySelector("img");
image.setAttribute("alt", "Lights");
image.setAttribute("src", "https://www.w3schools.com/w3images/lights.jpg");
