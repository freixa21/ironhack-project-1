    document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.getElementById('menu-toggle');
        const navList = document.querySelector('nav ul');
        const conctactButton = document.querySelector('#contact-button');

        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            conctactButton.classList.toggle('active');
        });
    });