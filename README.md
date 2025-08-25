#Ecommerce API with Full Authentication

A full-featured RESTful e-commerce backend built with Node.js, Express, MongoDB, and JWT authentication.

Features

User Authentication: Secure registration and login using JWTs, plus protected routes.

Product Management: Create, read, update, and delete products.

Cart Functionality: Add items to cart, update quantity, get user’s cart, and remove products.

User Roles/Functions: Publicly accessible product listing; authenticated access for cart features.

MongoDB Integration: Data is managed via Mongoose models.

Error Handling: Graceful responses on validation errors or failures.

Tech Stack
Layer	Technologies
Backend	Node.js & Express
Database	MongoDB via Mongoose ODM
Authentication	JWT (JSON Web Tokens)
Middleware	express.json(), authentication guard
Dev Tools	nodemon, dotenv
Requirements

Node.js (v16+)

MongoDB instance or MongoDB Atlas account

Setup & Installation

Clone the repository

git clone https://github.com/Ankit01mishra01/Ecommerce-API-with-Full_-Authentication.git
cd Ecommerce-API-with-Full_-Authentication


Install dependencies

npm install


Configure environment variables

Create a .env file at the project root

Example .env:

MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secure-jwt-secret
PORT=3000


Start the server

npm run dev


Your API will be running at http://localhost:3000

API Endpoints
Authentication Routes
Method	Endpoint	Description
POST	/api/user/register	Register a new user
POST	/api/user/login	Authenticate user and issue JWT
Product Routes
Method	Endpoint	Description
POST	/api/product/add	Create a new product
GET	/api/product/	Get all products
GET	/api/product/:id	Get product by ID
PUT	/api/product/:id	Update product by ID
Cart Routes (Authenticated)
Method	Endpoint	Description
POST	/api/cart/add	Add an item to the cart
GET	/api/cart/items	Retrieve cart items
GET	/api/cart/user	Get current user's cart
DELETE	/api/cart/remove/:productId	Remove a product from cart
