import React from 'react';
import Navbar from '../components/navbar';
import Meta from './Meta';

const LayoutWrapper = (params) => {
  const { children, ...props } = params;
  return (
    <div className="w-11/12 mx-auto text-white">
      <Meta />
      <Navbar />
      {React.cloneElement(children, { ...props })}
    </div>
  );
};

export default LayoutWrapper;
