import React from 'react';
import ErrorPage from '../../components/404Page/ErrorPage';
import NavBar from '../../components/NavBar/NavBar';
import StickyBar from '../../components/StickyBar/StickyBar';

function Blog() {
  return (
    <div>
      <StickyBar />
      <NavBar />
      <ErrorPage />
    </div>
  );
}

export default Blog;
