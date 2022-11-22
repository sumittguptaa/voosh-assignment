import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../model/userModal.js"

export const signin = async (req, res) => {
    const {phoneNumber,password} = req.body
    try {
  
        const existingUser = await User.findOne({phoneNumber})
        if(!existingUser) return res.status(404).json({message : "User does not exist"})
        const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password)
        if(!isPasswordCorrect) res.status(400).json({message : "Invalid credentials"})
        const token = jwt.sign({phoneNumber : existingUser.phoneNumber,id: existingUser._id},"test" ,{expiresIn: "1h"})
        const result = existingUser
        res.status(200).json({result,token})
    } catch (error) {
        res.status(404).json(error)
    }

}
export const signup = async (req, res) => {
    const {name,phoneNumber,password} = req.body
   
    try {
       const existingUser = await User.findOne({phoneNumber})
       if(existingUser) return res.status(400).json({message : "User already exists"})
        const hashedPassword = bcrypt.hashSync(password,12)
        const result = await User.create({phoneNumber, password : hashedPassword,name : name})
        const token = jwt.sign({ phoneNumber: result.phoneNumber , id: result._id }, "test", { expiresIn: "1h" })
        res.status(200).json({ result, token })
    } catch (error) {
        res.status(404).json(error)
    }

}