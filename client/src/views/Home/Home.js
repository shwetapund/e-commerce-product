import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Home.css'

function Home() {

  const [product, setProduct] = useState([])
  const loadProduct = async () => {
    const response = await axios.get('/products')
    setProduct(response?.data?.data)
    // setProduct(response?.data?.data)
  } 
  useEffect(() => {
    loadProduct()
  }, [])



  return (
    <>
      <div>
        <h1 className='title'>E-commerce Product</h1>
      </div>

      <div>
        {
          product.map((productInfo) => {
            const { name, description, highQualtiy, price, productImage } = productInfo;

            return <div className='product-card'>

              <div className='container-product'>
                <div>
                  <img src={productImage} className='img-product' />
                </div>

                <div>
                  <h3>Name: {name}</h3>
                  <p>description: {description}</p>
                  <p><b>highQuality:</b> {highQualtiy}</p>
                  <p><b>price:</b> {price}</p>
                </div>

              </div>
            </div>
          })

        }
      </div>
    </>
  )
}

export default Home
