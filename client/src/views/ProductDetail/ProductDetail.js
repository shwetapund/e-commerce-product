import React, { useEffect, useState } from 'react'
import './ProductDetail.css'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function ProductDetail() {
const [product, setProduct] = useState({})

const loadProduct = async ()=>{
  const response = await axios.get(`/product/${_id}`)
  setProduct(response?.data?.data)
}
  const {_id} = useParams();

  useEffect(()=>{
    loadProduct()
  }, [] )

  return (
    <div>
      <h1 className='text-center'> Product Details </h1>
      <h2 className='text-center'>Product ID: {_id}</h2>
      <div className='product-detail'>
        <p>Name: {product?.name}</p>
        <p>description: {product?.description}</p>
        <p>highQuality: {product?.highQuality}</p>
        <p>price: {product?.price}</p>
        <img src={product?.productImage} className='img-product' />
      </div>

    </div>
  )
}

export default ProductDetail 

