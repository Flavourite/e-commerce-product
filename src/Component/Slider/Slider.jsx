import React, { useState, useEffect } from 'react';

import ProductImage0 from '../../images/image-product-1.jpg';
import ProductImage1 from '../../images/image-product-2.jpg';
import ProductImage2 from '../../images/image-product-3.jpg';
import ProductImage3 from '../../images/image-product-4.jpg';
import Thumbnail0 from '../../images/image-product-1-thumbnail.jpg';
import Thumbnail1 from '../../images/image-product-2-thumbnail.jpg';
import Thumbnail2 from '../../images/image-product-3-thumbnail.jpg';
import Thumbnail3 from '../../images/image-product-4-thumbnail.jpg';

function Slider({ next, setNext, prev, setPrev }) {
  const thumbnail = [Thumbnail0, Thumbnail1, Thumbnail2, Thumbnail3];
  const productImg = [
    ProductImage0,
    ProductImage1,
    ProductImage2,
    ProductImage3,
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (next >= productImg.length) {
      setNext(0);
      setIndex(0);
    } else if (next !== null) {
      setIndex(next);
    }
  }, [next, productImg.length, setNext]);

  useEffect(() => {
    if (prev < 0) {
      setPrev(productImg.length - 1);
      setIndex(productImg.length - 1);
    } else if (prev !== null) {
      setIndex(prev);
    }
  }, [prev, productImg.length, setPrev]);

  const handleThumbnailClick = i => {
    setNext(i);
  };

  return (
    <>
      <div className="product_image_container">
        <img
          className="product_image"
          src={productImg[index]}
          alt="Product-Image"
        />
      </div>
      <div className="thumbnail_container">
        {thumbnail.map((el, i) => (
          <ThumbnailImage
            key={i}
            clickHandler={() => handleThumbnailClick(i)}
            thumbnail={el}
            currentImage={i === index}
          />
        ))}
      </div>
    </>
  );
}

function ThumbnailImage({ thumbnail, clickHandler, currentImage }) {
  const borderStyle = currentImage
    ? '3px solid hsl(26, 100%, 55%)'
    : '3px solid transparent';
  return (
    <div
      style={{ border: borderStyle }}
      className="thumbnail_image_container"
      onClick={clickHandler}
    >
      <img className="thumbnail_image" src={thumbnail} alt="thumbnail-image" />
    </div>
  );
}

export default Slider;
