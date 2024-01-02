import React from 'react';
import styles from './Card.module.css';

interface Props {
  className: string | null;
  children: JSX.Element | JSX.Element[];
}

const Card: React.FC<Props> = ({ children, className }) => {
  return <div className={`${styles.card} ${className} relative`}>{children}</div>;
};

export default Card;
