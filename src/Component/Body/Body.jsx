import React, { useState } from 'react';
import './Body';
import CartImg from '../../images/icon-cart.svg';
import Minus from '../../images/icon-minus.svg';
import Plus from '../../images/icon-plus.svg';
import ProductImage from '../ProductImage/ProductImage';
import LightBox from '../LightBox/LightBox';

function Body({ cartQuantity, setCartQuantity, height }) {
  const [quantity, setQuantity] = useState(0);
  const [modal, setModal] = useState(false);

  const handleModalVisibilityChange = () => {
    setModal(!modal);
  };

  const handlePlusClick = () => setQuantity(q => q + 1);

  const handleMinusClick = () => quantity > 0 && setQuantity(q => q - 1);

  const handleAddToCart = () => {
    setCartQuantity(cartQuantity + quantity);
    setQuantity(0);
  };

  return (
    <main>
      <div className="body_container">
        <div className="hero_image_container">
          <ProductImage
            handleModalVisibilityChange={handleModalVisibilityChange}
          />
        </div>
        <div className="writeups">
          <p className="sneaker_heading">SNEAKER COMPANY</p>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <h3>
            $125.00 <span>50%</span>
          </h3>
          <del>$250.00</del>
          <div className="quantity_addToCart">
            <div className="quantity_img_container">
              <span className="minus" onClick={handleMinusClick}>
                {' '}
                <img src={Minus} alt="minus" />{' '}
              </span>
              <span className="quantity">{quantity}</span>
              <span className="plus" onClick={handlePlusClick}>
                {' '}
                <img src={Plus} alt="plus" />{' '}
              </span>
            </div>
            <div className="addToCart" onClick={handleAddToCart}>
              <img className="addCart_img" src={CartImg} alt="cart" />
              <h4 className="addToCart_btn">Add to cart</h4>
            </div>
          </div>
        </div>
      </div>
      <LightBox modal={modal} height={height} setModal={setModal} />
    </main>
  );
}

export default Body;
