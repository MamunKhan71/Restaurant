import BookingTable from "./components/BookingTable"
import Features from "./components/Features"
import Header from "./components/Header"
import PopularFoods from "./components/PopularFoods"
import Testimonials from "./components/ui/Testimonials"

function App() {
  return (
    <div className="font-primary ">
      <Header />
      <div className="space-y-28 mt-28">
        <Features />
        <PopularFoods />
        <BookingTable />
        <Testimonials />
      </div>
    </div>
  )
}

export default App
