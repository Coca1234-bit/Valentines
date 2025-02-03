function nextPage() {
    window.location.href = "yes.html"; // Redirects to your "yes" page
}

function moveButton() {
    let button = document.getElementById("noButton");
    
    // Get random positions within the viewport
    let x = Math.random() * (window.innerWidth - button.clientWidth);
    let y = Math.random() * (window.innerHeight - button.clientHeight);
    
    // Apply the new position
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
