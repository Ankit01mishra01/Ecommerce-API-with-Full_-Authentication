import {Cart} from '../models/Cart.js'

// add to cart
export const addToCart=async(req,res)=>{
  const {productId,title,price,quantity} = req.body;
  const userId = req.user;
  let cart = await Cart.findOne({userId});

  if(!cart){
    cart= new Cart({userId, items:[{productId,title,price,quantity}]});
  }
  const itemIndex = cart.items.findIndex(
    (item=>item.productId.toString()===productId)
  )

  if(itemIndex > -1){
    cart.items[itemIndex].quantity += quantity;
    cart.items[itemIndex].price += price*quantity;
  }else{
    cart.items.push({productId,title,price,quantity});
  }

  await cart.save();
  res.json({message:'Item added to cart successfully', cart, success:true})
}
// get cart items
export const getCartItems = async (req, res) => {
  const userId = req.user;
  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.json({ success: true, cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// get user cart
export const userCart = async (req, res) => {
  const userId = req.user;
let cart = await Cart.findOne({userId});
if(!cart)return res.json({message:'Cart is empty'});

res.json({message:"User Cart", cart})
};

// remove product from cart

export const removeproductfromCart = async(req,res)=>{
  const productId=req.param.productId;
  const userId = req.user;

  let cart = await Cart.findOne({userId});
  if(!cart) return res.json({message:'Cart not found'});
cart.items= cart.items.filter((item)=>item.productId.toString()!==productId);

await cart.save();
res.json({message:"Product removed from cart", cart, success:true});
}
