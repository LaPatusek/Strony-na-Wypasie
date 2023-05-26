import { ArrowDown2 } from 'iconsax-react';
import Card from '../UI/Card';
import styles from './Faquestions.module.css';

const Faquestions = () => {
    // Przemyśleć - wyjebać albo kontynuować i poprawić
    // kolory i padding h3
    // dodać tekst
    // rozsuwanie się paragrafów od góry

  return (
    <Card className={styles.faq}>
      <h2>Najczęsciej zadawane pytania</h2>
      <h3>
        Co to jest hosting <ArrowDown2 variant='Bold' />
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor
        erat quis ante sollicitudin, ut commodo justo congue. Quisque
        condimentum, lorem sit amet imperdiet accumsan, purus nunc feugiat
        sapien, nec convallis sem lectus ut odio. Sed accumsan imperdiet ipsum
        sit amet egestas.
      </p>

      <h3>
        Na czym polega utrzymanie strony <ArrowDown2 variant='Bold' />
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor
        erat quis ante sollicitudin, ut commodo justo congue. Quisque
        condimentum, lorem sit amet imperdiet accumsan, purus nunc feugiat
        sapien, nec convallis sem lectus ut odio. Sed accumsan imperdiet ipsum
        sit amet egestas.
      </p>

      <h3>
        Czym jest domena? <ArrowDown2 variant='Bold' />
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor
        erat quis ante sollicitudin, ut commodo justo congue. Quisque
        condimentum, lorem sit amet imperdiet accumsan, purus nunc feugiat
        sapien, nec convallis sem lectus ut odio. Sed accumsan imperdiet ipsum
        sit amet egestas.
      </p>
    </Card>
  );
};

export default Faquestions;
