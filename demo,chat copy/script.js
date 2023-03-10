// Hero Section Animation
const subtitleElements = document.querySelectorAll('.subtitle');

subtitleElements.forEach((element) => {
const delay = element.getAttribute('data-delay');
element.style.animationDelay = delay;
});

// Work Section Animation
const projectItems = document.querySelectorAll('.project-item');

projectItems.forEach((item) => {
item.addEventListener('mouseenter', () => {
item.querySelector('img').style.transform = 'scale(1.2)';
});

item.addEventListener('mouseleave', () => {
item.querySelector('img').style.transform = 'scale(1)';
});
});