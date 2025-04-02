function scrollToTarget(event, targetId) {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
}