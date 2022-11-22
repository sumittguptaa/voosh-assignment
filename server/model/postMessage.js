import mongoose from "mongoose"

const orderSchema = mongoose.Schema({
    user_id : String,
    subTotal : Number,
    phoneNumber : Number,
    

})

const Orders  = mongoose.model('Orders',orderSchema)
export default Orders