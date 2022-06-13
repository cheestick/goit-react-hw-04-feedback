import { useState } from 'react';

const useCounter = (initial = 0) => {
  const [counter, setCounter] = useState(initial);

  const incrementCounter = (inc = 1) =>
    setCounter(prevCount => prevCount + inc);

  return [counter, incrementCounter];
};

export { useCounter };
