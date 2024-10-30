const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#ef0000", // Red
    "#f12029", // Bright Red
];

// Initialize circles with colors and positions
circles.forEach(function (circle, index) {
    circle.x = -150;
    circle.y = -205;
    circle.style.backgroundColor = colors[index % colors.length];
});

// Update coordinates on mouse move
window.addEventListener("mousemove", function(e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

// Animate circles
function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        // Update position
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        
        // Scale effect based on index
        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        // Set new position for the next circle
        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();
