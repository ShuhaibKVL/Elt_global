
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TimerComponent = ({ hours }) => {
  const [timeLeft, setTimeLeft] = useState(hours * 3600); // Convert hours to seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return <div className='text-red-500 w-full flex justify-center items-center'>{formatTime(timeLeft)}</div>;
};

TimerComponent.propTypes = {
  hours: PropTypes.number.isRequired
};

export default TimerComponent;

