console.log("JavaScript is working!");

const favoriteButton = document.querySelector("#favoriteButton");
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