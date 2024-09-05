import { useEffect, useState } from "react"
import { services } from "../Constants/index.jsx"
import servicesLatestTech from '../assets/servicesLatestTech.jpg'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi"

import slide1 from '../assets/headphone1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import slide4 from '../assets/slide4.jpg'
export const Services=()=>{

    const [index,setIndex]=useState(0)
    const headphones=[slide1,slide2,slide3,slide4]



    const handleSlide=(action)=>{

        if(action=="previous"){
            if(index==0){
                setIndex(headphones.length-1)
            }
            else{
                setIndex(index-1)
            }

            
       
        }
        else if(action == 'next'){
            if(index==headphones.length-1){
                setIndex(0)
            }
            else{
                setIndex(index+1)
            }
            
        }

    }

    return(
        <div className="w-full  text-white border-slate-400 p-2" id="services">


            <h4 className="text-4xl text-center uppercase text-heading">services</h4>

                {/* services items 3 */}
            <div className=" gap-4 p-8  flex max-md:flex-col  items-center justify-center flex-1">
                {services.map((item)=>(
                    // each card
                    <div className="bg-neutral-800  rounded-3xl gap-3 p-3 min-h-[200px] capitalize flex flex-col items-center justify-center flex-1 md:w-1/3 w-full"  key={item.title} >
                        <span className="bg-inherit ">{item.icon}</span>
                        <h3 className="text-3xl bg-inherit">{item.title}</h3>
                        <p className="text-center bg-inherit">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus fermentum scelerisque. Proin vel vulputate urna, non feugiat neque. In cursus fermentum scelerisque.</p>
                    </div>
                ))}
            </div>

                <div className="border-blue-500 flex max-md:flex-col  flex-1  items-center justify-evenly max-md:gap-4">

                    {/* left div image part */}
                    <div className=" w-1/3 max-md:w-full  border-red-500 flex items-center gap-4 justify-center ">

                    <span className="border rounded-full p-1 cursor-pointer"
                    onClick={()=>handleSlide("previous")}><HiOutlineChevronLeft /></span>
                        <img src={headphones[index]} alt="" className="rounded-full max-sm:w-1/2"  />
                    <span onClick={()=>handleSlide("next")}
                        className="border rounded-full p-1 cursor-pointer"><HiOutlineChevronRight /></span>
                    </div>




                    {/* right part heading and para and button */}
                    <div className="flex w-1/2 max-md:w-full  flex-col justify-center items-start gap-3  p-3 " >
                    
                    <h3 className="leading-normal text-neutral-300 font-palanquin capitalize text-3xl md:text-5xl " >the latest headphones with the latest technology</h3>
                    <p className="text-slate-400 font-montserrat">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus fermentum scelerisque. Proin vel vulputate urna, non feugiat neque. In cursus fermentum scelerisque.</p>
                    <button className="bg-[#c9184a] px-6 py-2 rounded text-sm leading-normal hover:bg-[#9e2a2b] font-montserrat">Learn More</button>


                    <div className="bg-slate-900 border border-slate-500 capitalize text-5xl font-palanquin font-semibold p-4 rounded-3xl
                    ">
                        <h3 className="text-center text-transparent bg-clip-text bg-gradient-to-tr to-white from-blue-800 ">Headphones with good qualtiy and affordable prices
                        </h3></div>
                    </div>
                </div>


        </div>
    )
}