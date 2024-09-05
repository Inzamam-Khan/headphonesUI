import { footerLinks, menuItems } from "../Constants/index.jsx"


export const MenuItems=({isOpen,setIsOpen})=>{
    return(
        <div className="flex  flex-1 max-md:h-full  ">
        <ul className="  flex items-center max-md:justify-start justify-center  border-blue-500 w-full md:gap-8 p-4 max-md:flex-col max-md:p-8 gap-10">
            {footerLinks.map((item)=>(
            <a onClick={()=>setIsOpen(!isOpen)} href={item.link} key={item.id} className=" uppercase hover:text-slate-500 cursor-pointer max-md:border border-slate-500 max-md:p-3 max-md:min-w-[7rem] max-md:rounded-xl text-center "> 
            
                <li>
                    <h4 >{item.title}</h4>
                </li>
                </a>
            ))}
        </ul>
        </div>
    )
}