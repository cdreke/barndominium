import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';
import { toOptimizedImage } from '../helpers/general';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const blogData = generateMockBlogData(3);

  const whyUsData = [
    {
      title: 'We know steel buildings',
      category: 'Expertise',
      alt: "80'x100' barndominium in Kapoho, HI",
      image: '/IMG_0009.png',
      link: '',
      excerpt: '',
    },
    {
      title: 'We know the Big Island',
      category: 'Local',
      alt: "30'x80' barndominium in Kapaho, HI",
      image: '/IMG_0010.png',
      link: '',
      excerpt: '',
    },
    {
      title: 'We guide you towards success',
      category: 'success',
      alt: '40’x100’ barndominium in Hawaiian Acres, HI',
      image: '/IMG_1352.jpg',
      link: '/',
      excerpt: '',
    },
  ];

  const goToDesigner = () => {
    navigate('http://real-steel-llc.actbuildingsystems.com/');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'700px'}
        image={'/image1-2.jpeg'}
        title={'Configure Your Barndominium for 2024'}
        subtitle={
          'Spacious, open floor plans without the need for interior load-bearing walls, offering flexible design options to accommodate various preferences and lifestyles.'
        }
        ctaText={'Configure Now'}
        ctaAction={goToDesigner}
      />

      {/* Blog Grid */}
      <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title
            name={'How it works'}
            subtitle={
              'Build your Barndominium with one of our Real Steel Kits and utilize our decades of experience in precision metal building manufacturing and errection. Steel structures are renowned for their resistance to extreme weather conditions, pests, and fire, ensuring a long-lasting and low-maintenance building.  The eco-friendly nature of steel, which is 100% recyclable, contributes to reduced environmental impact, making it an ideal choice for sustainable construction. Ultimately, combining the practicality of barndominiums with the robustness of steel creates a fusion of efficiency and strength, appealing to those seeking a cost-effective yet stylish solution for their living and recreational spaces.'
            }
          />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div>
      {/* Message Container */}
      <div className={styles.messageContainer}>
        <p>
          We have the experience and expertise to help you avoid mistakes and{' '}
          <span className={styles.gold}>realize your dream</span> successfully.
        </p>
      </div>
      {/* Quote */}
      <Quote
        bgColor={'var(--standard-gold)'}
        title={'about Paul Lee Barndominiums'}
        quote={
          '“We believe in two things: the pursuit of quality in everything we do, and looking after one another. Everything else should take care of itself.”'
        }
      />
      {/* Blog Grid */}
      <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title
            name={'Why go with us?'}
            subtitle={
              'You have choices when it comes to building your Barndominium. Our decades of experience, our knowledge of the Big Island and our commitment to quality and your success set us apart.'
            }
          />
          <BlogPreviewGrid data={whyUsData} />
        </Container>
      </div>
      {/*

      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'New Collection'} />
          <ProductCollectionGrid />
        </Container>
      </div>


      <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name={'New Arrivals'} link={'/shop'} textLink={'view all'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={3}
            data={newArrivals}
          />
        </Container>
      </div>

  
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/highlight.png'}
            altImage={'highlight image'}
            miniImage={'/highlightmin.png'}
            miniImageAlt={'mini highlight image'}
            title={'Luxury Knitwear'}
            description={`This soft lambswool jumper is knitted in Scotland, using yarn from one of the world's oldest spinners based in Fife`}
            textLink={'shop now'}
            link={'/shop'}
          />
        </Container>
      </div>


      <div className={styles.promotionContainer}>
        <Hero
          image={toOptimizedImage('/banner2.png')}
          title={`-50% off \n All Essentials`}
        />
        <div className={styles.linkContainers}>
          <Link to={'/shop'}>WOMAN</Link>
          <Link to={'/shop'}>MAN</Link>
        </div>
      </div>


      <div className={styles.sustainableContainer}>
        <Hero
          image={toOptimizedImage('/banner3.png')}
          title={'We are Sustainable'}
          subtitle={
            'From caring for our land to supporting our people, discover the steps we’re taking to do more for the world around us.'
          }
          ctaText={'read more'}
          maxWidth={'660px'}
          ctaStyle={styles.ctaCustomButton}
        />
      </div>


      <div className={styles.socialContainer}>
        <Title
          name={'Styled by You'}
          subtitle={'Tag @sydney to be featured.'}
        />
        <div className={styles.socialContentGrid}>
          <img
            src={toOptimizedImage(`/social/socialMedia1.png`)}
            alt={'social media 1'}
          />
          <img
            src={toOptimizedImage(`/social/socialMedia2.png`)}
            alt={'social media 2'}
          />
          <img
            src={toOptimizedImage(`/social/socialMedia3.png`)}
            alt={'social media 3'}
          />
          <img
            src={toOptimizedImage(`/social/socialMedia4.png`)}
            alt={'social media 4'}
          />
        </div>
      </div>
      <AttributeGrid />
      */}
      <div className={styles.messageContainer}>
        <p>
          <Link className={styles.gold} to={'/support/#contact'}>
            Contact Us
          </Link>{' '}
          today to start building your dream.
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
