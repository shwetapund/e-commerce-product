import React, { useState } from 'react'
import './Form.css'
import axios from 'axios'
function Form() {
    const [name, setName] = useState('')
    const [discription, setDiscription] = useState('')
    const [price, setPrice] = useState('')
    const [highQuality, setHighQuality] = useState('')
    const [productImage, setProductImage] = useState('')

    const submitData = async ()=>{
  const dataproduct = {
    name,
    discription,
    price,
    highQuality,
    productImage
  }
    await axios.post('/product',dataproduct)
    }

    return (
        <div className='form-container'>
            <form>
                <h1 className='title'>Simple form</h1>
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
                    value={discription}
                    onChange={(e) => {
                        setDiscription(e.target.value)
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

                <button onClick={submitData}
                >Submit</button>
            </form>
        </div>
    )
}

export default Form
