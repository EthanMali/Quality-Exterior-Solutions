// Custom Cursor
const body = document.body;
const cursor = document.createElement('div');
cursor.classList.add('cursor');
body.appendChild(cursor);

// Move cursor to follow the mouse
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

// Create ripple effect on mouse click
document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.left = `${e.pageX}px`;
    ripple.style.top = `${e.pageY}px`;

    body.appendChild(ripple);

    // Remove the ripple after animation
    setTimeout(() => {
        ripple.remove();
    }, 1000); // Matches the duration of ripple-effect animation
});
