import React, {useState} from 'react'
import Rating from './Rating';
import {addToCart} from './CartSlice'
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router'
import data from '../data';
import {useDispatch} from 'react-redux'


export default function ProductScreen() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    let {id } = useParams();
    // let product=data.products.filter((product) =>{
    //     return  product.name===id;
    // });
if(!data.products[id]){
    return <div> product not found </div>
}

    return (
        <div>
            <Link to="/">Back to result </Link>
        <div className="row center ">
            <div className="col-2">
                
                <img className="large" src={data.products[id].image} alt={data.products[id].name}></img>


            </div>
<div className="col-1">
<ul>
    <li>
        <h1>{data.products[id].name}</h1>
    </li>
    <li>
       <Rating rating={data.products[id].Rating} numReviews={data.products[id].numReviews}></Rating>
    {/* <div className="price">${data.products[id].price} </div> */}
    </li>
    <li>price:${data.products[id].price}</li>
    <li>
       description:  
       <p>{data.products[id].description}</p>

    </li>
</ul>
</div>
<div className="col-1">
    <div className="card card-body">
        <ul>
            <li>
            <div className="row">
                 <div>price</div>
                 <div className="price">${data.products[id].price}</div>
              
            </div>
            
            </li>
            <li>
               <div className="row">
                   <div>status  </div>
                   <div>
                        {data.products[id].countInStock>0? <span className="success"> in stock</span>:
                        <span className="error">unavail</span>
                        }

                   </div>
               </div>

            </li>
            <li>
                <button className="primary block"  onClick={()=>{
                    navigate("/cart")
                    dispatch(addToCart(data.products[id]));
                }}>Add to Cart</button>

            </li>
            </ul>
    </div>
</div>
            </div>

        </div>
    )
}
