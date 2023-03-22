import React from 'react';
import './Product.css'
const Product = (props) => {
    const { thumbnail, title, description, price, brand, category, rating } = props.products;
    return (
        <div className='product'>
            <img src={thumbnail} alt="" />
            <div className='product-details'>
                <h3 className='title'>{title}</h3>
                <p className='description'>{description}</p>
                <p className='price'>Price: <span>${price}</span></p>
                <p className='brand'>Brand: {brand}</p>
                <p className='category'>Category: {category}</p>
                <p className='rating'><small>Rating: {rating} stars</small></p>
            </div>
            <button type='button' onClick={() => props.getProductsDetails(props.products)}>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Product;