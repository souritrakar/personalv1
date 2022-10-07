import Head from 'next/head'
import Navbar from '../components/Navbar'
import { Fragment, useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from "tsparticles";
import particlesConfig from '../components/config/configParticles';

import HeroSection from '../components/ui/HeroSection';
import DeveloperBanner from '../components/ui/DeveloperBanner';
import ProjectsBanner from '../components/ui/ProjectsBanner';
import Footer from '../components/ui/Footer';

export default function Home() {

  const particlesInit = useCallback(async (engine) => {

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
 
  }, []);

  return (

    <Fragment>
    <div className="py-0 dark:bg-[#0F172A] bg-gray-100">
      
      <Head>
        <title>Souritra Kar</title>
        <meta name="description" content="Personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Particles className='h-full w-screen' params={particlesConfig} init={particlesInit} loaded={particlesLoaded} />
      </div>

      <Navbar/>

      <HeroSection/>

      <DeveloperBanner/>

      <ProjectsBanner/> 

      <Footer/>

    </div>

    </Fragment>
  )
}
