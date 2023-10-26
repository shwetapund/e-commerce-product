import React, { useEffect, useState } from 'react'
import './UpdateProduct.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function UpdateProduct() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [highQuality, setHighQuality] = useState('')
    const [productImage, setProductImage] = useState('')

    const {id} = useParams();

    const loadProduct = async () =>{
        const response = await axios.get(`/product/${id}`)

        const {name, description, highQuality, price, productImage } = response?.data?.data
        setName(name)
        setDescription(description)
        setHighQuality(highQuality)
        setPrice(price)
        setProductImage(productImage)
    }
   useEffect(()=>{
    loadProduct();
   },[])

    const UpdateProduct = async ()=>{
        const updateDetails =  {name ,description, highQuality, price, productImage }

        const response = await axios.put(`/product/${id}`,updateDetails);
        alert(response?.data?.message)

    }

    return (<>
        <div className='form-container'>
            <form>
                <h1 className='title'>Update Product</h1>
                <input type='text'
                    className='input-box'
                    placeholder='enter name'
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }} />
                <br />
                <input type='text'
                    className='input-box'
                    placeholder='enter discription'
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }} />
                <br />
                <input type='text'
                    className='input-box'
                    placeholder='enter highQuality'
                    value={highQuality}
                    onChange={(e) => {
                        setHighQuality(e.target.value)
                    }} />
                <br />
                <input type='text'
                    className='input-box'
                    placeholder='enter price'
                    value={price}
                    onChange={(e) => {
                        setPrice(e.target.value)
                    }} />
                    <br/>
                <input type='text'
                    className='input-box'
                    placeholder='enter productImage'
                    value={productImage}
                    onChange={(e) => {
                        setProductImage(e.target.value)
                    }} />

                <button onClick={ UpdateProduct }
                    >Update Product</button>
            </form>

        </div>
        <div>
        <a href='/' className='link-Home'>Back To Home Page</a>
        </div>
        </>
    )
}

export default UpdateProduct

