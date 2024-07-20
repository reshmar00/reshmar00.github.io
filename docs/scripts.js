document.addEventListener('DOMContentLoaded', function() {
    function redirectToGitHub(url) {
        window.open(url, '_blank');
    }

    const button1 = document.getElementById('gitCode1Button');
    const button2 = document.getElementById('gitCode2Button');
    const button3 = document.getElementById('gitCode3Button');
    const button4 = document.getElementById('gitCode4Button');
    const button5 = document.getElementById('gitCode5Button');
    const button6 = document.getElementById('gitCode6Button');
    const button7 = document.getElementById('gitCode7Button');

    

    if (button1) {
        button1.addEventListener('click', function() {
            redirectToGitHub('https://github.com/reshmar00/recipe-sharing-website');
        });
    }

    if (button2) {
        button2.addEventListener('click', function() {
            redirectToGitHub('https://github.com/reshmar00/twaddle');
        });
    }

    if (button3) {
        button3.addEventListener('click', function() {
            redirectToGitHub('https://github.com/reshmar00/Solar-Water-Heater-Simulation');
        });
    }

    if (button4) {
        button4.addEventListener('click', function() {
            redirectToGitHub('https://github.com/reshmar00/appleTreeGameSFML');
        });
    }

    if (button5) {
        button5.addEventListener('click', function() {
            redirectToGitHub('https://github.com/reshmar00/ChatServer');
        });
    }

    if (button6) {
        button6.addEventListener('click', function() {
            redirectToGitHub('https://github.com/reshmar00/Unix_Shell');
        });
    }

    if (button7) {
        button7.addEventListener('click', function() {
            redirectToGitHub('https://github.com/reshmar00/SVM-vs-kNN-Classification');
        });
    }
});