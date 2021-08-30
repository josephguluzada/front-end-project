// DROPDOWN CONTAINER SLIDE

const dropdownContainer = document.querySelector(".dropdown-container");
const dropdownContainerSecond = document.querySelector(".dropdown-container-2");
const dropdownContent = document.querySelector(".dropdown-content");
const dropdownContentSecond = document.querySelector(".dropdown-content-2");
const dropdownArrow = document.querySelector(".dropdown-arrow");
const dropdownArrowSecond = document.querySelector(".dropdown-arrow-2");

dropdownContainer.addEventListener("click", function () {
    dropdownContent.classList.toggle("active");
    dropdownArrow.classList.toggle("active");
});

dropdownContainerSecond.addEventListener("click", function () {
    dropdownContentSecond.classList.toggle("active");
    dropdownArrowSecond.classList.toggle("active");
});
