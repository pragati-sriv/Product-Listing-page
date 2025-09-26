# TT Store - Product Listing Page

This project is a **Next.js** application that implements a single-page product listing based on a design provided in Figma.  
Products are dynamically fetched and displayed using **Axios** from the Fake Store API.  

The navbar is fully responsive and includes a hamburger menu for mobile devices. Product cards have a clean design and display product image, title, and price.

---

## Features

- Responsive Navbar with Hamburger Menu
- Dynamic Product Listing using Axios
- Product Cards with Image, Title, and Price
- Mobile-Friendly Design
- Click Outside Menu to Close Feature

---

## Technologies Used

- Next.js
- Axios
- CSS Modules
- Fake Store API

---

## Setup Instructions

1. Clone the project:
```bash
git clone https://github.com/pragati-sriv/Product-Listing-page.git
cd tt-plp
npm install
npm run dev
Open http://localhost:3000 in your browser to view the project.

API Used
Products are fetched from:
https://fakestoreapi.com/products

2.Folder Structure
/pages
  index.js
/components
  Navbar.js
  ProductCard.js
  ProductList.js
/styles
  Navbar.module.css
  ProductCard.module.css
  ProductList.module.css