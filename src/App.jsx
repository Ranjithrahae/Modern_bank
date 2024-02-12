import React from 'react';
import styles from './style';
import Navbar from "./components/navbar";
import Billing from "./components/billing";
import CardDeal from "./components/carddeal";
import Business from "./components/business";
import Client from "./components/Clients";
import CTA from "./components/CTA";
import Stats from "./components/stats";
import Footer from "./components/footer";
import Testimonials from "./components/testimonial";
import Hero from "./components/hero";

function App() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}><Navbar/></div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
          </div>
      </div>
      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Client />
        <CTA />
        <Footer />
          </div>
      </div>
    </div>
  )
}

export default App ;

