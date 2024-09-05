import { useSelector } from "react-redux"
import { Header } from "./Components/Header"
import { Hero } from "./Section/Hero";
import { Services } from "./Section/Services";
import { Latest } from "./Section/Latest";
import { Footer } from "./Section/Footer";
import { Reviews } from "./Section/Reviews";



function App() {

  
    return (
   <div className="border-red-500   p-2 flex flex-col items-center gap-3 max-w-[97%] mx-4 ">
    {/* header/navbar */}
    <Header/>
    <Hero/>
    <Services/>
    <Latest/>
    <Reviews/>
    <Footer/>
   </div>
  )
}

export default App
