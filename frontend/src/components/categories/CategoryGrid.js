import React, { useState } from 'react';
import CategoryCard from './CategoryCard';
import styled from 'styled-components';

const CatDiv = styled.div`
  /* z-index: 1000; */
  h4 {
    text-align: center;
    font-size: 22px;
  }
  padding: 30px 0;
  .categories-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

function CategoryGrid() {
  const [categories] = useState([
    { id: 1, name: 'Ubrania' },
    { id: 2, name: 'Obuwie' },
    { id: 3, name: 'Kosmetyki' },
    { id: 4, name: 'Akcesoria' },
    { id: 5, name: 'Mama' },
  ]);
  return (
    <CatDiv className="category-grid">
      <h4>kategorie</h4>
      <div className="categories-list">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} />
        ))}
      </div>
    </CatDiv>
  );
}

export default CategoryGrid;
