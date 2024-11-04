import { useState, useEffect } from "react"
import BookingTable from "./components/BookingTable"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import PopularFoods from "./components/PopularFoods"
import Testimonials from "./components/ui/Testimonials"

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="font-primary relative">
      <div
        className={`fixed w-full container mx-auto top-0 left-1/2 -translate-x-1/2 z-50 
        transition-all duration-300 ease-in-out
        ${isScrolled ? 'bg-[#c4342b] px-4 py-2 shadow-xl' : 'bg-transparent px-0'}`}>
        <Navbar />
      </div>
      <Header />
      <div className="space-y-28 mt-28">
        <Features />
        <PopularFoods />
        <BookingTable />
        <Testimonials />
        <Footer />
      </div>
    </div>
  )
}

export default App
