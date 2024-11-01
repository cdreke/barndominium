import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
import { toOptimizedImage } from '../helpers/general';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/IMG_0015.png'}
          title={`We know steel buildings`}
          subtitle={`Barndominiums offer an innovative blend of functionality and charm,
          providing versatile spaces that cater to both residential and
          recreational needs. Myself, Paul Lee, and my expert crew have been in the steel
          building industry for many years and will advise you on the best way
          to construct your barndominium. Avoid mistakes and utilize our expertise in steel buildings
          to realize your vision successfully.`}
        />

        <div className={styles.imageContainer}></div>
      </div>
    </Layout>
  );
};

export default AboutPage;
