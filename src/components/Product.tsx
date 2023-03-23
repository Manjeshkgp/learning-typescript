import React from 'react'
import { IProduct } from '../App'

interface ProductProps {
    product:IProduct
    handleAddtoCart(id:number):void
}

const Product = ({product,handleAddtoCart}:ProductProps) => {
  return (<>
    <div>{product.title}</div>
    <div>{product.price}</div>
    <div onClick={()=>{handleAddtoCart(product.id)}}>Add to Cart</div>
  </>)
}

export default Product