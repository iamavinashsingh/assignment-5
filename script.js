// Size Selection
document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Quantity Adjustment
let quantity = 1;
function adjustQuantity(change) {
    quantity = Math.max(1, quantity + change);
    document.getElementById('quantity').textContent = quantity;
}

// Modal Handling
function openModal() {
    document.getElementById('sizeModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('sizeModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        closeModal();
    }
}

// Scrolling to left and right
function scrollLeftBtn() {
    const container = document.querySelector('.products-scroll');    
    container.scrollBy({ left: -210, behavior: 'smooth' });
    
}

function scrollRightBtn() {
    document.querySelector('.products-scroll').scrollBy({ left: 210, behavior: 'smooth' });
}

