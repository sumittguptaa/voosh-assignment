import express from "express"
import { signin, signup } from "../controllers/user.js"
const router = express.Router()
router.post('/login-user',signin)
router.post('/add-user', signup)
export default router