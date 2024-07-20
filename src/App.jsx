import Nav from './Component/Nav/Nav.jsx';
import Body from './Component/Body/Body.jsx';
// import LightBox from './Component/LightBox/LightBox.jsx';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [cartQuantity, setCartQuantity] = useState(0);
  const elementHeight = useRef(null);
  const [height, setHeight] = useState(null);

  useEffect(() => {
    if (elementHeight.current) {
      const computedStyle = window.getComputedStyle(elementHeight.current);
      setHeight(parseInt(computedStyle.height, 10));
    }
  }, []);
  return (
    <div ref={elementHeight} className="container">
      <Nav cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />
      <Body
        height={height}
        cartQuantity={cartQuantity}
        setCartQuantity={setCartQuantity}
      />
    </div>
  );
}

export default App;
