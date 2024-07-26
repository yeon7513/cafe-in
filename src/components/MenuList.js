import React from 'react';
import styles from '../css/MenuList.module.css';
import Container from './Container';
import MenuListItem from './MenuListItem';

function MenuList(props) {
  return (
    <Container className={styles.menuList}>
      <MenuListItem />
      <MenuListItem />
      <MenuListItem />
      <MenuListItem />
      <MenuListItem />
    </Container>
  );
}

export default MenuList;
