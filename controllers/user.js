import { User } from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email });
  if (user) return res.json({ message: "User already exists", success: false });

  const hashPassword = await bcrypt.hash(password, 10);

  user = await User.create({
    name,
    email,
    password: hashPassword
  });

  res.json({ message: "User registered successfully", user, success: true });
};

// user login

export const login = async (req,res)=>{
  const {email,password} = req.body;

  let user = await User.findOne({ email });

  if(!user) return res.json({message:"User not exist",success:false});

  const validPass = await bcrypt.compare(password,user.password);
if(!validPass) return res.json({message:"invalid password", success:false});

  const token = jwt.sign({userId:user._id},process.env.JWT,{
    expiresIn:"1d"
  })
  res.json({message:`welcome ${user.name}`, token,success:true});

}