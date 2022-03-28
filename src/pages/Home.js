import React from 'react';
import HeroSection from '../components/HeroSection';
import DownloadApp from '../components/DownloadApp';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <DownloadApp/>
      <Footer/>
    </>
  );
}
