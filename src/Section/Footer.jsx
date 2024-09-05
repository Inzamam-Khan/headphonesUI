import { IoIosCall } from "react-icons/io"
import { IoLocationOutline } from "react-icons/io5"
import { MdLocationOn } from "react-icons/md"
import { footerLinks } from "../Constants"
import { LuCopyright } from "react-icons/lu"

export const Footer = () => {
    return (
        <div className=" w-full rounded-3xl   bg-neutral-800 md:h-[20rem]  text-neutral-200 flex max-md:flex-col items-center justify-evenly">


            {/* left div */}
            <div className="rounded-3xl  w-full flex  flex-col flex-1 p-4 md:w-1/3 bg-inherit gap-5 text-center items-center justify-start h-full">
                <h3 className='font-palanquin text-5xl   font-semibold bg-gradient-to-t  from-red-500 to-blue-500 text-transparent bg-clip-text'>
                    Headphones4U</h3>
                <p className="bg-inherit font-montserrat">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus fermentum scelerisque. Proin vel vulputate urna, non feugiat neque. In cursus fermentum scelerisque.</p>
                <div className=" bg-inherit flex items-center">

                    <IoIosCall size={30} fill="white" className="bg-inherit" />
                    <span className="font-montserrat text-lg font-semibold ml-2 bg-inherit">+91-346XXXX989</span>
                </div>

                <div className=" bg-inherit flex items-center">

                    <MdLocationOn size={30} fill="white" className="bg-inherit" />
                    <span className="font-montserrat text-lg font-semibold ml-2 bg-inherit uppercase">Mumbai-India</span>
                </div>


            </div>


            {/* right div lnks */}
            <div className="md:w-1/2 rounded-3xl border-red-500 flex flex-col items-center justify-start text-center p-4 bg-inherit gap-5 h-full">

                <h3 className='font-palanquin text-5xl font-semibold bg-gradient-to-t  from-red-500 to-blue-500 text-transparent bg-clip-text'>
                    Quick Links</h3>

                <ul className="bg-inherit  full flex flex-wrap py-2 gap-4 items-center justify-center">
                    {footerLinks.map((item, index) => (
                        <a key={index} href={item.link} target={item.target} className="bg-inherit w-1/3 border border-slate-500 p-1 rounded-xl hover:text-slate-400 cursor-pointer font-montserrat text-xl capitalize">
                            <li className="bg-inherit" >

                                {item.title}

                            </li>
                        </a>
                    ))}

                    <a href="https://github.com/Inzamam-Khan?tab=repositories" target="_blank" className="bg-inherit w-1/3 border border-slate-500 p-1 rounded-xl hover:text-slate-400 cursor-pointer font-montserrat text-xl capitalize">
                        <li className="bg-inherit" >

                            github

                        </li>
                    </a>

                    <a href="#" target="_blank" className="bg-inherit w-1/3 border border-slate-500 p-1 rounded-xl hover:text-slate-400 cursor-pointer font-montserrat text-xl capitalize">
                        <li className="bg-inherit" >

                            privacy & policy

                        </li>
                    </a>
                </ul>

                <span className="bg-inherit text-xl font-semibold font-palanquin ">
                    <LuCopyright className="inline mr-2 bg-inherit" size={30} />All Rights Reserved 2024</span>

            </div>
        </div>
    )

}


// ,{
//     id:5,
//     title:'github',
//     link:",
//     target:"_blank"



// }
// ,{
//     id:6,
//     title:'',
//     link:'#'



// }