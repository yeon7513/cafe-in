import cn from 'classnames';
import React from 'react';
import styles from '../css/Title.module.css';
import Container from './Container';

function Title({ heading, desc, className, children }) {
  return (
    <Container className={cn(styles.wrap, className)}>
      <div className={styles.title}>
        <h2>{heading}</h2>
        <span>{desc}</span>
      </div>
      <div className={styles.description}>{children}</div>
    </Container>
  );
}

export default Title;
