import React from 'react';
import detailImg from '../assets/아메리카노-핫.png';
import styles from '../css/Detail.module.css';
import Container from './Container';

function Detail(props) {
  return (
    <>
      <Container className={styles.detail}>
        <img src={detailImg} alt="" className={styles.thumb} />
        <div className={styles.info}>
          <h2 className={styles.productName}>아메리카노 [HOT]</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vel
            fugiat numquam obcaecati voluptatibus consequatur ut minus
            laudantium necessitatibus aut eius dolorem impedit, dolor eos ipsum
            harum inventore temporibus in.
          </p>
          <table className={styles.table}>
            <caption>열량 및 영양성분</caption>
            <tbody>
              <tr>
                <th>1회 제공량 (g/ml)</th>
                <td>100</td>
              </tr>
              <tr>
                <th>열량 (kcal)</th>
                <td>100</td>
              </tr>
              <tr>
                <th>당류 (g)</th>
                <td>100</td>
              </tr>
              <tr>
                <th>단백질 (g)</th>
                <td>100(20%)</td>
              </tr>
              <tr>
                <th>포화지방 (g)</th>
                <td>100(20%)</td>
              </tr>
              <tr>
                <th>나트륨 (mg)</th>
                <td>100</td>
              </tr>
              <tr>
                <th>카페인 (mg)</th>
                <td>100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
}

export default Detail;
