import React from "react"
import heroImg from "../images/image-product-1.jpg"
import productOne from "../images/image-product-1-thumbnail.jpg"
import productTwo from "../images/image-product-2-thumbnail.jpg"
import productThree from "../images/image-product-3-thumbnail.jpg"
import productFour from "../images/image-product-4-thumbnail.jpg"
import plus from "../images/icon-plus.svg"
import minus from "../images/icon-minus.svg"
import cart from "../images/icon-cart.svg"
import prev from "../images/icon-previous.svg"
import next from "../images/icon-next.svg"

export default function Main() {
    return (
        <div className="main-content">
            <section className="imgContent">
                <img className="hero" src={heroImg} alt="" />
                <img src={prev} alt="" className="previous" />
                <img src={next} alt="" className="nextItem"/>
                <div className="miniImg">
                <img src={productOne} alt="" />
                <img src={productTwo} alt="" />
                <img src={productThree} alt="" />
                <img src={productFour} alt="" />
                </div>
            </section>
            <section className="textContent">
                <p className="textOrange">sneaker company</p>
                <h1>Fall limited edition sneakers</h1>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                <div className="price">
                <div className="priceText">
                    <h2>$125.00</h2>
                    <p className="mini-text">50%</p>
                </div>
                <p className="prevPrice">$250.00</p>
                </div>
                <div className="cart-container">
                    <div className="cartBox">
                    <img src={minus} alt="" />
                    <p className="cartNum">0</p>
                    <img src={plus} alt="" />
                    </div>
                    <button className="btnCart">
                        <img src={cart} alt="" className="cartB"/>
                        Add to cart
                    </button>
                </div>
            </section>
        </div>
    )
}