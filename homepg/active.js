document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll(".nav-link");
    let currentURL = window.location.href;

    links.forEach(link => {
        if (link.href === currentURL) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
