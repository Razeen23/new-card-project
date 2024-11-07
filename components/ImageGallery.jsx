// import React, { useState, useEffect, useRef } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import img1 from '../Assets/products/Rectangle1.png';
// import img2 from '../Assets/products/Rectangle2.png';
// import img3 from '../Assets/products/Rectangle3.png';
// import img4 from '../Assets/products/Rectangle4.png';
// import img5 from '../Assets/products/Rectangle5.png';
// import img6 from '../Assets/products/Rectangle6.png';
// import img7 from '../Assets/products/Rectangle7.png';
// import img8 from '../Assets/products/Rectangle8.png';

// const initialImages = [
//   img1,
//   img2,
//   img3,
//   img4,
//   img5,
//   img6,
//   img7,
//   img8,
// ];



import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

const InfiniteLooper = ({ speed, direction, children }) => {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  function resetAnimation() {
    if (innerRef?.current) {
      innerRef.current.setAttribute('data-animate', 'false');

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute('data-animate', 'true');
        }
      }, 10);
    }
  }

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width } = innerRef.current.getBoundingClientRect();
    const { width: parentWidth } = outerRef.current.getBoundingClientRect();
    const widthDeficit = parentWidth - width;
    const instanceWidth = width / innerRef.current.children.length;

    if (widthDeficit) {
      setLooperInstances(
        looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1
      );
    }

    resetAnimation();
  }, [looperInstances]);

  useEffect(() => setupInstances(), [setupInstances]);

  useEffect(() => {
    window.addEventListener('resize', setupInstances);

    return () => {
      window.removeEventListener('resize', setupInstances);
    };
  }, [looperInstances, setupInstances]);

  return (
    <div className="looper" ref={outerRef}>
      <div className="looper__innerList" ref={innerRef} data-animate="true">
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className="looper__listInstance"
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === 'right' ? 'reverse' : 'normal',
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

InfiniteLooper.propTypes = {
  speed: PropTypes.number.isRequired,
  direction: PropTypes.oneOf(['right', 'left']).isRequired,
  children: PropTypes.node.isRequired,
};

export default InfiniteLooper;


