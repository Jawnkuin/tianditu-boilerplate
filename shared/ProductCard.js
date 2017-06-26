import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'antd';
import styles from './ProductCard.less';

const ProductCard = ({ title, imgUrl, description }) => (
  <Card
    className={styles.ProductCard}
    bodyStyle={{ padding: 0 }}
  >
    <div className={styles.imgbox}>
      <img
        alt={title}
        src={imgUrl}
      />
    </div>
    <div className={styles.detailbox} >
      <div>
        <h3>
          {title}
        </h3>
        <h4>
          {description}
        </h4>
      </div>
      <div className={`flex-box ${styles.cardActions}`}>
        <p>6月26日</p>
        <Button shape="circle" icon="double-right" />
      </div>
    </div>
  </Card>
);

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};


export default ProductCard;
