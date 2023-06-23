import pastwisko from '../Assets/cow-pasture.webp';
import styles from './Projekty.module.css';

const Projekty = () => {
  return (
    <div className={styles.projekty}>
      <img src={pastwisko} alt='' width='100%' height='100%'/>
      <h2>Już wkrótce</h2>
    </div>
  );
};

export default Projekty;
