import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props);
    const {name,price,ratings,img,seller,shipping}=props.product;
    return (
        <div className='product'>
             <img src={img} alt="" />
       <div className="product-info">
      
            <p>{name}</p>
            <p>Price:${price}</p>
           <p><small>Manufacturer :{seller}</small>  </p>
           <p><small>Rating :{ratings}</small></p>
           <p><small>Shipping Charge:${shipping}</small></p>

       </div>
             <button onClick={()=>props.handleAddToCart(props.product)} className='button-cart'><p>Add to cart</p>
             <FontAwesomeIcon className='iconic' icon={faShoppingCart}></FontAwesomeIcon></button>
           
        </div>

    );
};

export default Product;