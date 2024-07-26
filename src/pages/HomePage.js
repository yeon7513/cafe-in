import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Hero from '../components/Hero';
import More from '../components/More';
import Title from '../components/Title';
import styles from '../css/HomePage.module.css';

function HomePage(props) {
  return (
    <>
      <Hero />
      <div className={styles.content}>
        <Title heading="ABOUT Cafe:IN" desc="카페인 가득한 나만의 휴식 공간">
          <p>
            도심 속에서 향긋한 커피와 함께 여유로운 시간을 즐길 수 있는 곳,
            <br />
            <span>Cafe:IN에 오신 것을 환영합니다.</span>
            <br />
            바쁜 일상 속 잠시 멈추어 카페인의 활력을 느껴보세요.
            <br />
            최상의 원두와 신선한 재료로 만들어진 커피 한 잔이 당신의 하루를 더욱
            빛나게 해드립니다.
          </p>
          <More path="/about" className={styles.more}>
            View more info
          </More>
        </Title>
      </div>
      <div className={styles.content}>
        <Container className={styles.container}>
          <ul className={styles.introduce}>
            <li>소개1</li>
            <li>소개2</li>
            <li>소개3</li>
            <li>소개4</li>
          </ul>
        </Container>
      </div>
      <div className={cn(styles.content, styles.season)}>
        <Title heading="SEASON MENU" desc="Cafe:IN 시그니처 계절 메뉴">
          <ul className={styles.seasonMenu}>
            <li>시즌메뉴1</li>
            <li>시즌메뉴2</li>
            <li>시즌메뉴3</li>
            <li>시즌메뉴4</li>
          </ul>
          <More path="/menu" className={styles.more}>
            View full menu
          </More>
        </Title>
      </div>
      <div className={styles.contact}>
        <div className={styles.inner}>
          <Link to="/affiliate">Register for Partners / Contact here.</Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;
