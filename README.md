🛒 Ecommerce API with Full Authentication

A fully functional Ecommerce REST API built with Node.js, Express, MongoDB, and JWT Authentication.
This project demonstrates secure authentication, product management, and cart handling, making it a strong showcase of backend development skills for real-world applications.

🚀 Features

🔐 User Authentication (Register, Login, JWT-based Auth, Middleware protection)

👤 User Management (profile, role-based access)

📦 Product Management (Add, Update, Delete, Get All, Get by ID)

🛍️ Shopping Cart (Add to Cart, Remove from Cart, Get User Cart)

✅ Secure Endpoints (Protected routes with isAuthenticated middleware)

🌐 REST API Architecture with clean routes & controllers

🛠️ Tech Stack

Backend: Node.js, Express.js

Database: MongoDB with Mongoose

Authentication: JWT (JSON Web Tokens) & Bcrypt

Middleware: Custom authentication & error handling

Tools: Nodemon, dotenv

📂 Project Structure
Ecommerce-API-with-Full_-Authentication/
│-- controllers/     # Business logic (user, product, cart)
│-- middlewares/     # Authentication & custom middleware
│-- models/          # Mongoose schemas
│-- routes/          # API endpoints
│-- server.js        # Entry point
│-- .env             # Environment variables
│-- package.json

🔑 API Endpoints
👤 User

POST /api/user/register → Register new user

POST /api/user/login → Login user & get token

📦 Product

GET /api/products/all → Get all products

GET /api/products/:id → Get product by ID

PUT /api/products/:id → Update product by ID

🛍️ Cart

POST /api/cart/add → Add product to cart

GET /api/cart/items → Get cart items

GET /api/cart/user → Get user’s cart

DELETE /api/cart/remove/:productId → Remove product from cart

⚙️ Setup Instructions

Clone the repo

git clone https://github.com/Ankit01mishra01/Ecommerce-API-with-Full_-Authentication.git
cd Ecommerce-API-with-Full_-Authentication


Install dependencies

npm install


Configure environment → Create .env file

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000


Run server

npm run dev

📸 Demo (Optional: Add Postman screenshots / GIFs)
💡 Learning Highlights

Implemented JWT authentication & secure routes

Built scalable REST API structure with controllers & middlewares

Designed MongoDB schemas for users, products & cart

Hands-on experience with real-world ecommerce workflows

👨‍💻 Author

Ankit Mishra

🌐 GitHub

💼 Aspiring Full Stack Developer | Backend Enthusiast
