import React from 'react';
import PropTypes from 'prop-types';
import styles from './FirstScreen.less';

const FirstScreen = ({ children }) => (
  <div className={styles.FirstScreen}>
    {children}
  </div>
);

FirstScreen.propTypes = {
  children: PropTypes.node.isRequired
};

export default FirstScreen;
