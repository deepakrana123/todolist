import React from 'react'
import { cartState } from '../context/Context'
import Filter from './Filter'
import SingleProduct from "./singleProduct";
import "./style.css"

const Home = () => {
    const {state:{product},productState:{
      byStock,
      byRating,
      byFastDelivery,
      sort,SearchQuery
    }}=cartState()




    const transformProducts = () => {
      let sortedProducts = product;
  
      if (sort) {
        sortedProducts = sortedProducts.sort((a, b) =>
          sort === "lowToHigh" ? a.price - b.price : b.price - a.price
        );
      }
  
      if (!byStock) {
        sortedProducts = sortedProducts.filter((prod) => prod.inStock);
      }
  
      if (byFastDelivery) {
        sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
      }
  
      if (byRating) {
        sortedProducts = sortedProducts.filter(
          (prod) => prod.ratings >= byRating
        );
      }
  
      if (SearchQuery) {
        sortedProducts = sortedProducts.filter((prod) =>
          prod.name.toLowerCase().includes(SearchQuery)
        );
      }
  
      return sortedProducts;
    };
  return (
    <div className="home">
        <Filter/>
        <div className="home-product">
            {transformProducts().map((prod)=>{
                return <SingleProduct prod={prod} key={prod.id}/>
            })}
        </div>
        </div>
  )
}

export default Home