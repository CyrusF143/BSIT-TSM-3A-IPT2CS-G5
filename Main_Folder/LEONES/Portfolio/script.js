document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('button[data-target]');
    
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const header = document.querySelector('header');
    header.classList.add('animate');

    const body = document.querySelector('body');
    body.classList.add('animate');
});
