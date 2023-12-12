import React from 'react';
import '../App';
import MainSection from '../components/MainSection';
import Cards from '../components/Cards';
import Contact from './Contact';

function Home() {
  return (
    <div id='home_section'>
      <MainSection></MainSection>
      <Cards></Cards>
      <Contact></Contact>
    </div>
  );
}
export default Home;