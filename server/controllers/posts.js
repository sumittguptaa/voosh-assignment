
import mongoose from "mongoose"
import Orders from "../model/postMessage.js"

export const getPost =  async(req,res) => {
    const {id} = req.params
    try {
        const post = await Orders.find({user_id :id})
        res.status(200).json({ data: post})
    } catch (error) {
    res.status(404).json(error)   
    }

}

export const createPosts = async(req, res) => {
    const post = req.body
    const newPost = new Orders({ ...post });
    try {
        await newPost.save()
       res.status(202).json(newPost)
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
}

