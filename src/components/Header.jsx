import React from "react";
import Navbar from './Navbar';
import tmea from '../assets/tmea-logo-horizontal.png';

const Navigation = () => {
  return (
    <header>
      <Navbar />
      <section className="hero is-info">
        <div className="hero-body has-text-centered">
          <img src={tmea} alt='TMEA logo' />
        </div>

      </section>
    </header>
  );
};

export default Navigation;
