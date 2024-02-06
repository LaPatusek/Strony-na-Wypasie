import React, { Fragment, useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { Route, Switch, useLocation } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Cookies from './Components/PrivacyAndStatue/Cookies';
import Privacy from './Components/PrivacyAndStatue/Privacy';
import Regulamin from './Components/PrivacyAndStatue/Regulamin';
import Formularz from './Pages/Formularz';
import Kontakt from './Pages/Kontakt';
import Main from './Pages/Main';
import Onas from './Pages/O nas';
import Oferta from './Pages/Oferta';
import PageNotFound from './Pages/PageNotFound';
import Projekty from './Pages/Projekty';

declare var process: {
  env: {
    REACT_APP_TRACKING_ID: string;
  };
};

const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;

const App: React.FC = () => {
  const [passIndexForward, setPassIndexForward] = useState<string>('');

  const PassForwardFunction = (index: number) => {
    setPassIndexForward(index.toString());
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

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, []);

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: pathname,
      title: pathname,
    });
  }, [pathname]);

  return (
    <Fragment>
      <header>
        <Nav />
      </header>

      <main>
        <Switch>
          <Route path='/main'>
            <Main />
          </Route>
          <Route path='/oferta'>
            <Oferta message={passIndexForward} />
          </Route>
          <Route path='/formularz-kontaktowy'>
            <Formularz />
          </Route>
          <Route path='/kontakt'>
            <Kontakt />
          </Route>
          <Route path='/o-nas'>
            <Onas />
          </Route>
          <Route path='/projekty'>
            <Projekty />
          </Route>
          <Route path='/polityka-prywatnosci'>
            <Privacy />
          </Route>
          <Route path='/regulamin'>
            <Regulamin />
          </Route>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </main>

      <footer>
        <Footer PassFunction={PassForwardFunction} />
      </footer>

      <Cookies />
    </Fragment>
  );
};

export default App;
