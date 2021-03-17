import React from 'react';
import BlogPosts from './BlogPosts';
import Categories from './Categories';
import Sale from './Sale';
import Top from './Top';
import FilterByUpper from '../filters/FilterByUpper';
import { useSelector } from 'react-redux';
import { navState } from '../../redux/navSlice';

function Main() {
  const navigation = useSelector(navState);
  let display;

  if (navigation === 'top') {
    display = <Top />;
  } else if (navigation === 'categories') {
    display = <Categories />;
  } else if (navigation === 'news') {
    display = <BlogPosts />;
  } else if (navigation === 'sale') {
    display = <Sale />;
  }

  return (
    <div>
      <FilterByUpper />
      {display}
    </div>
  );
}

export default Main;
