function loadPage(url) {
    event.preventDefault(); // Prevent default link behavior

    const content = document.querySelector('.container.cont');
    content.style.opacity = 0; // Start fade-out

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`Error loading page: ${response.status}`);
            return response.text();
        })
        .then(html => {
            setTimeout(() => {
                content.innerHTML = html; // Inject new content
                content.style.opacity = 1; // Start fade-in
                history.pushState(null, null, url); // Update browser URL
                loadScripts(); // Load additional scripts if needed
            }, 200); // Small delay to allow fade-out effect
        })
        .catch(err => console.error(err));
}

function loadScripts() {
    // Reload necessary scripts after page switch
    const scripts = [
        '/assets/js/home/scroll.js',
        '/assets/js/Admin/admin.js'
    ];
    scripts.forEach(script => {
        const newScript = document.createElement('script');
        newScript.src = script;
        newScript.async = true;
        document.body.appendChild(newScript);
    });
}

// Handle back/forward button navigation
window.onpopstate = function () {
    loadPage(location.pathname);
};
