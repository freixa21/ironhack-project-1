    document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.getElementById('menu-toggle');
        const navList = document.querySelector('nav ul');
        const conctactButton = document.querySelector('#contact-button');
        const menuIconOne = document.getElementById('menu-icon-1');
        const menuIconTwo = document.getElementById('menu-icon-2');
        const contactLink = document.getElementById('contact-mobile');

        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            conctactButton.classList.toggle('active');
            contactLink.classList.toggle('hide');

            menuIconOne.classList.toggle('active');
            menuIconTwo.classList.toggle('active');

        });
    });