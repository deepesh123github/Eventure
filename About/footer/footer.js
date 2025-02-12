fetch('footer/footer.html')  // Corrected path to the footer file
.then(response => response.text())
.then(data => document.getElementById('footer').innerHTML = data)
.catch(error => console.error('Error loading footer:', error)); // Added error handling