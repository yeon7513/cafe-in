import React from 'react';
import aboutImg from '../assets/about01.jpg';
import Container from '../components/Container';
import Title from '../components/Title';
import styles from '../css/About.module.css';

function AboutPage() {
  return (
    <>
      <Container className={styles.about}>
        <img src={aboutImg} alt="" />
        <Title heading="ABOUT Cafe:IN" className={styles.aboutTitle}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            magnam fugit non numquam sequi vel atque sapiente commodi eos rem
            blanditiis fuga, autem aspernatur iure repellendus velit! Odit,
            expedita facere.
          </p>
        </Title>
      </Container>
      <Container className={styles.interior}>
        <Title
          heading="EXTERRIOR & INTERRIOR"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          className={styles.interiorTitle}
        >
          <ul className={styles.content}>
            <li>외관1</li>
            <li>외관2</li>
          </ul>
          <ul className={styles.content}>
            <li>실내1</li>
            <li>실내2</li>
            <li>실내3</li>
            <li>실내4</li>
            <li>실내5</li>
          </ul>
        </Title>
      </Container>
    </>
  );
}

export default AboutPage;
