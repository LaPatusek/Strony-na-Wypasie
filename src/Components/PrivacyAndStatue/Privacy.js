import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import GoBackButton from '../Elements/GoBackButton';
import Card from '../UI/Card';
import styles from './Privacy.module.css';

const Privacy = () => {
  const history = useHistory();

  const navigationFunction = () => {
    history.goBack();
  };

  return (
    <Card className={`${styles.privacy} grid`}>
      <Helmet>
        <link
          rel='canonical'
          href='https://stronynawypasie.pl/#/polityka-prywatnosci'
        />
      </Helmet>
      <div className={styles.title}>
        <h2>Polityka prywatności</h2>
        <hr />
      </div>

      <h3>Polityka prywatności dla firmy tworzącej strony internetowe:</h3>
      <p>
        Nasza firma zobowiązuje się do ochrony prywatności użytkowników naszych
        usług oraz klientów, którzy korzystają z naszych usług tworzenia stron
        internetowych. W ramach naszej polityki prywatności, poniżej
        przedstawiamy informacje dotyczące sposobu zbierania, przechowywania i
        wykorzystywania danych osobowych.
      </p>

      <h3>Jakie informacje zbieramy?</h3>
      <p>
        Podczas korzystania z naszych usług, zbieramy tylko te informacje, które
        są nam niezbędne do realizacji zamówienia i zapewnienia najwyższej
        jakości usług. Mogą to być informacje takie jak imię i nazwisko, adres
        e-mail, numer telefonu, adres do korespondencji i informacje dotyczące
        preferencji dotyczących strony internetowej.
      </p>

      <h3>Sposób wykorzystania informacji</h3>
      <p>
        Zbierane informacje są wykorzystywane wyłącznie w celu realizacji
        zamówienia i świadczenia usług. Mogą być również wykorzystane do
        informowania klientów o nowych usługach, promocjach i ofertach
        specjalnych. W przypadku wysyłki newslettera lub materiałów
        marketingowych, klienci mają możliwość zrezygnowania z otrzymywania
        takich informacji w każdej chwili.
      </p>

      <h3>Ochrona danych osobowych</h3>
      <p>
        Wszystkie informacje przekazywane nam przez klientów są przechowywane w
        sposób bezpieczny i chronione przez nasze systemy zabezpieczeń. Nie
        udostępniamy tych informacji stronom trzecim, chyba że jest to wymagane
        przez prawo lub w celu realizacji zamówienia.
      </p>

      <h3>Prawa użytkowników</h3>
      <p>
        Nasi klienci mają prawo do wglądu w swoje dane osobowe, ich poprawiania,
        usuwania oraz ograniczenia przetwarzania. W przypadku pytań lub uwag
        dotyczących prywatności, użytkownicy mogą skontaktować się z nami za
        pośrednictwem formularza kontaktowego na naszej stronie internetowej.
      </p>

      <h3>Pliki cookies</h3>
      <p>
        Nasza strona internetowa używa plików cookies w celu poprawienia jakości
        usług oraz dostosowania treści do indywidualnych potrzeb użytkowników.
        Pliki cookies zawierają jedynie informacje o preferencjach użytkownika i
        nie są wykorzystywane do zbierania danych osobowych.
      </p>

      <h4>
        Wszelkie zmiany w naszej polityce prywatności zostaną opublikowane na
        naszej stronie internetowej.
      </h4>
      <div onClick={navigationFunction} className={styles['back-button']}>
        <GoBackButton />
      </div>
    </Card>
  );
};

export default Privacy;
