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

// RESPONSIVE DROPDOWN CONTAINER SLIDE

const hamburgerBtn = document.querySelector(".hamburger-icon");
const responsiveNavigation = document.querySelector(".responsive-nav-container");

hamburgerBtn.addEventListener("click", function (e) {
    responsiveNavigation.classList.toggle("active");
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
        const targetId = testimonialPicture.getAttribute('data-target');
        const testimonialText = document.getElementById(targetId);
        testimonialPicture.classList.add('active');
        testimonialText.classList.add('active');
    }
});

// BLOG ITEMS TAB LINKS JS

const tabLinks = Array.from(document.querySelectorAll(".tabs .tab-link"));
const blogItems = Array.from(document.querySelectorAll(".blog-items .blog-item-container"));
const blogItemOnlyOne = document.querySelector(".blog-items .blog-item-container");
const clearActivesForTabs = () => {
    tabLinks.forEach(tabLink => {
        tabLink.classList.remove('active');
    });
    blogItems.forEach(blogItem => {
        blogItem.classList.remove('active');
    });
}

tabLinks.forEach(tabLink => {
    tabLink.addEventListener("click", function (e) {
        e.preventDefault();
        clearActivesForTabs();
        const targetId = tabLink.getAttribute("data-target");
        const blogItem = document.getElementById(targetId);

        if (targetId !== "all") {
            tabLink.classList.add('active');
            blogItem.classList.add('active');
        } else {
            tabLink.classList.add('active');
            blogItems.forEach(item => {
                item.classList.add("active");
            })
        }
    })
})