import { MdOutlineSecurity } from 'react-icons/md'
import headphone1 from '../assets/headphone1.jpg'
import headphone2 from '../assets/headphone2.jpg'
import headphone3 from '../assets/headphone3.jpg'
import { IoSettingsOutline } from 'react-icons/io5'
import { FcStatistics } from 'react-icons/fc'

import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import slide4 from '../assets/slide4.jpg'

import slide5 from '../assets/servicesLatestTech.jpg'
import slide6 from '../assets/slide6.jpg'
import slide7 from '../assets/slide7.jpg'
import slide8 from '../assets/slide8.jpg'
import slide9 from '../assets/slide9.jpg'
import slide10 from '../assets/slide10.jpg'
import slide11 from '../assets/slide11.jpg'

import janeDoe from '../assets/janeDoe.png'
import user1 from '../assets/user1.png'

export const reviews=[
    {
        model:"Audioquest",
        review:"",
        profilePic:"https://bit.ly/dan-abramov",
        userName:"Dan Abrahmov"
    },
    {
        model:"Audeze",
        review:"",
        profilePic:"https://bit.ly/sage-adebayo",
        userName:"Kola Tioluwani"
    },
    {
        model:"AKG",
        review:"",
        profilePic:"https://bit.ly/prosper-baba",
        userName:"Prosper Otemuyiwa"
    },
    {
        model:"Beyerdynamic",
        review:"",
        profilePic:"https://bit.ly/code-beast",
        userName:"Christian Nwamba"
    },

    {
        model:"Audeze",
        review:"",
        profilePic:"https://bit.ly/ryan-florence",
        userName:"Kent Dodds"
    },
    {
        model:"Audeze",
        review:"",
        profilePic:"https://bit.ly/kent-c-dodds",
        userName:"Ryan Florence"
    },
    {
        model:"Avantree",
        review:"",
        profilePic:user1,
        userName:"Segun Adebayo"
    },{
        model:"AKG",
        review:"",
        profilePic:janeDoe,
        userName:"Jane Doe"
    },


    
]


export const footerLinks=[
    {
        id:1,
        title:'home',
        link:'#hero'



    },
    {
        id:2,
        title:'services',
        link:'#services'



    },
    {
        id:3,
        title:'reviews',
        link:'#reviews'



    },
    {
        id:4,
        title:'contact-us',
        link:'#'



    }
]


export const services=[
    {
        icon:<MdOutlineSecurity size={40} />,
        title:"security",
        

    },
    {
        icon:<IoSettingsOutline size={40} />,
        title:"guarantee",
        

    },
    {
        icon:<FcStatistics size={40} />,
        title:"affordability",
        

    },
]


export const latest=[
    {
        icon:headphone1,
        title:"Audeze",
        description:"",
        features:"",
        price:"19.00",
        id:1
    }, {
        icon:headphone2,
        title:"AKG",
        description:"",
        features:"",
        price:"27.00",id:2
    }, {
        icon:headphone3,
        title:"Audioquest",
        description:"",
        features:"",
        price:"20.00",id:3
    }, {
        icon:slide1,
        title:"Avantree",
        description:"",
        features:"",
        price:"29.00",
        id:4
    }, {
        icon:slide2,
        title:"Avantree",
        description:"",
        features:"",
        price:"15.00",
        id:5
    }, {
        icon:slide3,
        title:"Avantree",
        description:"",
        features:"",
        price:"24.00",
        id:6
    }, {
        icon:slide4,
        title:"Beyerdynamic",
        description:"",
        features:"",
        price:"16.00",
        id:7
    }, {
        icon:headphone1,
        title:"Beyerdynamic",
        description:"",
        features:"",
        price:"19.99",
        id:8
    }, {
        icon:headphone2,
        title:"Beyerdynamic",
        description:"",
        features:"",
        price:"14.34",
        id:9
    }, {
        icon:headphone3,
        title:"Audeze",
        description:"",
        features:"",
        price:"23.34",id:10
    }, {
        icon:slide5,
        title:"Circumaural",
        description:"",
        features:"",
        price:"12.56",id:11
    }, {
        icon:slide6,
        title:"Audioquest",
        description:"",
        features:"",
        price:"24.99",id:12
    }, {
        icon:slide7,
        title:"Audeze",
        description:"",
        features:"",
        price:"27.99",id:13
    }, {
        icon:slide8,
        title:"Circumaural",
        description:"",
        features:"",
        price:"19.00",id:14
    }, {
        icon:slide9,
        title:"Audioquest",
        description:"",
        features:"",
        price:"15.99",id:15
    }, 
    {
        icon:slide10,
        title:"Circumaural",
        description:"",
        features:"",
        price:"7.999",id:16
    }, 
    {
        icon:slide11,
        title:"Beyerdynamic",
        description:"",
        features:"",
        price:"29.599",id:17
    }, 
    
]

export const menuItems=[
    {
        title:'HOME',
        icon:"",
        id:1
    },{
        
        title:'CATEGORIES',
        icon:"",
        id:2
    },{
        
        title:'BLOG',
        icon:"",
        id:3
    },{
        
        title:'ABOUT',
        icon:"",
        id:4
    },{
        
        title:'CONTACT',
        icon:"",
        id:5
    }
]


export const headphoneThumbnailItems=[
    {
        id:1,
        color:"sandstone",
        price:"5",
        icon:headphone1
    },  {
        id:2,
        color:"Navy",
        price:"3.45",
        icon:headphone2
    },  {
        id:3,
        color:"deep brown",
        price:"2.56",
        icon:headphone3
    }
]