import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { register } from "./controllers/auth.js";
// import { createPost } from "./controllers/post.js";
import { createPost } from "./controllers/posts.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import User from "./models/User.js";
import Post from "./models/Post.js";
import { users, posts } from "./data/index.js";

// CONFIGURATION
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); 
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ origin: "*" }));
app.use("/assets",express.static(path.join(__dirname, "public/assets")));

// FILE STORAGE
const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null,"public/assets");
    },
    filename: (req,file,cb) => {
        cb(null,file.originalname);
    }
});


const upload = multer({storage: storage});


// ROUTES WITH FILES
app.get("/",(req,res) => {
    res.send("Hello to Memories API");
});


// ROUTES WITH FILE 
app.post("/auth/register",upload.single("au"),register)
app.post("/posts", upload.single("picture"), createPost);

// ROUTES
app.use("/auth", authRoutes);
app.use("/users",userRoutes);
app.use("/posts",postRoutes)



// MONGOOSE SETUP
const PORT = process.env.PORT || 6001;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true},
).then(() => {
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
//   User.insertMany(users);
//   Post.insertMany(posts);

})
.catch((error) => console.log(error));




console.log(__filename);
console.log(__dirname);
