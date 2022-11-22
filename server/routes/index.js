import express from "express"
import auth from "../middleware/auth.js"
const router = express.Router()

import { createPosts,getPost} from "../controllers/posts.js"

router.get('/get-order/:id',auth,getPost)
router.post('/add-order',auth,createPosts)
export default router