import { SelectedPage } from '@/shared/types';
import React from 'react'
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import { ActionButton } from '@/components/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { isAboveMediumSceens } from '@/utils/IsAboveMediumScreens';
import { motion } from 'framer-motion';


type Props = {
  id: string;
  setSelectedPage: (value: SelectedPage) => void
}

const Home =<T extends Props> ({id, setSelectedPage}: T) => {
  
  return (
    <section id={id} className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0" >
      <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className='z-10 mt-32 md:basis-3/5'>
          <motion.div 
          className='md:-mt-20'
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0}
          }}

          >
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:left-20 before:z-[-1] md:before:content-evolvetext'>
                <img alt='home' src={HomePageText} />
              </div>
            </div>
            <p className='mt-8 text-sm'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ullam assumenda et sed odio sint dolor ipsa a. Nobis aliquam sunt labore ratione architecto officia cupiditate eveniet sequi quam? Accusamus?
            </p>
          </motion.div>
         
          <motion.div 
            className='mt-8  flex items-start gap-8 md:justify-start'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className='text-sm font-bold to-primary-500 underline hover:text-secondary-500'
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
       
        <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end'>
          <img  alt="home-pagegraphic" src={HomePageGraphic}/>
        </div>
      </motion.div>
      {
        isAboveMediumSceens() && (
          <div className='h-[150px] w-full bg-primary-100 py-10'>
            <div className='mx-auto w-5/6'>
              <div className='flex w-3/5 items-center justify-between gap-8'>
                <img alt="red-bull-sponsor" src={SponsorRedBull} />
                <img alt="forbes-sponsor" src={SponsorForbes} />
                <img alt="fortune-sponsor" src={SponsorFortune} />
              </div>
            </div>
          </div>
        )
      }
    </section>
  )
}

export default Home