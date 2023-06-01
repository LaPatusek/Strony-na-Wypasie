import { Fragment, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Privacy from './Components/Privacy/Privacy';
import Formularz from './Pages/Formularz';
import Kontakt from './Pages/Kontakt';
import Main from './Pages/Main';
import Onas from './Pages/O nas';
import Oferta from './Pages/Oferta';
import Projekty from './Pages/Projekty';

const App = () => {
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
      <Nav />

      <main>
        <Switch>
          <Route path='/main'>
            <Main />
          </Route>
          <Route exact path='/oferta'>
            <Oferta />
          </Route>
          <Route exact path='/projekty'>
            <Projekty />
          </Route>
          <Route exact path='/o-nas'>
            <Onas />
          </Route>
          <Route exact path='/kontakt'>
            <Kontakt />
          </Route>
          <Route exact path='/formularz-kontaktowy'>
            <Formularz />
          </Route>
          <Route exact path='/polityka-prywatnosci'>
            <Privacy />
          </Route>
          <Route exact path='/'>
            <Oferta />
          </Route>
          <Route path='*'>
            <Main />
          </Route>
        </Switch>
      </main>

      <Footer />
    </Fragment>
  );
};

export default App;
