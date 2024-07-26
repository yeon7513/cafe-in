import React from 'react';
import bannerImg from '../assets/main04.jpg';
import Banner from '../components/Banner';
import Container from '../components/Container';
import MenuList from '../components/MenuList';
import styles from '../css/MenuPage.module.css';

function MenuPage() {
  return (
    <>
      <Banner
        title="coffee"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quas."
        imgUrl={bannerImg}
      />
      <Container className={styles.nav}>
        <button>시즌메뉴</button>
        <button>커피</button>
        <button>음료</button>
        <button>디저트</button>
      </Container>
      <MenuList />
    </>
  );
}

export default MenuPage;
