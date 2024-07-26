import cn from 'classnames';
import React from 'react';
import styles from '../css/App.module.css';

function Container({ className, children }) {
  return <div className={cn(styles.container, className)}>{children}</div>;
}

export default Container;
