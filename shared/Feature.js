import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feature.less';

const Feature = ({ title, imgUrl, description }) => (
  <div
    className={styles.FeatureWrapper}
  >
    <div
      className={styles.Feature}
    >
      <div className={styles.FeatureLeft}>
        <img
          alt={title}
          src={imgUrl}
        />
      </div>
      <div className={styles.FeatureRight} >
        <h1>
          {title}
        </h1>
        <p>
          {description}
        </p>
      </div>
    </div>
  </div>
);

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};


export default Feature;
