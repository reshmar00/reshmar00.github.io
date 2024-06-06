document.getElementById('actionButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// Function to redirect to GitHub repository
function redirectToGitHub(url) {
    window.location.href = url; // Redirect to the specified URL
}

// Add event listeners to the buttons
document.getElementById('gitCode1Button').addEventListener('click', function() {
    redirectToGitHub('https://github.com/MikeTJohnson/appletreeGame'); // Redirect to GitHub repository
});

document.getElementById('gitCode2Button').addEventListener('click', function() {
    redirectToGitHub('https://github.com/MikeTJohnson/appletreeGame'); // Redirect to GitHub repository
});

document.getElementById('gitCode3Button').addEventListener('click', function() {
    redirectToGitHub('https://github.com/MikeTJohnson/appletreeGame'); // Redirect to GitHub repository
});