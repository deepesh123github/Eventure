document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const toggler = document.querySelector(".navbar-toggler");

    toggler.addEventListener("click", function () {
        if (!navbar.classList.contains("scrolled")) {
            navbar.classList.toggle("scrolled");
        } else if (!document.querySelector(".navbar-collapse.show")) {
            navbar.classList.remove("scrolled");
        }
    });

    // Remove the background blur when clicking outside the menu
    document.addEventListener("click", function (event) {
        if (!toggler.contains(event.target) && !navbar.contains(event.target)) {
            navbar.classList.remove("scrolled");
        }
    });
});

