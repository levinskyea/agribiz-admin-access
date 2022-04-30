import React, {useEffect} from 'react';
//import { useEffect } from "react";
import HeroSection from '../components/HeroSection';
import DownloadApp from '../components/DownloadApp';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import { admin_db } from '../firebaseAdmin';
//import { db } from '../Firebase';
//import { collection, getDocs } from "firebase/firestore"; 

export default function Home() {

  // useEffect(() => {
  //   const querySnapshot = getDocs(collection(db, "users"));
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());
  //   });
  //   console.log("hery");
  // }, []);

  return (
    <>
      <Header/>
      <HeroSection/>
      <DownloadApp/>
      <Footer/>
    </>
  );
}
