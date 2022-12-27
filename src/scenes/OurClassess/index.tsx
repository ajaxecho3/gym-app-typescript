import React from 'react'
import { SelectedPage } from '@/shared/types';
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import {motion} from 'framer-motion'
import H1 from '@/components/H1';
type Props = {
  id: string;
  setSelectedPage: (value: SelectedPage) => void
}

interface IClass { name: string, description?: string, image: string }
const classes:Array<IClass> = [
  {
    name: "Weigth Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis, iste impedit quod consequatur nostrum hic iure, pariatur iusto fuga suscipit facilis, in repellat. Saepe reprehenderit dolor quidem animi ad.",
    image: image1
  },
  {
    name: "Weigth Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis, iste impedit quod consequatur nostrum hic iure, pariatur iusto fuga suscipit facilis, in repellat. Saepe reprehenderit dolor quidem animi ad.",
    image: image2
  },
  {
    name: "Weigth Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis, iste impedit quod consequatur nostrum hic iure, pariatur iusto fuga suscipit facilis, in repellat. Saepe reprehenderit dolor quidem animi ad.",
    image: image3
  },
  {
    name: "Weigth Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis, iste impedit quod consequatur nostrum hic iure, pariatur iusto fuga suscipit facilis, in repellat. Saepe reprehenderit dolor quidem animi ad.",
    image: image4
  },
  {
    name: "Weigth Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis, iste impedit quod consequatur nostrum hic iure, pariatur iusto fuga suscipit facilis, in repellat. Saepe reprehenderit dolor quidem animi ad.",
    image: image5
  },
  {
    name: "Weigth Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis, iste impedit quod consequatur nostrum hic iure, pariatur iusto fuga suscipit facilis, in repellat. Saepe reprehenderit dolor quidem animi ad.",
    image: image6
  },
]

const OurClasses = <T extends Props>({id, setSelectedPage}: T) => {
  const overLayStyles  = `p-5 absolute z-30 flex h-[380] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`
  return (
    <section id={id} className="w-full bg-primary-100 py-40">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
        <motion.div
          className='mx-auto w-5/6'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
         <div className='md:w-3/5'>
            <H1>
              OUR CLASSES
            </H1>
            <p className='py-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, blanditiis libero? Porro incidunt aliquam, natus, ducimus dicta explicabo, odit maiores id debitis error accusamus veritatis in ab corporis distinctio nobis.</p>
         </div>
        </motion.div>
        <div className='mt-10 h-[352px] w-full overflow-x-auto overflow-y-hidden'>
          <ul className='w-[28000px] whitespace-nowrap'>
            {
              classes.map((item, index) => (
                <li className='relative mx-5 inline-block h-[380px] w-[450px]' key={index}>
                  <div className={overLayStyles}>
                    <p className='text-2xl'>{item.name}</p>
                    <p className='mt-5'> {item.description}</p>
                  </div>
                  <img alt={`${item.image}`} src={item.image} />
                </li>
              ))
            }
          </ul>

        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses