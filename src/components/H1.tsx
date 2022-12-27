import React from 'react'

type Props = {
  children: React.ReactNode
}

const H1 = <T extends Props> ({children}: T) => {
  return (
    <h1 className='basis-3/5 font-montserrat text-3xl font-bold'>
      {children}
    </h1>
  )
}

export default H1