import { IBenefit, SelectedPage } from '@/shared/types';
import React from 'react'
import {motion} from 'framer-motion'
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import H1 from '@/components/H1';
import Benefit from './Benefit';
import { ActionButton } from '@/components/Button';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
type Props = {
  id: string;
  setSelectedPage: (value: SelectedPage) => void
}

const benefits:Array<IBenefit> = [
  {
    icon: <HomeModernIcon className='h-6 w-6' />,
    title: "State of the Art Facilities",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum fugit. Mollitia labore consectetur nihil dolor, error tempora, commodi eos aliquam reprehenderit rem expedita cupiditate et id laborum distinctio suscipit?"
  },
  {
    icon: <UserGroupIcon className='h-6 w-6' />,
    title: "100's of Diverse Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum fugit. Mollitia labore consectetur nihil dolor, error tempora, commodi eos aliquam reprehenderit rem expedita cupiditate et id laborum distinctio suscipit?"
  },
  {
    icon: <AcademicCapIcon className='h-6 w-6' />,
    title: "Expert and Pro Trainers",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum fugit. Mollitia labore consectetur nihil dolor, error tempora, commodi eos aliquam reprehenderit rem expedita cupiditate et id laborum distinctio suscipit?"
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2}
  }
}

const Benefits = <T extends Props>({id, setSelectedPage}: T) => {
  return (
    <section id={id} className="mx-auto m-h-full w-5/6 py-20 ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div 
          className='md:my-5 md:w-3/5'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <H1>MORE THEN JUST GYM</H1>
          <p className='my-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, repellendus quae incidunt inventore dolor quod rerum pariatur qui iusto odit tempore temporibus velit, quisquam deserunt laudantium enim error earum aliquid.</p>
        </motion.div>

        <motion.div 
        className='md:flex items-center justify-between gap-8 mt-5'
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount: 0.5}}
        variants={container}
        
        >
          {
            benefits.map((benefit) => (
              <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setSelectedPage={setSelectedPage} />  
              
            ))
          }
        </motion.div>

        <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
          
          <img className='mx-auto' alt="benefits" src={BenefitsPageGraphic} />

         
          <div>
              <div className='relative'>
                <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
                <motion.div className='relative'
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                    <H1>MILLIONS OF HAPPY  MEMBERS GETTING {" "} <span className='text-primary-500'>FIT</span></H1>
                  </motion.div>
                </div>
              </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <p className='my-5 '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed architecto natus nisi iure numquam sapiente libero recusandae est, maiores quidem, hic error veniam quaerat animi enim dolorum excepturi exercitationem.
              </p>
              <p className='my-5 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem veritatis cum, deserunt commodi assumenda magnam aperiam quam vero sequi delectus quasi ad error. Nemo, deserunt amet ea consequatur commodi tempora.
              </p>
            </motion.div>

            <div className='relative mt-16'>
              <div className='before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles'>
                <ActionButton setSelectedPage={setSelectedPage} >
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits