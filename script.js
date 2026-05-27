// ===========================
// AUREV CLOTHING SHOP
// E-Commerce Functionality
// ===========================

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const addToCartBtns = document.querySelectorAll('.add-to-cart');
const cartModal = document.getElementById('cartModal');
const cartModalClose = document.querySelector('.modal-close');
const ctaBtn = document.querySelector('.cta-btn');

// Shopping Cart State
let cart = [];

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    setupEventListeners();
});

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Hamburger menu toggle
    hamburger.addEventListener('click', toggleMenu);

    // Close menu when nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            updateActiveLink(link);
        });
    });

    // Add to cart buttons
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', handleAddToCart);
    });

    // Cart modal
    cartModalClose.addEventListener('click', closeCart);
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) closeCart();
    });

    // CTA Button
    ctaBtn.addEventListener('click', () => {
        document.getElementById('tshirts').scrollIntoView({ behavior: 'smooth' });
    });
}

// ===== NAVIGATION =====
function toggleMenu() {
    navMenu.classList.toggle('active');
}

function updateActiveLink(clickedLink) {
    navLinks.forEach(link => link.classList.remove('active'));
    clickedLink.classList.add('active');
}

// ===== SHOPPING CART =====
function handleAddToCart(e) {
    const productCard = e.target.closest('.product-card');
    const productName = productCard.querySelector('h3').textContent;
    const productPrice = parseFloat(productCard.querySelector('.price').textContent.replace('$', ''));
    const colorTag = productCard.querySelector('.color-tag').textContent;

    const cartItem = {
        id: Date.now(),
        name: productName,
        price: productPrice,
        color: colorTag,
        quantity: 1
    };

    // Check if item already exists in cart
    const existingItem = cart.find(item => item.name === productName && item.color === colorTag);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(cartItem);
    }

    saveCart();
    showNotification(`${productName} added to cart!`);
    renderCart();
    updateCartBadge();
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotal = document.querySelector('.cart-total');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.textContent = 'Total: $0.00';
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item" style="padding: 15px; border-bottom: 1px solid #e0e0e0; display: flex; justify-content: space-between; align-items: center;">
            <div>
                <p style="font-weight: 700; margin-bottom: 5px;">${item.name}</p>
                <p style="font-size: 12px; color: #666;">${item.color} | Qty: ${item.quantity}</p>
            </div>
            <div style="text-align: right;">
                <p style="font-weight: 700; color: #DC143C; margin-bottom: 8px;">$${(item.price * item.quantity).toFixed(2)}</p>
                <button onclick="removeFromCart(${item.id})" style="background: #ff6b6b; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 12px;">Remove</button>
            </div>
        </div>
    `).join('');

    // Calculate total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    renderCart();
    updateCartBadge();
    showNotification('Item removed from cart');
}

function openCart() {
    cartModal.classList.add('show');
    renderCart();
}

function closeCart() {
    cartModal.classList.remove('show');
}

// ===== LOCAL STORAGE =====
function saveCart() {
    localStorage.setItem('aurevCart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('aurevCart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (error) {
            console.error('Error loading cart:', error);
            cart = [];
        }
    }
}

// ===== NOTIFICATIONS =====
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #DC143C 0%, #1E3A8A 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 2000;
        animation: slideInUp 0.3s ease;
        font-weight: 600;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutDown 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===== ADD CART ICON TO NAV =====
const cartIcon = document.createElement('div');
cartIcon.style.cssText = `
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 0.3s ease;
    background: linear-gradient(135deg, #DC143C 0%, #1E3A8A 100%);
    color: white;
    font-weight: 700;
    position: relative;
`;

const cartBadge = document.createElement('span');
cartBadge.id = 'cartBadge';
cartBadge.style.cssText = `
    position: absolute;
    top: -8px;
    right: -8px;
    background: #ff6b6b;
    color: white;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 800;
    display: none;
`;

cartIcon.innerHTML = `<i class="fas fa-shopping-bag"></i> <span>Cart</span>`;
cartIcon.appendChild(cartBadge);
cartIcon.addEventListener('click', openCart);

// Insert cart icon after nav menu
const navContainer = document.querySelector('.navbar-container');
navContainer.appendChild(cartIcon);

// Update cart badge
function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (totalItems > 0) {
        badge.textContent = totalItems;
        badge.style.display = 'flex';
    } else {
        badge.style.display = 'none';
    }
}

// Initialize on load
window.addEventListener('load', () => {
    updateCartBadge();
});

// ===== ADDITIONAL ANIMATIONS STYLES =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideOutDown {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(30px);
        }
    }
`;
document.head.appendChild(style);

// ===== CHECKOUT FUNCTIONALITY =====
const checkoutBtn = document.querySelector('.btn-primary');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        alert(`Thank you for your order! Total: $${total.toFixed(2)}\n\nThis is a demo site. In a real store, this would redirect to payment.`);
        cart = [];
        saveCart();
        closeCart();
        updateCartBadge();
        showNotification('Order placed successfully!');
    });
}