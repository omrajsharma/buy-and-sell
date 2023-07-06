import React from 'react'
import { useParams, Navigate } from 'react-router-dom'

function ProductDetails() {
    const { productId } = useParams()
    const [product, setProduct] = React.useState({})


    React.useEffect(() => {
      
      fetch(`https://buy-and-sell-f5fe8-default-rtdb.asia-southeast1.firebasedatabase.app/item-list/${productId}.json`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProduct(data);
      })

    }, [])


    if (product === null) {
      return <Navigate to="/" />
    }

    const authorContact = 'tel:' + product.authorContact;

  return (
    <>
      {
        product != {} && (
          <div className='product-detail-container'>
            <div className="product-detail-img">
              <img src={product.itemImg} alt="" />
            </div>
            <div className="product-detail-body">
              <h2> {product.itemTitle} </h2>
              <h1>₹ {product.itemPrice}</h1>
              <h3>{product.itemDesc}</h3>
              <div className='product-detail-body-row'>
                <p>{product.itemPlace}</p>
                <p>{product.itemDate}</p>
              </div>
              <div className="product-detail-seller-info">
                <h1>{product.authorName}</h1>
                <a href={authorContact}>Call the seller</a>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default ProductDetails
