import React, { useContext, useEffect, useState } from "react";
import API from "../../utils/API";
import AuthContext from "../../utils/AuthContext";
import ProductBlock from "../ProductBlock";


function ProductList() {

  const [products, setProducts] = useState({
    items: []
  })

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
    const addProducts = async () => {
      const result = API.getProductsByFarmer

      setProducts({...products, items: result.data})
      console.log(products.items)
    }

    addProducts;

    // API.getProductsByFarmer(context.token)
    //   .then((res) => {
    //     // for (let i = 0; i < res.data.length; i++) {
    //     //   products.push(res.data[i])
    //     // }
    //     // products.push(res.data)
    //     res.data.forEach(element => products.push(JSON.stringify(element)))
    //   console.log(res.data)
    //   console.log( 'products: ' + products)
    //   })
  })

  return (
    <div>
      {products.items.map(product => (
        // <ProductBlock />
        <ProductBlock title={product.title} quantity={product.quantity} packsize={product.packsize} price={product.price} farmerId={product.farmerId} />
        
      ))}
    </div>

  )
}

export default ProductList;