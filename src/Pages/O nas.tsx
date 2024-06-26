import { ProgrammingArrow } from 'iconsax-react';
import React from 'react';
import { Helmet } from 'react-helmet';
import challenge from '../Assets/challenge-icon.webp';
import target from '../Assets/target.webp';
import Card from '../Components/UI/Card';
import styles from './AboutUs.module.css';

const Onas: React.FC = () => {
  return (
    <Card className={styles['aboutUs']}>
      <Helmet>
        <link rel='canonical' href='https://www.stronynawypasie.pl/o-nas' />
        <meta name='robots' content='index, follow' />
      </Helmet>
      <div className={`${styles['title-aboutUs']} font-center`}>
        <h1>
          Strony na wypasie <br /> Razem możemy więcej!
        </h1>
        <h2>
          Jesteśmy młodym i kreatywnym zespołem programistów oraz grafików,
          którzy połączyli swoje umiejętności i pasję do tworzenia. Nie tylko
          dzielimy wspólne cele, <br /> ale również inspirujemy się nawzajem,
          podnosząc naszą twórczość na wyższy poziom. Wierzymy, że dzięki
          współpracy stworzymy coś wartościowego. <br /> Razem możemy więcej!
        </h2>
      </div>

      <div className={`${styles['boxes-in-row']} grid`}>
        <div className={styles.container}>
          <div className={styles.background} />
          <div className={styles.filter}>
            <div className={`${styles['container-content']} grid`}>
              <img
                src={challenge}
                width='88px'
                height='88px'
                alt='Kochamy Wyzwania'
              />
              <h3>kochamy wyzywania</h3>
              <p>
                Inspirują nas do poszukiwania nowych sposobów rozwiązywania
                problemów
              </p>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.background} />
          <div className={styles.filter}>
            <div className={`${styles['container-content']} grid`}>
              <img
                src={target}
                width='88px'
                height='88px'
                alt='Spełnimy Twoje Oczekiwania'
              />
              <h3>Spełnimy Twoje oczekiwania</h3>
              <p>
                Dostosowujemy strony do Twoich potrzeb <br /> i specyfiki
                Twojego biznesu
              </p>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.background} />
          <div className={styles.filter}>
            <div className={`${styles['container-content']} grid`}>
              <ProgrammingArrow size='88px' />
              <h3>Szybko się dostosowujemy</h3>
              <p>
                Korzystając z naszych usług, masz możliwość elastycznego
                wprowadzania zmian
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Onas;
