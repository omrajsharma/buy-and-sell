import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  const [products, setProducts] = React.useState([]);

  console.log(products);

  React.useEffect(() => {
    fetch('https://buy-and-sell-f5fe8-default-rtdb.asia-southeast1.firebasedatabase.app/item-list.json')
    .then(response => response.json())
    .then(data => {
      let productList = [];
  
      for (let dataItem in data) {
        productList.push({...data[dataItem], productId: dataItem})
      }
      setProducts(productList)
    })
  }, [])

  return (
    <div className='product-list-container'>
      { 
        products.length > 0 && 
        products.map(product => 
          <ProductCard {...product} />
          // <ProductCard authorContact={product.authorContact} authorName={product.authorName} />
        )
      }
    </div>
  )
}

function ProductCard({authorContact, authorName, itemDate, itemDesc, itemImg, itemPrice, itemTitle, productId}) {
  console.log(authorContact)
  return (
    <Link to={'/productdetails/' + productId}>
      <div className='product-card'>
        <div className="product-img">
          <img src={itemImg} alt="" />
        </div>
        <div className="product-body">
          <h2>₹ {itemPrice}</h2>
          <h4>{itemTitle}</h4>
          <p>{itemDate}</p>
        </div>
      </div>
    </Link>
  )
}

export default Home
