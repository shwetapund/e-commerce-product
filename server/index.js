import express, { json } from "express";
import dotenv from 'dotenv';
dotenv.config();
import mongoose, {Schema,model} from "mongoose";

const app = express();
app.use(express.json());

const PORT = 5000;

const connectMongoDB = async () =>{
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    if(conn){
        console.log("MongoDB connected successfully");
    }
}
connectMongoDB();

const productSchema = new Schema ({
    name:String,
    description:String,
    productImage:String,
    price:String,
    Quality:String,
});


//model
const Product = model('Product',productSchema);

app.get('/products',async(req,res)=>{

    const products = await Product.find();
   res.json({
        success : true,
        data: products,
        message:'successfully fetch all products'
    })
});

app.post('/product',async (req,res)=>{
    const {name, description, price, productImage,Quality} = req.body;

    const newProduct = new Product({
        name:name,
        description:description,
        price:price,
        productImage:productImage,
        Quality:Quality,
    })
    const savedProduct = await newProduct.save();

    res.json({
        success:true,
        data: savedProduct,
        message:'successfully added new products'
    })
})

app.get('/product/:_id',async (req,res)=>{
    const { _id } = req.params;

    const product = await Product.findById(_id);
    res.json({
        success:true,
        data:product,
        message:"successfully fetch products",
    })
})
//delete operation
app.delete('/product/:id',async(req,res)=>{
    const {id} = req.params;

    await Product.deleteOne({_id:id})

    res.json({
        success:true,
        data:{},
        message:`Successfully deleted product with id ${id}`,
    })

});
//put operation : 
app.put('/product/:_id', async(req,res)=>{
    const {_id} = req.params;

    const {name, description, price, productImage, Quality} = req.body;

    if(!name){
        res.json({
            success:false,
            message:"name is required"
        })
    }
    if(!description){
        res.json({
            success:false,
            message:"description is required"
        })
    }
    if(!price){
        res.json({
            success:false,
            message:"price is required"
        })
    }
    if(!productImage){
        res.json({
            success:false,
            message:"productImage is required"
        })
    }
    if(!Quality){
        res.json({
            success:false,
            message:"Quality is required"
        })
    }

    await Product.updateOne({_id:_id},{$set: {
        name:name,
        description:description,
        Quality:Quality,
        productImage:productImage,
        price:price
    } })

    const findUpdate = await Product.findOne({_id:_id})

    res.json({
        success:true,
        data:findUpdate,
        message:`Successfully update product with id ${_id}`
    })

})
//patch
app.patch('/product/:_id',async(req,res)=>{
    const {_id} = req.params;

    const {name,description,price,productImage,Quality} = req.body;

    const findPrduct = await Product.findById(_id)

    if(name)
    {
        findPrduct.name = name;
    }
    if(description)
    {
        findPrduct.description = description;
    }
    if(price)
    {
        findPrduct.price = price;
    }
    if(Quality)
    {
        findPrduct.Quality = Quality;
    } 
    if(productImage)
    {
        findPrduct.productImage = productImage;
    }

    const updateData = await findPrduct.save();

    res.json({
        success:true,
        data:updateData,
        message:`Successfully updated specific data in ${_id}`
 })

})

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})


