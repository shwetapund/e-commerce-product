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
      <a href='/add-product' className='link-page '>Add Product ✍</a>
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

                <div className='edit-delete-container'>
                  <span className='btn-delete-product'
                    onClick={() => { deletePro(_id) }}
                  >❌</span>

                  <a href={`/update-product/${_id}`}
                    target='_blank'
                    className='btn-edit-product'>✍</a>
                </div>

                <div className='container-product'>
                  <button className='button-view-more'>
                    <a href={`/product-detail/${_id}`} target='_blank' className='btn-view-More'>View more</a>
                  </button>
                  <button className='button-Buy-now'>
                    Buy Now
                  </button>

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
