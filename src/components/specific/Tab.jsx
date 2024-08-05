import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moreIcon from '../../assets/images/icons/Union.png';

export default function Tab({ type, image, title }) {
  const [color, setColor] = useState('bg-gray-200');

  useEffect(() => {
    if (type === 'primary') {
      setColor('bg-blue-600');
    } else if (type === 'secondary') {
      setColor('bg-green-500');
    }
  }, [type]);

  return (
    <div className='w-[192px] h-[50px] flex items-center justify-start pl-2'>
      <div className={`rounded-full w-[36px] h-[36px] ${color} flex items-center justify-center`}>
        <img src={image || moreIcon} className='w-[20px] h-[20px] object-cover' alt="icon" />
      </div>
      <h1 className='text-[20px] font-semibold pl-4'>{title || 'Performance'}</h1>
    </div>
  );
}

Tab.propTypes = {
  type: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};

Tab.defaultProps = {
  type: 'default',
  image: moreIcon,
  title: 'Performance',
};

