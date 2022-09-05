import logo from './logo.svg';
import './App.css';
import AppRoute from './routes/AppRoute';
import Header from './components/Layout/Header/Header';
import { Fragment } from 'react';
import Footer from './components/Layout/Footer/Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <AppRoute />
      <Footer/>
    </Fragment>
  );
}

export default App;
