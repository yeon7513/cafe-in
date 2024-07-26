import React from 'react';

import styles from '../css/Banner.module.css';

function Banner({ title, imgUrl, desc }) {
  return (
    <div className={styles.banner}>
      <img src={imgUrl} alt="" />
      <div className={styles.title}>
        <h2>{title}</h2>
        <span>{desc}</span>
      </div>
    </div>
  );
}

export default Banner;
