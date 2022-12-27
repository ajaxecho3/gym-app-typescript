import { SelectedPage } from '@/shared/types';
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

function Link<T extends Props>({ page, selectedPage, setSelectedPage }: T) {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage
  return ( 
    <AnchorLink
    className={`${selectedPage  === lowerCasePage ? "text-primary-500" : ""}
      transtion duration-500 hover:text-primary-300
    `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link