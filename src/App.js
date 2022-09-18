import logo from './logo.svg';
import './App.css';
import AppRoute from './routes/AppRoute';

import { Fragment } from 'react';
import Footer from './components/Layout/Footer/Footer';
import Navbar from './components/Layout/Header/Navbar';
// import Navbar from './components/Layout/Header/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar />
      <AppRoute />
      <Footer/>
    </Fragment>
  );
}

export default App;
