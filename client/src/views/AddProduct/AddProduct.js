import React, { useState } from 'react'
import './AddProduct.css'
import axios from 'axios'

function Form() {
    const [name, setName] = useState('')
    const [discription, setDiscription] = useState('')
    const [price, setPrice] = useState('')
    const [Quality, setQuality] = useState('')
    const [productImage, setProductImage] = useState('')

    const submitData = async ()=>{
        if(!name || !discription || !price || !Quality || !productImage){
            alert('please enter all fields')
            return
        }
  const dataproduct = {
        name:name,
        description:discription,
        price:price,
        productImage:productImage,
        Quality:Quality,
   
  }
    const response = await axios.post('/product',dataproduct);

  alert(response.data.message)

  setName('')
  setDiscription('')
  setQuality('')
  setPrice('')
  setProductImage('')

    }

    return (<>
        <div className='form-container-addproduct'>
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
                    value={Quality}
                    onChange={(e) => {
                        setQuality(e.target.value)
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
                className='button-add'
                >Submit</button>
            </form>

        </div>
        <div className='link-Home'>
        <a href='/' >Back To Home Page ➡</a>
        </div>
        </>
    )
}

export default Form

