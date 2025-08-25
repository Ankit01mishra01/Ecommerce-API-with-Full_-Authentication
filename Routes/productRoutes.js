// Routes/productRoutes.js
import express from "express";
import { createProduct, getProductById, getProducts, updateProductById,deleteProductById} from "../controllers/productController.js";

const router = express.Router();


// @api -/api/product/add

router.post("/add", createProduct);

// @api -/api/product
router.get("/", getProducts);

// get all product
router.get('/all', getProducts);

// get product by id 
router.get('/:id', getProductById)

// update product by Id
router.put('/:id', updateProductById);

// delete product by Id
router.delete('/:id', deleteProductById);

export default router;