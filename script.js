function smoothScrollTo(target, duration = 1000, offset = 0) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    let animationFrameId = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
            animationFrameId = requestAnimationFrame(animation);
        } else {
            window.scrollTo(0, targetPosition);
            cancelAnimationFrame(animationFrameId);
        }
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    animationFrameId = requestAnimationFrame(animation);
    return () => cancelAnimationFrame(animationFrameId);
}

// Example usage:
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        const cancelScroll = smoothScrollTo(target, 1000, -50);
        // To cancel the scroll, call cancelScroll()
    });
});