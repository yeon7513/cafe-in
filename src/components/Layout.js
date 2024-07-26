import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Layout.module.css';
import Container from './Container';

function PageLink({ path, name }) {
  return (
    <li>
      <Link to={path}>{name}</Link>
    </li>
  );
}

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Container className={styles.headerContainer}>
          <h1 className={styles.logo}>
            <Link to="/">
              Cafe:<span>IN</span>
            </Link>
          </h1>
          <nav className={styles.mainMenu}>
            <ul>
              <PageLink path="about" name="소개" />
              <PageLink path="menu" name="메뉴" />
              <PageLink path="affiliate" name="가맹문의" />
              <PageLink path="community" name="커뮤니티" />
            </ul>
          </nav>
          <ul className={styles.spotMenu}>
            <PageLink path="login" name="로그인" />
            <PageLink path="signup" name="회원가입" />
          </ul>
        </Container>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <Container className={styles.footerContainer}>
          <h1 className={styles.logo}>
            Cafe:<span>IN</span>
          </h1>
          <div className={styles.info}>
            <ul>
              <li>
                <span>CEO. 김OO</span>
                <span>Tel. 000-000-0000</span>
                <span>cafe_in@cafein.com</span>
              </li>
              <li>
                <span>Addr. 대전시 중구 선화동 0000</span>
                <span>Biz License. 000-00-00000</span>
              </li>
              <li>
                <small className={styles.copy}>
                  Copyright <span>Cafe:IN</span>. All right reserved.
                </small>
              </li>
            </ul>
          </div>
          <div className={styles.contact}>
            <ul>
              <li>instagram</li>
              <li>facebook</li>
              <li>kakaotalk</li>
            </ul>
          </div>
          <button className={styles.topBtn}>top</button>
        </Container>
      </footer>
    </>
  );
}

export default Layout;
