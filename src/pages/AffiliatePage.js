import React from 'react';
import bannerImg from '../assets/main04.jpg';
import Banner from '../components/Banner';
import Container from '../components/Container';
import styles from '../css/AffiliatePage.module.css';

function AffiliatePage(props) {
  return (
    <>
      <Banner
        title="coffee"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quas."
        imgUrl={bannerImg}
      />
      <Container>
        <div>
          <h2>가맹절차</h2>
          <ul>
            <li>가맹절차1</li>
            <li>가맹절차2</li>
            <li>가맹절차3</li>
            <li>가맹절차4</li>
            <li>가맹절차5</li>
            <li>가맹절차6</li>
          </ul>
        </div>
        <div>
          <h2>가맹문의</h2>
          <form className={styles.form}>
            <div className={styles.name}>
              <label htmlFor="name">이름</label>
              <input type="text" />
            </div>
            <div className={styles.phone}>
              <label htmlFor="phone">연락처</label>
              <input type="text" />
            </div>
            <div className={styles.email}>
              <label htmlFor="email">이메일</label>
              <input type="text" />
            </div>
            <div className={styles.title}>
              <label htmlFor="title">제목</label>
              <input type="text" />
            </div>
            <div className={styles.comment}>
              <label htmlFor="comment">글</label>
              <textarea name="" id="comment"></textarea>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}

export default AffiliatePage;
