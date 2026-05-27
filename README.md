# AUREV - Premium Clothing Webshop

## Overview
A professional, modern e-commerce website for AUREV clothing brand. Built with clean HTML, CSS, and JavaScript with a focus on elegance and user experience.

## Features

✨ **Professional Design**
- Elegant black and gold color scheme reflecting the AUREV brand
- Responsive design for all devices
- Smooth animations and transitions
- Clean, minimalist layout

🛍️ **E-commerce Functionality**
- Product showcase with featured items
- Add to cart functionality
- Cart tracking with item count
- LocalStorage integration for persistent cart
- Product notifications

📱 **Responsive Layout**
- Mobile-optimized design
- Tablet and desktop support
- Flexible grid system
- Touch-friendly buttons

📧 **Customer Engagement**
- Newsletter subscription form
- Contact information section
- Social media links
- Smooth navigation

## Project Structure

```
aurev-shop/
├── index.html          # Main HTML file
├── styles.css          # Complete styling
├── script.js           # JavaScript functionality
├── README.md           # This file
└── assets/             # Images and logo (create this folder)
    ├── aurev-logo.svg  # Brand logo
    ├── product-1.jpg   # Product images
    ├── product-2.jpg
    ├── product-3.jpg
    └── product-4.jpg
```

## Quick Start

1. **Clone or download** this repository
2. **Create an `assets` folder** in the root directory
3. **Add your images**:
   - Place your AUREV logo as `assets/aurev-logo.svg` (or .png)
   - Add product images as `assets/product-1.jpg`, `product-2.jpg`, etc.
4. **Open `index.html`** in your browser

## Customization Guide

### 1. **Change Colors**
Edit the color scheme in `styles.css`. Main colors:
- Primary Black: `#000`
- Accent Gold: `#d4a574`
- Light Text: `#f4e8d0`
- Dark Background: `#1a1a1a`

**Find and replace** to change all colors at once:
- `#d4a574` → Your accent color
- `#000` → Your primary color
- `#f4e8d0` → Your light text color

### 2. **Update Logo**
1. Replace the logo in the `assets/` folder
2. Edit the image path in `index.html` line 15:
   ```html
   <img src="assets/aurev-logo.svg" alt="AUREV Logo">
   ```

### 3. **Add Products**
Duplicate a product card and update:
```html
<div class="product-card">
    <div class="product-image">
        <img src="assets/your-product.jpg" alt="Product Name">
    </div>
    <h3>Your Product Name</h3>
    <p class="price">$XX.99</p>
    <p class="description">Your description</p>
    <button class="add-to-cart">Add to Cart</button>
</div>
```

### 4. **Update Contact Information**
Edit the footer section in `index.html`:
- Email: Line 107
- Phone: Line 108
- Social media links: Lines 112-114

### 5. **Modify Navigation**
Edit navigation links in `index.html` (line 11-15):
```html
<a href="#home" class="nav-link">Home</a>
<a href="#shop" class="nav-link">Shop</a>
<!-- Add or remove as needed -->
```

### 6. **Change Text & Headlines**
- Hero title: Line 26
- Hero subtitle: Line 27
- Section headers: Various lines
- Footer text: Bottom of file

## Advanced Customization

### Fonts
Change the font family in `styles.css` line 8:
```css
font-family: 'Your Font', sans-serif;
```

### Layout
Modify the grid layout in `styles.css` around line 227:
```css
.products-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
```

### Animations
Adjust animation timing in `script.js`:
```javascript
animation: slideIn 0.3s ease; /* Change 0.3s to your timing */
```

## Features You Can Add

- **Shopping Cart Page**: Create a full cart checkout page
- **Product Details**: Add individual product pages
- **Filters**: Add category or price filters
- **User Accounts**: Implement authentication
- **Payment Gateway**: Add Stripe or PayPal
- **Admin Panel**: Manage products from dashboard
- **Search Functionality**: Search products by name
- **Reviews & Ratings**: Customer reviews
- **Email Notifications**: Order confirmations

## Browser Support

✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers

## Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## File Descriptions

### index.html
- Main HTML structure
- All sections: Header, Hero, Products, About, Newsletter, Footer
- Semantic HTML5 markup
- Links to CSS and JavaScript

### styles.css
- Complete professional styling
- Responsive design rules
- Hover effects and transitions
- Color scheme and typography
- Grid and flexbox layouts

### script.js
- Shopping cart functionality
- Add to cart logic
- LocalStorage integration
- Smooth scrolling
- Form handling
- Notification system

## Permissions & Rights

✅ **You have full permission to:**
- Modify all code (HTML, CSS, JavaScript)
- Change colors, fonts, layout, and design
- Add/remove sections and features
- Update product information
- Customize for your brand
- Use commercially
- Deploy to any domain
- Resell or redistribute
- Create derivatives

## Hosting Options

### Free Hosting:
- **GitHub Pages**: Push to `gh-pages` branch
- **Netlify**: Connect your GitHub repo
- **Vercel**: Deploy with one click
- **Firebase Hosting**: Google's hosting service

### Paid Hosting:
- **Shopify**: Full e-commerce platform
- **WooCommerce**: WordPress plugin
- **Bluehost/SiteGround**: Traditional hosting
- **AWS/Azure**: Cloud hosting

## Deployment Steps (GitHub Pages)

1. Create a repository on GitHub
2. Push your code
3. Go to Settings → Pages
4. Select `main` branch as source
5. Your site will be live at `yourusername.github.io/aurev-shop`

## Next Steps

1. ✅ Add your logo and product images
2. ✅ Update product names and prices
3. ✅ Customize colors and text
4. ✅ Test on mobile devices
5. ✅ Deploy to a hosting service
6. ✅ Set up a domain name
7. ✅ Add payment processing

## Support & Questions

For modifications or questions about any part of the code, feel free to ask!

---

**Made with ❤️ for AUREV - Premium Clothing Collection**

*Version: 1.0*
*Last Updated: May 27, 2026*