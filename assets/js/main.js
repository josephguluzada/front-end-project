// DROPDOWN CONTAINER SLIDE

const dropdownContainer = document.querySelectorAll(".dropdown-container");
const dropdownArrow = document.querySelector(".dropdown-arrow");

dropdownContainer.forEach(dropDown => {
    dropDown.addEventListener("click", function () {
        dropDown.nextElementSibling.classList.toggle("active");
        dropDown.firstElementChild.classList.toggle("active");
    })
})