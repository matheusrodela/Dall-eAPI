import './styles.css';
import React from 'react'

const Tips = () => {
  return (
    <div className='wrapper'>
        <h3>Need some help creating better images?</h3>
        <details>
            <summary>Try providing as much detail as possible.</summary>
            <p><strong>e.g.</strong>: a close up, studio photographic portrait of a white siamese cat that looks curious, backlit ears</p>
        </details>
        <details>
            <summary>Choose the image's style.</summary>
            <p><strong>e.g.</strong>: impressiost, cartoon, 3d render, pixel art, digital art, photo, etc.</p>
        </details>
    </div>
  );
}

export {Tips} 