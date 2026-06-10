import React from 'react';
import Header from '../components/home/Header';
import GridSection from '../components/home/GridSection';
import Testimonial from '../components/home/Testimonial';
import Article from '../components/home/Article';
import icon from "/favicon.svg"
import "../style/Home.css"
import Future from '../components/home/Future';

function Home() {
  return (
    <>
       <Header title="WE ARE CREATIVE" image={icon}/>
      <GridSection />
      <Testimonial />
      <Future/>
      <Article />
    </>
  );
}

export default Home;
