import React, { useState } from 'react';
import './Nav';
import Cart from '../../images/icon-cart.svg';
import Logo from '../../images/logo.svg';
import Menu from '../../images/icon-menu.svg';
import Close from '../../images/icon-close.svg';
import Avatar from '../../images/image-avatar.png';
import Thumbnail0 from '../../images/image-product-1-thumbnail.jpg';

function Nav({ cartQuantity }) {
  const [see, setSee] = useState(false);
  const handleSee = () => setSee(!see);
  return (
    <nav>
      <div className="nav_container">
        <div className="logo_menu">
          <img className="menu_bar" src={Menu} alt="menu_bar" />
          <div className="logo_container">
            <img className="logo" src={Logo} alt="Logo" />
          </div>
          <ul className="menu_container">
            <img className="close" src={Close} alt="close" />
            <MenuLink text="Collections" />
            <MenuLink text="Men" />
            <MenuLink text="Women" />
            <MenuLink text="About" />
            <MenuLink text="Content" />
          </ul>
        </div>
        <div className="cart_avatar">
          <div className="quantity_container">
            <div className="cart_container" onClick={handleSee}>
              <img className="cart" src={Cart} alt="cart" />
              {cartQuantity > 0 && (
                <span className="cart_quantity">{cartQuantity}</span>
              )}
            </div>
            <div className={`quantity ${see ? 'active' : 'hidden'}`}>
              <p className="cart_text">Cart</p>
              <div className="cart_info_container">
                <div className="cart_info">
                  <h4 className={`${!cartQuantity ? 'active' : 'hidden'}`}>
                    Your cart is empty
                  </h4>
                  <div className="info">
                    <div className={`${!cartQuantity && 'hidden'}`}>
                      <div className="info_content">
                        <img src={Thumbnail0} alt="img" />
                        <span className="product_name">
                          Fall Limited Edition Sneakers $125.00 x {cartQuantity}{' '}
                          <span className="total_price">
                            ${125 * cartQuantity}.00
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className={`checkout ${!cartQuantity && 'hidden'}`}>
                      Checkout
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="avatar_container">
            <img className="avatar" src={Avatar} alt="avarar" />
          </div>
        </div>
      </div>
    </nav>
  );
}

function MenuLink({ text }) {
  return (
    <li className="menu_item">
      <a href="*">{text}</a>
    </li>
  );
}

export default Nav;
