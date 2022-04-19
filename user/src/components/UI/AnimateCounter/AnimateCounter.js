import React, { useEffect, useState } from "react";

import "./AnimateCounter.scss";
export default function AnimateCounter({ countTo }) {
  const [count, setCount] = useState(0);

  const counter = (minimum, maximum) => {
    for (let count = minimum; count <= maximum; count++) {
      setTimeout(() => {
        setCount(count);
      }, 100);
    }
  };
  useEffect(() => {
    counter(0, countTo);
  }, []);

  return (
    <div className='animate-counter'>
      <p id='stats-number'>{count}</p>
    </div>
  );
}
