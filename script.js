/* Add to your script.js */
// Delivery Timer Countdown
function updateCountdown() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setHours(24, 0, 0, 0);
    const diff = tomorrow - now;
    
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    
    document.getElementById('countdown').textContent = 
        `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

setInterval(updateCountdown, 1000);

// Category Filter
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        
        document.querySelectorAll('.filter-btn').forEach(btn => 
            btn.classList.remove('active'));
        button.classList.add('active');
        
        document.querySelectorAll('.flavor-card').forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Quick Order Modal
function openQuickOrder() {
    // Implementation for quick order modal
}

// Custom Order Form
function openCustomOrder() {
    // Implementation for custom order form
}

function scrollToMenu() {
    document.getElementById('services').scrollIntoView({ 
        behavior: 'smooth' 
    });
}