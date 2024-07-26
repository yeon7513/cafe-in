import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/App.module.css';

function More({ path, children, className }) {
  return (
    <Link to={path} className={cn(styles.more, className)}>
      {children}
    </Link>
  );
}

export default More;
