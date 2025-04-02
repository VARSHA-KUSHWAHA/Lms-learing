// Function to load the header
function loadSidebar() {
    fetch("Sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("Sidebar-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading Sidebar:", error));
}

// Function to load the footer
function loadFooter() {
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
}

function loalAdashboard() {
    fetch("Adashboard.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("Adashboard-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading Adashboard:", error));
}

function loalAdashboard() {
    fetch("Adashboard.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("Adashboard-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading Adashboard:", error));
}

// Load Header & Footer when page loads
document.addEventListener("DOMContentLoaded", function() {
    loadSidebar();
    loadFooter();
    loalAdashboard();
});
