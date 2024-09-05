import { reviews } from "../Constants"

export const Reviews=()=>{
    return(

            <div className="w-full flex flex-col flex-1 gap-4 " id="reviews">


        <h4 className="text-4xl text-center  uppercase text-heading" >Reviews</h4>

            {/* card container */}
        <div className="flex w-full  border-slate-400 flex-wrap p-4 items-center justify-stert gap-4" >

            {reviews.map((item,index)=>(

<div key={index} className="text-white capitalize flex flex-col items-center justify-start p-2 border border-slate-600 max-md:w-full w-[13rem] min-w-[13rem]  min-h-[15rem] mx-2 rounded-xl">

<div className=" w-30 flex  items-center gap-2  ">
    <img src={item.profilePic} alt="" className="rounded-full max-h-[5rem] h-[5rem] min-w-[5rem]" />
    <span>{item.userName}</span>
</div>

<div className="text-center  font-palanquin p-2 ">
        <h3 className="text-xl font-semibold bg-gradient-to-r
          from-[#bfd7ea] to-[#fbba72] bg-clip-text text-transparent ">{item.model}</h3>
        
        <p className="text-slate-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        consectetur adipiscing elit.consectetur adipiscing elit.consectetur adipiscing elit.
        </p>
    </div>
</div>

            ))}
            
            {/* each card */}
           


        </div>


        </div>
    )
}