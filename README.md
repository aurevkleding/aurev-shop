```
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    🛍️  A U R E V  C L O T H I N G  🛍️
    Premium Fashion for Modern Style
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
```

# AUREV - Professional E-Commerce Clothing Shop

A modern, professional e-commerce website for AUREV clothing brand featuring premium quality t-shirts and jeans in red, blue, and white colors.

## 🌟 Features

### 📱 Professional Design
- **Modern UI/UX**: Clean and contemporary design with smooth animations
- **Brand Identity**: Professional AUREV branding with logo and color scheme
- **Responsive Layout**: Fully responsive design for all devices (desktop, tablet, mobile)
- **Smooth Scrolling**: Elegant smooth scroll navigation throughout the site

### 🛒 Shopping Features
- **Product Catalog**: 
  - T-Shirts Collection (3 colors: Red, Blue, White)
  - Jeans Collection (3 colors: Red, Blue, White)
- **Shopping Cart**: Functional shopping cart with add/remove items
- **Cart Management**: 
  - Add items to cart
  - Remove items
  - View cart total
  - Persistent cart storage (LocalStorage)
- **Product Details**: Price, color, and product information display

### 🎨 Color Scheme
- **Primary Red**: `#DC143C` - Brand color for T-shirts & Jeans
- **Primary Blue**: `#1E3A8A` - Brand color for T-shirts & Jeans
- **Pure White**: `#FFFFFF` - Elegant white products
- **Gradients**: Modern gradient backgrounds combining red and blue

### 🧭 Navigation
- **Sticky Navigation Bar**: Always accessible at the top
- **Hamburger Menu**: Mobile-friendly menu toggle
- **Quick Links**: Navigate to Home, T-Shirts, Jeans, Contact
- **Smooth Anchors**: Click navigation between sections

### 📬 Contact Section
- Phone contact information
- Email support
- Store address
- Professional contact cards

### 💾 Data Persistence
- **LocalStorage Integration**: Shopping cart saved automatically
- **Auto-Load**: Cart persists across browser sessions

## 🎯 Sections

### Hero Section
Eye-catching welcome area with:
- AUREV brand name
- Tagline: "Premium Quality Clothing for Modern Style"
- Call-to-action button directing to products

### T-Shirts Section
Three premium t-shirt options:
1. **Classic Red Tee** - $29.99
2. **Ocean Blue Tee** - $29.99
3. **Pure White Tee** - $29.99

### Jeans Section
Three premium denim options:
1. **Crimson Jeans** - $59.99
2. **Classic Blue Denim** - $59.99
3. **Elegant White Denim** - $59.99

### Contact Section
Professional contact information with:
- Phone support
- Email contact
- Store location
- Glassmorphism design cards

### Footer
Complete footer with:
- Brand information
- Quick navigation links
- Social media links
- Copyright information

## 🚀 Quick Start

### Option 1: GitHub Pages (Live Demo)
1. Go to Repository Settings → Pages
2. Select **main** branch as source
3. Your site will be live at: `https://aurevkleding.github.io/aurev-shop/`

### Option 2: Local Preview
1. Clone or download the repository
2. Open `index.html` in your browser
3. Or use a local server:
   ```bash
   python -m http.server 8000
   # or
   npx http-server
   ```

## 📁 Project Structure

```
aurev-shop/
├── index.html       # Main HTML file with structure
├── styles.css       # Complete professional styling
├── script.js        # E-commerce functionality
└── README.md        # This file
```

## 🎨 Customization

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-red: #DC143C;      /* Change to your red */
    --primary-blue: #1E3A8A;     /* Change to your blue */
    --primary-white: #FFFFFF;    /* White stays white */
}
```

### Update Prices
Edit product prices in `index.html`:
```html
<p class="price">$29.99</p>  <!-- Change the price -->
```

### Modify Products
Add new products to the grid in `index.html`:
```html
<div class="product-card">
    <div class="product-image blue-bg">
        <i class="fas fa-shirt"></i>
    </div>
    <div class="product-info">
        <h3>Your Product Name</h3>
        <p class="color-tag">Your Color</p>
        <p class="price">$XX.XX</p>
        <button class="add-to-cart">Add to Cart</button>
    </div>
</div>
```

### Add Social Links
Update footer social links in `index.html`:
```html
<a href="https://facebook.com/aurev"><i class="fab fa-facebook"></i></a>
<a href="https://instagram.com/aurev"><i class="fab fa-instagram"></i></a>
<a href="https://twitter.com/aurev"><i class="fab fa-twitter"></i></a>
```

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients, flexbox, and grid
- **Vanilla JavaScript**: Pure JS, no frameworks
- **Font Awesome**: Professional icons

### Features
- **LocalStorage API**: Shopping cart persistence
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: CSS and JavaScript animations
- **CSS Grid & Flexbox**: Modern layout techniques

## 📱 Browser Support

✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Shopping Cart Features

### Add to Cart
- Click any "Add to Cart" button
- Item added with quantity
- Toast notification appears
- Cart badge updates

### View Cart
- Click shopping bag icon in navigation
- See all items with prices
- View order total
- Remove individual items

### Persist Data
- Cart automatically saved to browser storage
- Survives page refresh
- Clear cart by removing all items

## 📊 Performance

- **Lightweight**: ~20KB (HTML + CSS + JS)
- **Fast Loading**: Optimized assets
- **Smooth Animations**: GPU-accelerated transitions
- **Mobile Optimized**: Fast performance on all devices

## 🔒 Security

- **Local Processing**: All operations on client-side
- **No External Data**: Shopping cart stays local
- **HTML Escaping**: Protection against XSS
- **HTTPS Ready**: Can be deployed with HTTPS

## 🎁 Future Enhancements

- [ ] Product filtering by size
- [ ] Search functionality
- [ ] Product reviews and ratings
- [ ] Wishlist feature
- [ ] User accounts and login
- [ ] Payment gateway integration
- [ ] Order tracking
- [ ] Discount codes
- [ ] Newsletter signup
- [ ] Dark mode toggle

## 📞 Contact

**AUREV Clothing**
- 📱 Phone: +1 (555) 123-4567
- 📧 Email: info@aurev.com
- 📍 Address: 123 Fashion Street, Style City

## 📄 License

Free to use and modify for personal or commercial projects.

---

**Version**: 2.0 (E-Commerce Edition)
**Last Updated**: May 27, 2026

Made with ❤️ for fashion enthusiasts everywhere! 👗👖✨
