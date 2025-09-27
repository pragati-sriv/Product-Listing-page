# TT Store - Product Listing Page

TT Store is a *Next.js* application that implements a single-page product listing page based on a design provided in [Figma](https://www.figma.com/file/uWsNcQ6k60xf0yu34vH1pb/TT-PLP?node-id=0%3A1).  
The application fetches product data dynamically using *Axios* from the Fake Store API.

The project features a fully responsive design, including a mobile-friendly navbar with a hamburger menu. Product cards are designed to be clean, visually appealing, and display product image, title, and price.

---

## 📌 Features

- Responsive Navbar with Hamburger Menu
- Dynamic Product Listing using Axios
- Product Cards with Image, Title, and Price
- Mobile-Friendly Design
- Click Outside Menu to Close Feature
- Clean and Modern UI

---

## 🌐 API Used

Products are fetched from:  
https://fakestoreapi.com/products

---

## 🛠 Technologies Used

- Next.js
- Axios
- CSS Modules
- Fake Store API

---

## 📂 Project Structure
/pages
- index.js

/components
- Navbar.js
- ProductCard.js
- ProductList.js

/styles
- Navbar.module.css
- ProductCard.module.css
- ProductList.module.css


---

## 📌 Deployment

This project is deployed on Netlify:  
https://extraordinary-lily-0c4de5.netlify.app/

---

## 🚀 Setup Instructions

```bash
# Clone the repository
git clone https://github.com/pragati-sriv/Product-Listing-page.git

# Navigate to project directory
cd tt-plp

# Install dependencies
npm install

# Start the development server
npm run dev

# Open in browser
http://localhost:3000
