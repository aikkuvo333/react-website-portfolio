import React from 'react';
import '../App';
import MainSection from './MainSection';
import Cards from './Cards';
import Contact from './Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div id='home_section'>
      <MainSection/>
      <Cards/>
      <Contact/>
      <Footer/>
    </div>
  );
}