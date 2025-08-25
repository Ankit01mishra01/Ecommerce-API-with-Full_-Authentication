import express from "express";
import { register,login } from "../controllers/user.js";  // ✅ match file name

const router = express.Router();

// @endpoint -: /api/user/register
router.post("/register", register);


// login 
// @api-/api/user/login
router.post('/login', login)



export default router;