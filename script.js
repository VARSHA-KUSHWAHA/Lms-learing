// Function to load HTML components (header/footer)
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${file}:`, error));
}

// Load Header and Footer on page load
document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header-container", "header.html");
    loadComponent("footer-container", "footer.html");
});
