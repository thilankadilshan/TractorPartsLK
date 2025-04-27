# TractorPartsLK

A Web Platform for Connecting Sri Lankan Farmers with Trusted Tractor Spare Part Suppliers

colours >>>>>>>>>>>>>>>>>>>>>>>>

#3da065
#70e67e
#E8F5EA
#1D4F28
#86c498
#addaad
#e8f5e9

folder structure >>>>>>>>>>>>>>>

TractorPartsLK/
├── client/ # Frontend - React
│ ├── public/
│ │ ├── index.html
│ │ ├── favicon.ico
│ │ └── logo.png
│ └── src/
│ ├── assets/ # Images, logos, etc.
│ │ └── placeholder.jpg
│ ├── components/ # Shared UI components
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ ├── ProductCard.jsx
│ │ └── Sidebar.jsx
│ ├── context/ # React Context (auth, cart, etc.)
│ │ ├── AuthContext.js
│ │ └── CartContext.js
│ ├── layouts/ # Layouts per role
│ │ ├── BuyerLayout.jsx
│ │ ├── SellerLayout.jsx
│ │ └── AdminLayout.jsx
│ ├── pages/
│ │ ├── Buyer/
│ │ │ ├── Dashboard.jsx
│ │ │ ├── ProductList.jsx
│ │ │ ├── Cart.jsx
│ │ │ └── Orders.jsx
│ │ ├── Seller/
│ │ │ ├── Dashboard.jsx
│ │ │ ├── AddProduct.jsx
│ │ │ ├── MyProducts.jsx
│ │ │ └── Orders.jsx
│ │ ├── Admin/
│ │ │ ├── Dashboard.jsx
│ │ │ ├── ManageUsers.jsx
│ │ │ ├── ManageProducts.jsx
│ │ │ └── SiteSettings.jsx
│ │ └── Auth/
│ │ ├── Login.jsx
│ │ ├── Register.jsx
│ │ └── ForgotPassword.jsx
│ ├── routes/ # React Router setup
│ │ └── AppRoutes.jsx
│ ├── services/ # API handlers
│ │ ├── authService.js
│ │ ├── productService.js
│ │ └── orderService.js
│ ├── utils/ # Helper functions
│ │ └── validators.js
│ ├── App.js
│ ├── index.js
│ └── main.css
│
├── server/ # Backend - Node.js & Express
│ ├── config/
│ │ ├── db.js # MongoDB connection
│ │ └── cloudinary.js # (optional) for image uploads
│ ├── controllers/
│ │ ├── authController.js
│ │ ├── buyerController.js
│ │ ├── sellerController.js
│ │ ├── adminController.js
│ │ └── productController.js
│ ├── middleware/
│ │ ├── authMiddleware.js
│ │ ├── roleMiddleware.js
│ │ └── errorHandler.js
│ ├── models/
│ │ ├── User.js
│ │ ├── Product.js
│ │ ├── Order.js
│ │ └── Category.js
│ ├── routes/
│ │ ├── authRoutes.js
│ │ ├── buyerRoutes.js
│ │ ├── sellerRoutes.js
│ │ ├── adminRoutes.js
│ │ └── productRoutes.js
│ ├── uploads/ # For image uploads
│ ├── utils/
│ │ └── generateToken.js
│ ├── app.js # Main Express app config
│ └── server.js # Server startup
│
├── .env # Environment variables
├── .gitignore
├── package.json
├── README.md
└── README_BACKEND.md

hi
