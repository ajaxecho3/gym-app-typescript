import Navbar from '@/scenes/navbar'
import { useEffect } from 'react';
import { useState } from 'react'
import Benefits from './scenes/Benefits';
import ContactUs from './scenes/ContactUs';
import Footer from './scenes/Footer';
import Home from './scenes/Home';
import OurClasses from './scenes/OurClassess';
import { SelectedPage } from './shared/types'

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopofPage, setIsTopofPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopofPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) setIsTopofPage(false)
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopofPage}
        selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home id={SelectedPage.Home} setSelectedPage={setSelectedPage} />
      <Benefits id={SelectedPage.Benefits} setSelectedPage={setSelectedPage} />

      <OurClasses id={SelectedPage.OurClasses} setSelectedPage={setSelectedPage} />
      <ContactUs id={SelectedPage.ContactUs} setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}

export default App
