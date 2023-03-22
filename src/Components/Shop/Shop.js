import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);

    const getProductsDetails = (products) => {
        const newCart = [...cart, products];
        setCart(newCart);
    }

    return (
        <div className='main-container'>
            <div className='product-container'>
                <h1 className='heading'><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faCoffee} />ULTRA-ACTIVE-CLUB</h1>
                <h3 className='second-heading'>Select today's products</h3>
                <div className="products">
                    {
                        products.map(product => <Product
                            key={product.id}
                            products={product}
                            cart={cart}
                            getProductsDetails={getProductsDetails}
                        ></Product>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;