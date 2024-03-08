import React, { useState } from 'react';
import Card from '../UI/Card';
import styles from './Faquestions.module.css';

const buttons = [
  'Co to jest hosting?',
  'Na czym polega utrzymanie strony?',
  'Czym jest domena?',
  'Ile kosztuje utrzymanie strony?',
];

const Faquestions: React.FC<{ forwardMessage: string }> = (props) => {
  let activeProp = +props.forwardMessage;
  if (!activeProp) {
    activeProp = 0;
  }

  const [activeBlock, setActiveBlock] = useState(activeProp);

  const toggleMenuBlock = (index: number) => {
    setActiveBlock(index);
  };

  const menuHeight = getComputedStyle(
    document.documentElement,
  ).getPropertyValue('--menu-height');

  return (
    <Card className={`${styles.faq} grid`}>
      <h2>Najczęsciej zadawane pytania</h2>

      <section className={styles.card}>
        <div className={styles.buttons}>
          {buttons.map((button, index) => (
            <button
              key={button}
              className={index === activeBlock ? styles['active'] : ''}
              onClick={() => toggleMenuBlock(index)}
            >
              {button}
            </button>
          ))}
        </div>
        <div className={`${styles.wrapper} relative`}>
          <div
            className={styles.content}
            style={{
              translate: `0 calc(0px - ${menuHeight} * ${activeBlock})`,
            }}
          >
            <div className={styles.block}>
              <h3>{buttons[0]}</h3>
              <p>
                Hosting pozwala na przechowywanie plików strony internetowej na
                serwerze, aby były one dostępne dla użytkowników przez
                przeglądarkę internetową.
              </p>
            </div>
            <div className={styles.block}>
              <h3>{buttons[1]}</h3>
              <p>
                Utrzymanie strony internetowej obejmuje kilka kluczowych
                aspektów: <br /> Aktualizację treści, optymalizację wydajności,
                monitorowanie ruchu na stronie internetowej, dbanie o hosting i
                przedłużanie domeny.
              </p>
            </div>
            <div className={styles.block}>
              <h3>{buttons[2]}</h3>
              <p>
                Domena to unikalny adres internetowy. Jest to czytelna i łatwa
                do zapamiętania nazwa, która odpowiada konkretnemu adresowi IP.
                Może również mieć wpływ na widoczność w wynikach wyszukiwania i
                ogólną identyfikację w sieci, dlatego warto zwrócić uwagę na
                wybór odpowiedniej nazwy.
              </p>
            </div>
            <div className={styles.block}>
              <h3>{buttons[3]}</h3>
              <p>
                Utrzymanie domeny internetowej kosztuje zwykle od 30 zł do 120
                zł rocznie. Natomiast koszt hostingu zależy od wielkości strony.
                Ceny hostingu wahać się mogą od 70 zł do 400 zł rocznie. Dla
                małych stron wystarczający będzie hosting w przedziale cenowym
                od 70 zł do 120 zł rocznie.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Card>
  );
};

export default Faquestions;
