import '../Content/style.css'
import gatopoligonalgirando from './gatopoligonalgirando.gif'
import maxwell from './maxwell-cat.gif'
import { useState } from 'react';

function ImagemComHover() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <img
      src={isHovered ? maxwell : gatopoligonalgirando }
      alt="gatopoligonal"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: 'pointer', transition: 'opacity 0.3s' }}
    />
  );
}

export default ImagemComHover 