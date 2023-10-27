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
  const deletePro = async (_id) => {
    const response = await axios.delete(`/product/${_id}`);
    alert(response?.data?.message)
    loadProducts();
  }

  // setProduct(response?.data?.data)


  return (
    <>
      <div className='title'>
        <h1>Patanjali Product</h1>
       
      </div>

      <div className='container-product'>
        {
          product.map((productInfo, index) => {
            const { _id, name, Quality, price, productImage } = productInfo;

            return <div key={index}
              className='product-card ' >


              <div>
                <img src={productImage} className='img-product' />
              </div>

              <div className='text'>
                <h3>Name: {name}</h3>
                {/* <p><b>discription: </b> {description}</p> */}
                <p className='height'><b>Quality:</b>{Quality}</p>
                <p className='height'><b>price:</b> {price}</p>

                <div className='button-container'>
                  
                 <button className='button-view-more'>
                 <a href={`/product-detail/${_id}`} target='_blank' className='btn-view-More'>Learn more</a>
                 </button>
                  <button className='btn-delete-product'
                    onClick={() => { deletePro(_id) }}
                  >delete</button>

                  <button className='button-edit'>
                  <a href={`/update-product/${_id}`}
                    target='_blank'
                    className='btn-edit-product'>Edit</a>
                  </button>
           
                </div>
              </div>
              
            </div>

          })

        }
      </div>
      <a href='/add-product' className='link-page '>Add Product</a>
    </>
  )
}

export default Home
