// Function to load the header
function loadHeader() {
    fetch("Header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("Header-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading Header:", error));
}

// Function to load the footer
function loadtestFooter() {
    fetch("testFooter.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("testFooter-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading testFooter:", error));
}

// Load Header & Footer when page loads
document.addEventListener("DOMContentLoaded", function() {
    loadHeader();
    loadtestFooter();
});
