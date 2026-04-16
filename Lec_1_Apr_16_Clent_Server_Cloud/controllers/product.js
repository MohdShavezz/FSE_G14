import { Product } from "../models/product.js"

export const fetchProduct = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json({ success: true, data: products }) // to client
    } catch (error) {
        console.log('error in fetchPrduct', error.message)
    }
}
export const addProduct = async (req, res) => {
    try {
        const {name,price}=req.body
        if(!req.file){
            console.log('no file.')
        }
        const {path,filename}=req.file
        // console.log(name,price)
        const product = await Product.insertOne({
            name,
            price,
            images:{
                url:path,
                public_id:filename
            }
        })
        res.status(201).json({ success: true, message:'product created', data: product }) // to client
    } catch (error) {
        console.log('error in fetchPrduct', error.message)
    }
}