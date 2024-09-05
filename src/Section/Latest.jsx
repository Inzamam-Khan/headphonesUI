import { latest } from "../Constants/index.jsx"
import slide1 from '../assets/slide1.jpg'

export const Latest = () => {
    return (
        <div className=" text-white border-b border-slate-400 p-2 w-full">


            <h4 className="text-4xl text-center uppercase text-heading">latest</h4>

            {/* services items 3 */}
            <div className=" gap-2 p-4 overflow-x-auto  flex   border-red-500 items-center justify-start max-md:w-full w-full ">

              
                {latest.map((item)=>(
                // each card
                 <div key={item.id} className="cursor-pointer border flex flex-col items-center p-3 flex-1 min-w-[13rem] min-h-[19rem] space-y-4 border-slate-500 rounded-xl">

                    <div className="w-45">
                        <img src={item.icon} alt="" className="rounded-2xl h-[10rem] max-h-[10rem] min-w-[10rem] object-fill " />
                    </div>

                    <div className="text-center  font-palanquin p-2 ">
                        <h3 className="text-xl font-semibold bg-gradient-to-r
                          from-[#bfd7ea] to-[#fbba72] bg-clip-text text-transparent ">{item.title}</h3>
                        <span className=" text-neutral-100 text-xl">$ </span>
                        {item.price}
                        <p className="text-slate-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            ))} 



            </div>

        </div>
    )
}