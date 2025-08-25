// controllers/productController.js
import Product from "../models/productModel.js";

// @desc   Create product
// @route  POST /api/products
// @access Public (for now)
export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc   Get all products
// @route  GET /api/products
// @access Public
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// get product by id
export const getProductById = async(req,res)=>{
  const id=req.params.id
try{
  let product = await Product.findById(id);
  if(!product){
    return res.json({message:"Invalid Product ID", success:false});
  }
  res.json({message:"all fetched products",product,success:true});
}catch(error){
  res.json({ message: error.message });
}}


// update product by Id
export const updateProductById=async(req,res)=>{
  const id=req.params.id;
  try{
    let product = await Product.findByIdAndUpdate(id, req.body, {new:true});
    if(!product){
      return res.json({message:"Invalid Product ID", success:false});
    }
    res.json({message:"Product updated successfully", product, success:true});
  }catch(error){
    res.json({ message: error.message });
  }
};


// delete product by id

export const deleteProductById=async(req,res)=>{
  const id=req.params.id;
  try{
    let product = await Product.findByIdAndDelete(id);
    if(!product){
      return res.json({message:"Invalid Product ID", success:false});
    }
    res.json({message:"Product deleted successfully", product, success:true});
  }catch(error){
    res.json({ message: error.message });
  }
};
