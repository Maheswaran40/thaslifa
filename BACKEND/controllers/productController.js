const productModel = require("../models/productModel")

  
const addProduct = async (req, res) => {
    try{
        const productData = productModel({
                productName :req.body.productName,
                productDescription : req.body.productDescription,
                productPrice : req.body.productPrice,
                productCategory : req.body.productCategory,
                productImg : req.body.productImg
        })
            await productData.save()
            res.status(200).send('Product Added Successfully....')
    }
    catch(err){
            console.log(`error name : ${err.name},error message : ${err.message}`)
        }

}

const getProduct = async (req,res) => {
    try{
            const productList = await productModel.find()
            res.status(200).send(productList)
    }
    catch(err){
            console.log(`error name : ${err.name},error message : ${err.message}`)
        }
}


const deleteProduct =async (req,res) => {
        try{
        await productModel.findByIdAndDelete(req.params.id)
        res.status(200).send('deleted successfully....')
        }
        catch(err){
        console.log(`error name : ${err.name},error message : ${err.message}`)
        }
}

const upadateProduct  = async (req,res) => {
        try{
        const productUpdateData = await productModel.findByIdAndUpdate(req.params.id,req.body,{new : true})
        }
        catch(err){
        console.log(`error name : ${err.name},error message : ${err.message}`)
        }
}

module.exports = { addProduct, getProduct, deleteProduct, upadateProduct }

