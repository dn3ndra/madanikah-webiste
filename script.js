// script.js

document.addEventListener('DOMContentLoaded', function() {
    const kebabMenu = document.getElementById('kebabMenu');
    const nav = document.querySelector('nav');

    // Toggle navigation visibility on kebab menu click
    kebabMenu.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});
