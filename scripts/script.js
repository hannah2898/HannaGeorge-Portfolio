// Initialize ScrollReveal when the page loads

    const sr = ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2500,
        delay: 400
    });

    // Define a function to re-initialize ScrollReveal animations for the project section
    function initScrollReveal() {
        sr.reveal('.project-title', { delay: 200 });
        sr.reveal('.project-image', { delay: 600, origin: 'bottom' });
        sr.reveal('.text-box', { delay: 700, origin: 'right' });
        sr.reveal('.nextbutton', { delay: 700, origin: 'bottom' });
        sr.reveal('.tech-icons', { delay: 500, origin: 'bottom',interval:200 });
        sr.reveal('.technicons', { delay: 500, origin: 'bottom',interval:200 });
        sr.reveal('.tech-icons a', { delay: 500, origin: 'bottom',interval:200 });
        sr.reveal('.about-heading', { delay: 200 });
        sr.reveal('.my-image', { delay: 600, origin: 'bottom' });
        sr.reveal('.about-p', { delay: 500, origin: 'right' });
        sr.reveal('.resume', { delay: 600, origin: 'right',interval:200 });
        sr.reveal('.contact', { delay: 700, origin: 'right' });
        sr.reveal('.socials', { delay: 700, origin: 'bottom',interval:200 });
        sr.reveal('.socials a', { delay: 700, origin: 'bottom',interval:200 });
    }

    // Call the function to initialize ScrollReveal animations for the project section
    document.addEventListener('DOMContentLoaded', function() {
        initScrollReveal();
    });
    const projectContainerInner = document.querySelector('.project-container-inner');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentIndex = 0;
const projects = document.querySelectorAll('.project');

nextBtn.addEventListener('click', function () {
    navigateToNextProject();
});

prevBtn.addEventListener('click', function () {
    navigateToPreviousProject();
});

function navigateToNextProject() {
    currentIndex = (currentIndex + 1) % projects.length;
    scrollToProject(currentIndex);
}

function navigateToPreviousProject() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    scrollToProject(currentIndex);
}

function scrollToProject(index) {
    const project = projects[index];
    project.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
