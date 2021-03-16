import React from 'react';
import BlogPosts from './BlogPosts';
import Categories from './Categories';
import Sale from './Sale';
import Top from './Top';
import FilterByUpper from '../filters/FilterByUpper';

function Main() {
  return (
    <div>
      <FilterByUpper />
      <Top />
      <Categories />
      <BlogPosts />
      <Sale />
    </div>
  );
}

export default Main;
