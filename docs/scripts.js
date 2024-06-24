document.addEventListener('DOMContentLoaded', function() {
    function redirectToGitHub(url) {
        window.open(url, '_blank');
    }

    const button1 = document.getElementById('gitCode1Button');
    const button2 = document.getElementById('gitCode2Button');
    const button3 = document.getElementById('gitCode3Button');

    if (button1) {
        button1.addEventListener('click', function() {
            redirectToGitHub('https://github.com/reshmar00/appleTreeGameSFML');
        });
    }

    if (button2) {
        button2.addEventListener('click', function() {
            redirectToGitHub('https://github.com/reshmar00/ChatServer');
        });
    }

    if (button3) {
        button3.addEventListener('click', function() {
            redirectToGitHub('https://github.com/reshmar00/Unix_Shell');
        });
    }

    if (button4) {
        button3.addEventListener('click', function() {
            redirectToGitHub('https://github.com/reshmar00/SVM-vs-kNN-Classification');
        });
    }

    const resumeButton = document.getElementById('resumeLink');
    resumeButton.classList.add('flash');
    setTimeout(function() {
        resumeButton.classList.remove('flash');
    }, 3000); // Adjust timing according to your preference
});