const form = document.querySelector("#ticket-form");
const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const emailInput = document.querySelector("#email");
const dateInput = document.querySelector("#event-date");
const codeField = document.querySelector("#code-field");
const codeLabel = document.querySelector("#code-label");
const codeInput = document.querySelector("#code-input");
const typeInput = document.querySelector("#ticket-type");
const output = document.querySelector("#ticket-output");
const formErrors = document.querySelector("#form-errors");

typeInput.addEventListener("change", function () {
    if (typeInput.value !== "") {
        codeField.classList.remove("hidden");

        if (typeInput.value === "guest") {
            codeLabel.textContent = "Access Code";
        }
        else if (typeInput.value === "student") {
            codeLabel.textContent = "Student I#";
        }
    } 
    else {
        codeField.classList.add("hidden");
        codeInput.value = "";
    }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const date = dateInput.value;
    const type = typeInput.value;
    const code = codeInput.value.trim();

    const errors = [];

    if (firstName === "") {
        errors.push("First name is required.");
    }

    if (lastName === "") {
        errors.push("Last name is required.");
    }

    if (email === "") {
        errors.push("Email is required.");
    }

    if (type === "") {
        errors.push("Please choose student or guest.");
    }

    if (date === "") {
        errors.push("Event date is required.");
    }
    else {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const selectedDate = new Date(date);
        selectedDate.setHours(0, 0, 0, 0);

        if (selectedDate <= today) {
            errors.push("Event date must be later than today.");
        }
    }

    if (type === "student") {
        if (!/^\d{9}$/.test(code)) {
            errors.push("Student I# must be 9 digits.");
        }
    }

    if (type === "guest") {
        if (code.toUpperCase() !== "EVENT131") {
            errors.push("Access code must be EVENT131.");
        }
    }

    formErrors.innerHTML = "";

    if (errors.length > 0) {
        output.classList.add("hidden");

        errors.forEach(function (error) {
            const p = document.createElement("p");
            p.textContent = error;
            formErrors.appendChild(p);
        });
    }
    else {
        document.querySelector("#ticket-name").textContent = "Name: " + firstName + " " + lastName;
        document.querySelector("#ticket-type-output").textContent = "Type: " + type;
        document.querySelector("#ticket-date").textContent = "Date: " + date;

        output.classList.remove("hidden");
    }
});