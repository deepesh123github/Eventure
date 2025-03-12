document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const navbarCollapse = document.querySelector("#navbarNav");

    // Scroll event for navbar background change
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Navbar open event
    navbarCollapse.addEventListener("show.bs.collapse", function () {
        navbar.classList.add("blurred");
    });

    // Navbar close event
    navbarCollapse.addEventListener("hide.bs.collapse", function () {
        navbar.classList.remove("blurred");
    });
});
