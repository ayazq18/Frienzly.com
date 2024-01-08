import React from 'react';
import './Page4.css';

export default function Page4() {
  const images = [
    { id: 1, src: './1.svg', alt: 'Image 1', tooltip: 'Private messaging' },
    { id: 2, src: './2.svg', alt: 'Image 2', tooltip: 'Music Streaming' },
    { id: 3, src: './3.svg', alt: 'Image 3', tooltip: 'Locate your friends' },
  ];

  const handleMouseEnter = (id) => {
    document.getElementById(`tooltip-${id}`).style.display = 'block';
  };

  const handleMouseLeave = (id) => {
    document.getElementById(`tooltip-${id}`).style.display = 'none';
  };

  return (
    <div className='page4'>
      <div className='page4-content'>
        <div className='sec1'>
          <h1>Feeling excited?</h1>
          <p>Coming soon only on Google Play Store!</p>
        </div>

        <div className='sec2'>
          {images.map((image) => (
            <div
              key={image.id}
              className='tooltip-container'
              onMouseEnter={() => handleMouseEnter(image.id)}
              onMouseLeave={() => handleMouseLeave(image.id)}
            >
              <img src={image.src} alt={image.alt} className={`tooltip-image ${image.id === 1 ? 'image1' : ''}`} />
              <div className='tooltip' id={`tooltip-${image.id}`}>
                {image.tooltip}
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer>&copy; Copyright 2024 Frienzly - All Reserved</footer>
    </div>
  );
}
