import React from 'react';
import { Helmet } from 'react-helmet';
import pastwisko from '../Assets/cow-pasture.webp';
import styles from './Projekty.module.css';

const Projekty: React.FC = () => {
  return (
    <div className={styles.projekty}>
      <Helmet>
        <link
          rel='canonical'
          href='https://www.stronynawypasie.pl/projekty'
        />
      </Helmet>
      <img
        src={pastwisko}
        alt='Responsywne Strony Internetowe'
        width='100%'
        height='100%'
      />
      <h2>Już wkrótce</h2>
    </div>
  );
};

export default Projekty;
