import React from 'react';
import Header from '../components/home/Header';
import GridSection from '../components/home/GridSection';
import Testimonial from '../components/home/Testimonial';
import Article from '../components/home/Article';
import NavBar from '../components/shared/NavBar';
import "../style/Home.css"

function Home() {
  return (
    <>
       <Header />
      <GridSection />
      <Testimonial />
      <Article />
    </>
  );
}

export default Home;
