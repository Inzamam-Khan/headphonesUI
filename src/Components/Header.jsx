import { RxCross2, RxHamburgerMenu } from 'react-icons/rx'
import appLogo from '../assets/appLogo.jpg'
import { MenuItems } from './MenuItems'
import { FaHeadphones } from 'react-icons/fa'
import { useState } from 'react'

export const Header=()=>{
    const [isOpen,setIsOpen]=useState(false)
    return(
        <nav className="max-md:border-b   max-md:fixed border-white  bg-neutral-900 text-slate-100 max-md:w-[90vW] w-full ">

            <div className="h-[5rem]  z-50  p-3 flex  justify-center max-md:justify-between items-center gap-8 w-full">

                {/* logo */}
                <div className='flex items-center  border-black justify-center gap-4 '>
                    {/* <img src={appLogo} alt=""  bg-blend-color-burn' /> */}
                    <FaHeadphones className=' rounded-full  object-cover items-center' size={"1.5rem"}/>
                    <h3 className='text-xl font-semibold bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text  '>Headphones4U</h3>
                </div>


                {/* menu Items */}
                <div className="max-md:hidden">
                <MenuItems/>
                </div>





                {/* hamburger menu for max-md */}
                <div className='md:hidden' onClick={()=>setIsOpen(!isOpen)}>
                    {isOpen? (<RxCross2 />):(
                        <RxHamburgerMenu />
                    )}
                
                </div>




            </div>


            <div className={`fixed transform ease-in-out duration-500 transition-all ${isOpen? `translate-x-[20rem] ` :`translate-x-[50rem]`}
                 border-blue-500 w-[35vW] min-h-[10rem] h-[100vh] md:hidden `} >
                <MenuItems/>
                 </div>

        </nav>
    )
}