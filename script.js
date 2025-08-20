// This is already included in the HTML file's script section
// The standalone script.js file can contain the same code for organization:

// Download visiting card functionality
document.getElementById('downloadCardBtn').addEventListener('click', function() {
    // Create a temporary anchor element
    const link = document.createElement('a');
    
    // Use the direct path to the image
    link.href = 'LLL VISITING CARD.png';
    link.download = 'Limelight_Logistics_Visiting_Card.png';
    
    // Append to the body, click and then remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Note: All other JavaScript functionality is included directly in the HTML file
// to ensure all interactive elements work even if script.js fails to

// js for client cards

document.querySelectorAll('.client-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const logo = this.querySelector('.client-logo');
        logo.style.transform = 'scale(1.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        const logo = this.querySelector('.client-logo');
        logo.style.transform = 'scale(1)';
    });
});