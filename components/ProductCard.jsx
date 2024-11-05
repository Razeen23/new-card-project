import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="card">
      <div className="card_image">
        <img loading='lazy' src={product.image} alt={product.name} />
      </div>
      
      <div className="card_title title-white ">
        <p className='font-secondary'>{product.name}</p>
        {/* <p>{product.price}</p> */}
      </div>
    </div>
  );
}

export default ProductCard;