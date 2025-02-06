import express from "express";
import {getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verify_token } from "../middleware/auth.js";


const router = express.Router();

// READ 
router.get("/", verify_token, getFeedPosts);
router.get("/:userId/posts",verify_token,getUserPosts);

// UPDATE 
router.put("/:id/like",verify_token,likePost);

export default router;