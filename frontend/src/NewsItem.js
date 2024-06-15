// NewsItem.js

import React from 'react';

const NewsItem = ({ title, category, description, keywords }) => {
  return (
    <div className="news-item">
      <h2 style={{ color: 'purple' }}>{title ? title : 'Judul tidak tersedia'}</h2>
      <p style={{ textAlign: 'left', color: 'black' }}><strong style={{ color: 'purple', fontWeight: 'bold' }}>Kategori:</strong> {category ? category : 'Kategori tidak tersedia'}</p>
      <p style={{ textAlign: 'left', color: 'black' }}>{description}</p>
      <p style={{ textAlign: 'left', color: 'black' }}><strong style={{ color: 'purple', fontWeight: 'bold' }}>Keywords:</strong> {keywords.join(', ')}</p>
    </div>
  );
};

export default NewsItem;

