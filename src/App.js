import { Fragment, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch, useLocation } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Privacy from './Components/PrivacyAndStatue/Privacy';
import Regulamin from './Components/PrivacyAndStatue/Regulamin';
import StripeContainer from './Components/Stripe/StripeContainer';
import Formularz from './Pages/Formularz';
import Kontakt from './Pages/Kontakt';
import Main from './Pages/Main';
import Onas from './Pages/O nas';
import Oferta from './Pages/Oferta';
import Projekty from './Pages/Projekty';

const App = () => {
  const [passIndexForward, setPassIndexForward] = useState();
  const [passOptionsForward, setPassOptionsForward] = useState();

  const PassForwardFunction = (index) => {
    setPassIndexForward(index);
  };

  const passForwardOption = (opcje) => {
    setPassOptionsForward(opcje);
  };

  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  return (
    <Fragment>
      <Helmet>
        <meta
          name='keywords'
          content='strony, web, www, Rzeszów, Strzyżów, tworzenie stron WWW, tworzenie stron'
        />
      </Helmet>

      <Nav />

      <main>
        <Switch>
          <Route path='/main'>
            <Main />
          </Route>
          <Route path='/oferta'>
            <Oferta
              message={passIndexForward}
              optionPassFuntion={passForwardOption}
            />
          </Route>
          <Route path='/projekty'>
            <Projekty />
          </Route>
          <Route path='/o-nas'>
            <Onas />
          </Route>
          <Route path='/kontakt'>
            <Kontakt />
          </Route>
          <Route path='/formularz-kontaktowy'>
            <Formularz />
          </Route>
          <Route path='/polityka-prywatnosci'>
            <Privacy />
          </Route>
          <Route path='/regulamin'>
            <Regulamin />
          </Route>
          <Route path='/platnosc'>
            <StripeContainer optionMessage={passOptionsForward} />
          </Route>
          <Route path='/'>
            <Main />
          </Route>
          <Route path='*'>
            <Main />
          </Route>
        </Switch>
      </main>

      <Footer PassFunction={PassForwardFunction} />
    </Fragment>
  );
};

export default App;
