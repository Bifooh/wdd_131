let health = 100;
const healthText = document.querySelector("#health");

const hitButton = document.querySelector("#hitbtn");
const healButton = document.querySelector("#healbtn");

hitButton.addEventListener("click", Hit);
healButton.addEventListener("click", Heal)

healthText.innerHTML = "Health: " + health + "/100";

// extra
const healthFill = document.querySelector("#healthfill");
const card = document.querySelector("#card");

function Hit() {
    health = Math.max(0, health - 10);
    updateHealth();

    // extra
    card.classList.add("shake");

    setTimeout(() => {
        card.classList.remove("shake");
    }, 250);
}

function Heal() {
    health = Math.min(100, health + 10);
    updateHealth();

    // extra
    card.classList.add("heal-glow");

    setTimeout(() => {
        card.classList.remove("heal-glow");
    }, 500);
}

function updateHealth() {
    healthText.innerHTML = "Health: " + health + "/100";
    healthFill.style.width = health + "%";
}