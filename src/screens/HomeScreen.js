import React from 'react'
import { Link } from 'react-router-dom';
import data from '../data';

export default function HomeScreen() {
    return (
        <div>
            <main className="main  ">
        <div className="content ">
      
         <ul className="products row ">
           {
             data.products.map(product =>
              <li>      
                         <div className="product">
                  
                  
                           <img className="product-image" src={product.image} ></img>
                           <div className="product-name">
                             <Link to={"/product/"+product._id}>{product.name}</Link>
                             </div>
                             <div className="product-brand">{product.brand}</div>
                             <div className="product-price">${product.price}</div>
                             <div className="product-rating">{product.rating} Stars {(product.numReviews)}</div>
                         </div>
              </li>
              
              )
           }

         </ul>
        </div>
      </main>
        </div>
    )
}
