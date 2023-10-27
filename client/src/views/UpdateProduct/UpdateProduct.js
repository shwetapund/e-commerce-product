import React, { useEffect, useState } from 'react'
import './UpdateProduct.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function UpdateProduct() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [Quality, setQuality] = useState('')
    const [productImage, setProductImage] = useState('')

    const {_id} = useParams();

    const loadProduct = async () =>{
        const response = await axios.get(`/product/${_id}`)

        const {name, description, Quality, price, productImage } = response?.data?.data
        setName(name)
        setDescription(description)
        setQuality(Quality)
        setPrice(price)
        setProductImage(productImage)
    }
   useEffect(()=>{
    loadProduct();
   },[])

    const UpdateProduct = async ()=>{
        const updateDetails =  {name ,description, Quality, price, productImage }

        const response = await axios.put(`/product/${_id}`,updateDetails);
        alert(response?.data?.message)

    }

    return (<>
        <div className='form-container'>
            <form >
                <h1 className='title'>Update Product</h1>
                <input type='text'
                    className='input-box-update'
                    placeholder='enter name'
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }} />
                <br />
                <input type='text'
                    className='input-box-update'
                    placeholder='enter discription'
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }} />
                <br />
                <input type='text'
                    className='input-box-update'
                    placeholder='enter highQuality'
                    value={Quality}
                    onChange={(e) => {
                        setQuality(e.target.value)
                    }} />
                <br />
                <input type='text'
                    className='input-box-update'
                    placeholder='enter price'
                    value={price}
                    onChange={(e) => {
                        setPrice(e.target.value)
                    }} />
                    <br/>
                <input type='text'
                    className='input-box-update'
                    placeholder='enter productImage'
                    value={productImage}
                    onChange={(e) => {
                        setProductImage(e.target.value)
                    }} />

                <button onClick={ UpdateProduct }
                className='button-update'
                    >Update Product</button>
            </form>

        </div>
        <div className='home-link'>
        <a href='/' className='link-Home'>Back To Home Page <span className='arrow'>➡</span></a>
        </div>
        </>
    )
}

export default UpdateProduct

