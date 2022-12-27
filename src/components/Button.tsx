import { SelectedPage } from '@/shared/types';
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void
}


export const ActionButton = <T extends Props>({children, setSelectedPage}: T) => {
  return (
    <AnchorLink href={`${SelectedPage.ContactUs}`} onClick={() => setSelectedPage(SelectedPage.ContactUs)} className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'>
      {children}
    </AnchorLink>
  )
}

const Button = (props: Props) => {
  return (
    <button>Button</button>
  )
}

export default Button