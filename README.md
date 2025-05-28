# 🚜 TractorPartsLK - MERN Stack E-commerce Platform

A full-stack web application built with the MERN (MongoDB, Express, React, Node.js) stack for buying and selling tractor parts. Includes separate dashboards for Buyers, Sellers, and Admins.

TractorPartsLK/
├── client/                     # Frontend - React
│   ├── public/                 # Static files
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── logo.png
│   └── src/
│       ├── assets/             # Images, logos, etc.
│       │   └── placeholder.jpg
│       ├── components/         # Shared UI components
│       │   ├── Header.jsx
│       │   ├── Footer.jsx
│       │   ├── ProductCard.jsx
│       │   └── Sidebar.jsx
│       ├── context/            # React Context APIs
│       │   ├── AuthContext.js
│       │   └── CartContext.js
│       ├── layouts/            # Layouts for roles
│       │   ├── BuyerLayout.jsx
│       │   ├── SellerLayout.jsx
│       │   └── AdminLayout.jsx
│       ├── pages/              # Role-based pages
│       │   ├── Buyer/
│       │   │   ├── Dashboard.jsx
│       │   │   ├── ProductList.jsx
│       │   │   ├── Cart.jsx
│       │   │   └── Orders.jsx
│       │   ├── Seller/
│       │   │   ├── Dashboard.jsx
│       │   │   ├── AddProduct.jsx
│       │   │   ├── MyProducts.jsx
│       │   │   └── Orders.jsx
│       │   ├── Admin/
│       │   │   ├── Dashboard.jsx
│       │   │   ├── ManageUsers.jsx
│       │   │   ├── ManageProducts.jsx
│       │   │   └── SiteSettings.jsx
│       │   └── Auth/
│       │       ├── Login.jsx
│       │       ├── Register.jsx
│       │       └── ForgotPassword.jsx
│       ├── routes/             # React Router setup
│       │   └── AppRoutes.jsx
│       ├── services/           # API service handlers
│       │   ├── sellerService.js
│       │   ├── productService.js
│       │   └── orderService.js
│       ├── utils/              # Helper functions
│       │   └── validators.js
│       ├── App.js
│       ├── index.js
│       └── main.css
│
├── server/                     # Backend - Node.js & Express
│   ├── config/
│   │   ├── db.js               # MongoDB connection
│   │   └── cloudinary.js       # Image upload config
│   ├── controllers/           # Business logic
│   │   ├── authController.js
│   │   ├── buyerController.js
│   │   ├── sellerDashboardController.js
│   │   ├── sellerController.js
│   │   ├── adminController.js
│   │   └── productController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── roleMiddleware.js
│   │   ├── errorHandler.js
│   │   └── upload.js
│   ├── models/                # Mongoose models
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   ├── SellerProfile.js
│   │   └── Category.js
│   ├── routes/                # API endpoints
│   │   ├── authRoutes.js
│   │   ├── buyerRoutes.js
│   │   ├── sellerRoutes.js
│   │   ├── adminRoutes.js
│   │   ├── achatbotRoutes.js
│   │   ├── sellerDashboardRoutes.js
│   │   └── productRoutes.js
│   ├── uploads/
│   │   ├── seller/profile/     # Seller profile images
│   │   └── events/             # Event-related uploads
│   ├── utils/
│   │   └── generateToken.js
│   ├── App.js                  # Express app config
│   └── server.js               # Entry point
│
├── .env                        # Environment variables
├── .gitignore
├── package.json
├── README.md

# colours >>>>>>>>>>>>>>>>>>>>>>>>

#3da065
#70e67e
#E8F5EA
#1D4F28
#86c498
#addaad
#e8f5e9

---

## ✨ Features

- 🔐 Role-based Authentication (User, Seller, Admin)
- 🛒 Buyer Dashboard: Browse products, manage cart, view orders
- 🧾 Seller Dashboard: Add/edit products, view orders, analytics
- 🛠 Admin Panel: Manage users, products, and site settings
- 🖼 Image Uploads (Multer + Cloudinary setup ready)
- 🤖 AI Chatbot and Image Search using TensorFlow MobileNet
- 📊 Analytics via Chart.js for Sellers/Admins
- 🎨 Responsive UI with AOS animations and modern design

---

## ⚙️ How to Run the Project Locally

### 🔧 Prerequisites

- Node.js & npm
- MongoDB (local or cloud)
- (Optional) Cloudinary account for image uploads

### Clone the Repository

```bash
git clone https://github.com/thilankadilshan/TractorPartsLK.git
cd TractorPartsLK
```

# Install Dependencies

# Frontend

cd client
npm install

# Backend

cd ../server
npm install

# Run the Application

In client/
npm run dev

# In server/

npm run dev

Frontend: http://localhost:5173
Backend API: http://localhost:5000

## 📦 Technologies Used

# Frontend:

React 19 + Vite
React Router DOM v7
Axios, Swiper.js, AOS
Chart.js & React-ChartJS-2
Formik (for forms)

# Backend:

Express.js
MongoDB & Mongoose
Multer (uploads), JWT (auth), Bcrypt (hashing)
TensorFlow.js (image-based search with MobileNet)

## 🙋 Author

Wahigala Jayalath
💼 MERN Stack Developer
🌐 GitHub: https://github.com/thilankadilshan
📨 Email: thilanka.cv@gmail.com

## 📜 License

This project is part of an academic assignment and is shared for educational purposes only.
