function scrollToTarget(event, target, targetId) {
    event.preventDefault();
    const element = document.querySelector(target);
    if (!element.classList.contains('show')) {
        element.classList.add('show');
    }
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
}