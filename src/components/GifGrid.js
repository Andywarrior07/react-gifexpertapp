import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
  const { images, loading } = useFetchGifs(category);

  return (
    <div>
      <h3 className='animate__animated animate__flash'>{category}</h3>

      {loading && (
        <p className='animate__animated animate__flash'>Loading...</p>
      )}

      <div className='card-grid'>
        {images.map(img => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </div>
  );
};
