document.addEventListener("DOMContentLoaded", function () {
  fetch("../footer/footer.html")  // Adjust path to fetch footer from one level up
    .then(response => response.text())
    .then(html => {
      document.getElementById("footer-container").innerHTML = html;
      
      // Dynamically load footer CSS
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "../assets/css/footer/footer.css";  // Adjust path for CSS
      document.head.appendChild(link);
    })
    .catch(error => console.error("Error loading footer:", error));
});
