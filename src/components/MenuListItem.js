import React from 'react';
import { Link } from 'react-router-dom';
import menu from '../assets/아메리카노-핫.png';
import styles from '../css/MenuListItem.module.css';

function MenuListItem(props) {
  return (
    <Link to="#" className={styles.item}>
      <div className={styles.card}>
        <img className={styles.thumb} src={menu} alt="" />
        <span className={styles.name}>아메리카노 [HOT]</span>
      </div>
    </Link>
  );
}

export default MenuListItem;
