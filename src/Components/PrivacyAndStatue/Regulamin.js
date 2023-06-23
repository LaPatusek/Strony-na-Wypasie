import { useHistory } from 'react-router-dom';
import GoBackButton from '../Elements/GoBackButton';
import Card from '../UI/Card';
import styles from './Regulamin.module.css';

const Regulamin = () => {
  const history = useHistory();

  const navigationFunction = () => {
    history.goBack();
  };

  return (
    <Card className={`${styles.regulamin} grid`}>
      <div className={styles.title}>
        <h1>Regulamin</h1>
        <hr />
      </div>
      <h2>
        Regulamin sklepu online pełniącego usługi projektowania stron
        internetowych StronyNaWypasie.pl:
      </h2>

      <ol>
        <h3>Postanowienia ogólne</h3>

        <li>
          <ol>
            <li>
              Niniejszy regulamin określa zasady korzystania ze sklepu
              internetowego świadczącego usługi projektowania stron
              internetowych.
            </li>
            <li>Sklep internetowy działa na podstawie prawa polskiego.</li>
            <li>
              Niniejszy regulamin stanowi umowę między sklepem a klientem.
            </li>
            <li>
              Sklep zastrzega sobie prawo do wprowadzania zmian w regulaminie.
            </li>
          </ol>
        </li>

        <h3>Zamówienia</h3>
        <li>
          <ol>
            <li>
              Zamówienia można składać drogą elektroniczną za pośrednictwem
              formularza zamówienia.
            </li>
            <li>
              Zamówienie stanowi ofertę kupna usługi projektowania strony
              internetowej.
            </li>
            <li>
              Sklep zastrzega sobie prawo do odmowy realizacji zamówienia bez
              podania przyczyny.
            </li>
            <li>
              W przypadku braku możliwości realizacji zamówienia, sklep zwraca
              zapłaconą kwotę.
            </li>
          </ol>
        </li>

        <h3>Ceny</h3>

        <li>
          <ol>
            <li>
              Wszystkie ceny podawane przez sklep są cenami netto/brutto – nie
              wystawiamy faktury VAT.
            </li>
            <li>
              Sklep zastrzega sobie prawo do zmiany cen bez wcześniejszego
              powiadomienia.
            </li>
          </ol>
        </li>

        <h3>Płatności</h3>

        <li>
          <ol>
            <li>
              Płatności za zamówienia można dokonywać za pomocą płatności
              elektronicznych.
            </li>
            <li>Sklep nie pobiera dodatkowych opłat za płatności.</li>
            <li>
              W przypadku zwrotu płatności, sklep dokonuje zwrotu na rachunek
              bankowy klienta.
            </li>
          </ol>
        </li>

        <h3>Realizacja zamówienia</h3>

        <li>
          <ol>
            <li>Realizacja zamówienia następuje po otrzymaniu wpłaty.</li>
            <li>
              Czas realizacji zamówienia wynosi od 3 do 21 dni roboczych, chyba
              że strony ustalą inny termin.
            </li>
            <li>
              Po zakończeniu projektu, klient otrzymuje wersję końcową projektu
              strony internetowej. W zależności od zakupionego pakietu.
            </li>
          </ol>
        </li>

        <h3>Reklamacje</h3>

        <li>
          <ol>
            <li>
              W przypadku reklamacji klient powinien skontaktować się ze sklepem
              za pośrednictwem poczty elektronicznej.
            </li>
            <li>
              Sklep rozpatruje reklamację w ciągu 14 dni od jej otrzymania.
            </li>
            <li>
              Sklep zobowiązuje się do jak najszybszego rozwiązania problemu
              reklamacyjnego.
            </li>
          </ol>
        </li>

        <h3>Ochrona danych osobowych</h3>

        <li>
          <ol>
            <li>
              Sklep zapewnia ochronę danych osobowych zgodnie z obowiązującymi
              przepisami prawa.
            </li>
            <li>
              Klient wyraża zgodę na przetwarzanie swoich danych osobowych w
              celu realizacji zamówienia.
            </li>
            <li>
              Klient ma prawo do wglądu w swoje dane osobowe, ich poprawiania
              oraz żądania ich usunięcia.
            </li>
          </ol>
        </li>

        <h3>Postanowienia końcowe</h3>
        <li>
          <ol>
            <li>
              Wszelkie spory między sklepem a klientem są rozpatrywane na drodze
              polubownej. W przeciwnym wypadku wszelkie spory wynikające z umów
              sprzedaży między sklepem a klientami będą najpierw próbowane
              rozwiązać poprzez negocjacje, z zamiarem osiągnięcia porozumienia
              bez konieczności skorzystania z sądu. W przypadku braku możliwości
              takiego rozwiązania lub niezadowolenia którejkolwiek ze stron,
              spory będą rozstrzygane przez odpowiedni sąd powszechny, zgodnie z
              ustawą o pozasądowym rozwiązywaniu sporów konsumenckich.
            </li>
          </ol>
        </li>
      </ol>

      <h4>
        Wszelkie zmiany w regulaminie zostaną opublikowane na naszej stronie
        internetowej.
      </h4>
      <div onClick={navigationFunction} className={styles['back-button']}>
        <GoBackButton />
      </div>
    </Card>
  );
};

export default Regulamin;
