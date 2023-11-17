import { useState } from "react";
import Cart from "./Components/Cart";
import Products from "./Components/Products";
import "./CSS/App.css"


function App() {

  const [ products, setProducts ] = useState( [
    {id: 1, name: "Product-1", price:100, number: 0},
    {id: 2, name: "Product-2", price:200, number: 0},
    {id: 3, name: "Product-3", price:300, number: 0},
    ])

    function incrementProductCount(id){
      setProducts((prev) => {
        const newProduects = [...prev]

        newProduects.forEach(newProduct => {
          if(newProduct.id === id){
            newProduct.number++
          }
        });

        return newProduects
      })
    }

    function decrementProductCount(id){
      setProducts((prev) => {
        const newProduects = [...prev]

        newProduects.forEach(newProduct => {
          if(newProduct.id === id && newProduct.number >= 1){
            newProduct.number--
          }
        });

        return newProduects
      })
    }

  return (
    <div className="app-container">
      <Products products = {products} incrementProductCount = {incrementProductCount} decrementProductCount = {decrementProductCount} />
      <Cart products = {products} />
    </div>
  );
}

export default App;
