import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Privacy from './Components/Privacy/Privacy';
import Kontakt from './Pages/Kontakt';
import Main from './Pages/Main';
import Onas from './Pages/O nas';
import Oferta from './Pages/Oferta';
import Projekty from './Pages/Projekty';

const App = () => {
  return (
    <Fragment>
      <Header />

      <main>
        <Switch>
          <Route path='/main'>
            <Main />
          </Route>
          <Route path='/oferta'>
            <Oferta />
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
          <Route path='/polityka-prywatnosci'>
            <Privacy />
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
