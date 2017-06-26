import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const Frame = ({ children }) => (
  <div style={{ paddingTop: 100 }}>
    <Header />
    {children}
    <Footer />
  </div>
  );


Frame.propTypes = {
  children: PropTypes.node.isRequired
};

export default Frame;
