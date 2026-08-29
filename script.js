console.log("JavaScript is working!");

const favoriteButton = document.querySelector("#favoritebutton");
const favoriteList = document.querySelector(".favorite-list");

console.log(favoriteButton);
console.log(favoriteList);

favoriteButton.addEventListener("click", function () {
    if (favoriteList.style.display === "none") {
        favoriteList.style.display = "block";
    } else {
        favoriteList.style.display = "none";
    }
});

const contactForm = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const formError = document.querySelector("#formError");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (nameInput.value.trim() === "") {
        formError.textContent = "Please enter your name.";
        nameInput.focus();
        return;
    }

    if (emailInput.value.trim() === "") {
        formError.textContent = "Please enter your email.";
        emailInput.focus();
        return;

    }
    formError.textContent = "Thank you! Your message was submitted.";
});

nameInput.addEventListener("input", function () {
    if (nameInput.value.trim() !== "") {
        formError.textContent = "";
    }
});

emailInput.addEventListener("input", function () {
    if (emailInput.value.trim() !== "") {
        formError.textContent = "";
    }
});