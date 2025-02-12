document.querySelectorAll(".current-time").forEach(el => {
    el.textContent = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
});