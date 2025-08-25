import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import userRouter from "./Routes/user.js";
import productRouter from "./Routes/productRoutes.js";
import cartRouter from "./Routes/cartRoutes.js";  



const app = express();

// .env setup
config({ path: ".env" });

// middleware
app.use(express.json());

// user Router
app.use("/api/user", userRouter);

// home route
app.get("/", (req, res) => {
  res.json({ message: "This is home route working" });
});

// product router
app.use("/api/product", productRouter);

// cart router
app.use('/api/cart', cartRouter);

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "Ecomerce_Api_with_Authentication",
  })
  .then(() => console.log("MongoDb Connected..!"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));
 