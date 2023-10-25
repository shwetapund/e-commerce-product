import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Home.css'

function Home() {

  const [product, setProduct] = useState([])

  const loadProducts = async () => {
    const response = await axios.get('/products')
    setProduct(response?.data?.data)
  }

  useEffect(() => {
    loadProducts();
  }, [])

  //delete operation
  const deletePro = async (_id) =>{
    const response = await axios.delete(`/product/${_id}`);
    alert(response?.data?.message)
      loadProducts();
    }

    // setProduct(response?.data?.data)

 



  return (
    <>
      <div  className='title'>
        <h1>E-commerce Product</h1>
        <a href='/form' className='link-page '>Add Student</a>
      </div>

      <div>
        {
          product.map((productInfo, index) => {
            const {_id, name, description, highQuality, price, productImage } = productInfo;

            return <div key={index}
            className='product-card' 
            // onClick={()=>{
            //   window.open(`/product-detail/${_id}`,'_blank')
            // }}
            >

              <div className='container-product'>
                <div>
                  <img src={productImage} className='img-product' />
                </div>

                <div>
                  <h3>Name: {name}</h3>
                  <p>description: {description}</p>
                  <p><b>highQuality:</b>{highQuality}</p>
                  <p><b>price:</b> {price}</p>
                  <a href={`/product-detail/${_id}`} target='_blank'>Learn more</a>

                  <button className='btn-delete-product'
                    onClick={()=>{deletePro(_id)}}
                  >delete</button>
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
