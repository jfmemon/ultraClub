import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import image from '../../images/profilePicture.jpg';
import './Cart.css';
const Cart = ({ cart }) => {
    let price = 0;
    for (const product of cart) {
        price = price + product.price;
    }

    function getBreakValue10() {
        const breakValueString = document.getElementById('breakTimeValue10');
        const breakValueInt = parseInt(breakValueString.innerText);
        const showBreakTime = document.getElementById('showBreakTime');
        showBreakTime.innerText = breakValueInt;
        // console.log(breakValueInt);
    }
    function getBreakValue20() {
        const breakValueString = document.getElementById('breakTimeValue20');
        const breakValueInt = parseInt(breakValueString.innerText);
        const showBreakTime = document.getElementById('showBreakTime');
        showBreakTime.innerText = breakValueInt;
    }
    function getBreakValue30() {
        const breakValueString = document.getElementById('breakTimeValue30');
        const breakValueInt = parseInt(breakValueString.innerText);
        const showBreakTime = document.getElementById('showBreakTime');
        showBreakTime.innerText = breakValueInt;
    }
    function getBreakValue40() {
        const breakValueString = document.getElementById('breakTimeValue40');
        const breakValueInt = parseInt(breakValueString.innerText);
        const showBreakTime = document.getElementById('showBreakTime');
        showBreakTime.innerText = breakValueInt;
    }
    function getBreakValue50() {
        const breakValueString = document.getElementById('breakTimeValue50');
        const breakValueInt = parseInt(breakValueString.innerText);
        const showBreakTime = document.getElementById('showBreakTime');
        showBreakTime.innerText = breakValueInt;
    }

    return (
        <div className='cart'>
            <div className='profile'>
                <img src={image} alt="" />
                <div className='profile-details'>
                    <h3>Zahid Hossain</h3>
                    <p><small><FontAwesomeIcon icon={faLocationDot} /> Sedney, Australia</small></p>
                </div>
            </div>
            <div className='measurement'>
                <div className="weight">
                    <h3>75 <sub>kg</sub></h3>
                    <p>Weight</p>
                </div>
                <div className="height">
                    <h3>6.5 <sub>ft</sub></h3>
                    <p>Height</p>
                </div>
                <div className="age">
                    <h3>25 <sub>yrs</sub></h3>
                    <p>Age</p>
                </div>
            </div>
            <div className='break'>
                <h3>Add A Break</h3>
                <div className='addBreak'>
                    <button onClick={getBreakValue10}>
                        <p id='breakTimeValue10'>10</p>
                    </button>
                    <button onClick={getBreakValue20}>
                        <p id='breakTimeValue20'>20</p>
                    </button>
                    <button onClick={getBreakValue30}>
                        <p id='breakTimeValue30'>30</p>
                    </button>
                    <button onClick={getBreakValue40}>
                        <p id='breakTimeValue40'>40</p>
                    </button>
                    <button onClick={getBreakValue50}>
                        <p id='breakTimeValue50'>50</p>
                    </button>
                </div>
            </div>
            <div className='calculation'>
                <h3>Calculation Details</h3>
                <div className='calculation-details'>
                    <div className="totalPrice">
                        <p>Total price: </p>
                        <p style={{ color: 'gray' }}><span>$ </span>{price}</p>
                    </div>
                    <div className="showBreakTime">
                        <p>Break time<span>(seconds)</span>: </p>
                        <p id='showBreakTime' style={{ color: 'gray' }}></p>
                    </div>
                </div>
                <button>
                    <p>Activity Completed</p>
                </button>
            </div>
        </div>
    );
};

export default Cart;