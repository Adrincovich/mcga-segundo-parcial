import React from 'react';
import { Route }  from 'react-router-dom';
import Switch from 'react-switch';
import styles from './layout.module.css';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import Products from '../../screens/Products';
import ProductsForm from '../../screens/Products/Form';

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/form" component={ProductsForm} />
        <Route path="/products/:id" component={ProductsForm} />
        <Route exact path="/">
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
export default Layout;
