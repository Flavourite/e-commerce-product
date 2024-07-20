import React, { useState } from 'react';
import './LightBox';
import Slider from '../Slider/Slider';
import Close from '../../images/icon-close.svg';
import Next from '../../images/icon-next.svg';
import Prev from '../../images/icon-previous.svg';

function LightBox({ height, modal, setModal }) {
  const [next, setNext] = useState(0);
  const [prev, setPrev] = useState(0);

  const handleNextBtn = () => {
    setNext(prevIndex => (prevIndex === null ? 1 : prevIndex + 1));
    setPrev(null);
  };

  const handlePrevBtn = () => {
    setPrev(prevIndex => (prevIndex === null ? -1 : prevIndex - 1));
    setNext(null);
  };

  const handleModalVisibilityChange = e => {
    e.preventDefault();
    e.stopPropagation();
    setModal(modal => !modal);
  };

  return (
    <>
      {modal && (
        <div className="lightBox_container" style={{ height: `${height}px` }}>
          <div className="light_box">
            <div className="close_container">
              <img
                onClick={handleModalVisibilityChange}
                className="close btn"
                src={Close}
                alt="close_img"
              />
            </div>
            <img
              onClick={handleNextBtn}
              className="next_btn btn"
              src={Next}
              alt="next-img"
            />
            <img
              onClick={handlePrevBtn}
              className="prev_btn btn"
              src={Prev}
              alt="prev-img"
            />
            <Slider
              next={next}
              setNext={setNext}
              prev={prev}
              setPrev={setPrev}
            />
          </div>
        </div>
      )}
    </>
  );
}
export default LightBox;
