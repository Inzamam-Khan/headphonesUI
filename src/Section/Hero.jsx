import { useState } from "react"
import { headphoneThumbnailItems } from "../Constants/index.jsx"
import headphone1 from '../assets/headphone1.jpg'
export const Hero=()=>{

    const [bigImg,setBigImg]=useState(headphone1)
    return(
        <div id="hero" className="max-md:mt-[6rem] w-full border-blue-500  bg-neutral-800  md:p-8 flex max-md:flex-col-reverse gap-2 items-center justify-center ">
            {/* left div */}

            <div className="text-slate-100 md:w-1/2  border-red-500 bg-inherit max-md:w-full  ">

                {/* heading */}
                <h3 className="text-5xl md:text-7xl  bg-neutral-800 font-palanquin max-w-full p-2 ">Headphones Wireless</h3>
                <p className="font-montserrat text-sm leading-normal  bg-inherit my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus fermentum scelerisque. Proin vel vulputate urna, non feugiat neque. In cursus fermentum scelerisque.</p>
                <button className="bg-[#c9184a] px-6 py-1 rounded text-sm leading-normal hover:bg-[#9e2a2b]">Details</button>


                <div className=" flex flex-col gap-1 mt-12  items-center  rounded-3xl p-3  max-md:w-full ">

                {/* first div heading */}
                <div className="bg-inherit mb-2 flex items-center gap-4 ">

                <div className="w-20 bg-white h-[1px] "></div>
                <h4 className="bg-inherit text-center font-palanquin"> TOP COLORS FOR YOU</h4>
                <div className="w-20 bg-white h-[1px] "></div>
                
                </div>


                {/* second div image thumbnail & details */}

                <div className="flex  items-center w-full max-md:flex-wrap max-md:gap-3 ">
                        
                        
                        {headphoneThumbnailItems.map((item,index)=>(

                            <div onClick={()=>{setBigImg(item.icon)}} key={index} className={`${bigImg == item.icon ? ` border border-green-500 mx-2`:` border border-gray-500` } 
                            " cursor-pointer flex flex-col flex-1 items-center gap-2  bg-neutral-800 p-2 rounded-xl mx-2 max-md:min-w-full justify-center   "`}    > 

                                <img src={item.icon} alt=""  className="max-w-16 rounded-full hover:border border-white"/>
                                <div className=" uppercase rounded-xl bg-inherit text-center">
                                    <h3 className="bg-neutral-800">{item.color}</h3>
                                    <span className=" text-3xl bg-neutral-800 ">$</span>
                                    {item.price}

                                </div>
                            </div>
                        ))}
                </div>


                </div>
            </div>




            {/* right div image part */}
            <div className="w-1/2  rounded-full p-2 bg-gradient-to-tr from-blue-400 to-red-500">
                <img src={bigImg} alt="" className=" w-full rounded-full  p-2  " />
            </div>
        </div>
    )
}