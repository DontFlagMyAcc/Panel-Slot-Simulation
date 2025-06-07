// Load topbar
fetch('components/topbar.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('topbar-placeholder').innerHTML = data;
    });

// Load sidebar
fetch('components/sidebar.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('sidebar-placeholder').innerHTML = data;
    });

// Load footer
fetch('components/footer.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
    });