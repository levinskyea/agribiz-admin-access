import React from 'react';
import Products from '../components/Products';
import Services from '../components/Services';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProductsAndServices() {
  return (
    <>
      <Header/>
      <Products/>
      <Services/>
      <Footer/>
    </>
  );
}
