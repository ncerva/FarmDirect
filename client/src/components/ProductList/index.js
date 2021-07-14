import React, { useContext, useEffect, useState } from "react";
import API from "../../utils/API";
import AuthContext from "../../utils/AuthContext";
import ProductBlock from "../ProductBlock";


function ProductList() {

  const [products, setProducts] = useState({
    items: []
  })

  const [rendering, setRendering] = useState(false)

  const context = useContext(AuthContext)
  // const addProducts = () => {
  //   API.getProductsByFarmer(context.token)
  //   .then((res) => {
  //     res.data.forEach(element => products.push(JSON.stringify(element)))
  //     console.log(res.data)
  //     console.log('products' + products)
  //   })
  // }

  useEffect(() => {
    API.getProductsByFarmer(context.token)
    .then((res) => {
      console.log('response' + res)
      setProducts({...products, items: res.data})
      console.log(products.items) 
    })
  }, [rendering]);

  const handleDelete = (id) => {
    const newProducts = products.items.filter(product => product._id !== id);
    setProducts({ items: newProducts });
  }

  const handleUpdate = () => {
    API.getProductsByFarmer(context.token)
    .then((res) => {
      setProducts({...products, items: res.data})
    })
  }
  


  return (
    <div>
      {products.items.map(product => (
        // <ProductBlock />
        <ProductBlock onUpdate={handleUpdate} onDelete={handleDelete} title={product.title} quantity={product.quantity} packsize={product.packsize} price={product.price} productId={product._id} key={product._id} farmerId={product.farmerId} />
        
      ))}
    </div>

  )
}

export default ProductList;