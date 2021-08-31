// DROPDOWN CONTAINER SLIDE

const dropdownContainer = document.querySelectorAll(".dropdown-container");
const dropdownArrow = document.querySelector(".dropdown-arrow");

dropdownContainer.forEach(dropDown => {
    dropDown.addEventListener("click", function () {
        // dropDown.nextElementSibling.style.height = dropDown.nextElementSibling.scrollHeight + 'px'; // explore scroll height 
        dropDown.nextElementSibling.classList.toggle("active");
        dropDown.firstElementChild.classList.toggle("active");
    })
})


// Testimonials select JS

const testimonialPictures = Array.from(document.querySelectorAll('.testimonials-pictures li'));
const testimonialTexts = Array.from(document.querySelectorAll('.testimonials-text-sec .testimonials-text'));
const clearActives = () => {
    testimonialPictures.forEach(testimonialPicture => {
        testimonialPicture.classList.remove('active');
    });
    testimonialTexts.forEach(testimonialText => {
        testimonialText.classList.remove('active');
    });
}
testimonialPictures.forEach(testimonialPicture => {
    testimonialPicture.onclick = function () {
        clearActives();
        const targetId = testimonialPicture.getAttribute('data-target') //home
        const testimonialText = document.getElementById(targetId);
        testimonialPicture.classList.add('active');
        testimonialText.classList.add('active');
    }
});