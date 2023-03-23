import React, { useState } from 'react';
import './App.css';
import Product from './components/Product';

export interface IProduct {
  id:number;
  title:string;
  price:number
}

function App() {
  const [products,setProducts] = useState<IProduct[]>([
    {
      id:1,
      title:"Iphone",
      price:1500
    },
    {
      id:2,
      title:"Samsung",
      price:1200
    },
    {
      id:3,
      title:"Sony",
      price:1800
    }
  ])
  const handleAddToCart=(id:number)=>{
    console.log("Clicked",id)
  }
  return (<>
  {products.map((product)=>(<Product key={product.id} handleAddtoCart={handleAddToCart} product={product}/>))}
  </>);
}

export default App;
