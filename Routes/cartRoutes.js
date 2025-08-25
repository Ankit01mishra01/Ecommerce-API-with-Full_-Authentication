import express from "express";  
import {addToCart,getCartItems, userCart } from '../controllers/cartController.js'
import { isAuthenticated } from "../middlewares/Auth.js";
import { removeproductfromCart } from "../controllers/cartController.js";

const router = express.Router();

router.post("/add", isAuthenticated, addToCart);
router.get("/items", isAuthenticated, getCartItems);

// get user cart

router.get("/user", isAuthenticated, userCart);

// remove product from cart
router.delete("/remove/:productId", isAuthenticated, removeproductfromCart);

export default router;

