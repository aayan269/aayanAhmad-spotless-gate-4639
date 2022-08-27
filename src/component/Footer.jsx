import './Footer.css';
import play from "./ps-icon.png"
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaYoutube } from "react-icons/fa";
import {BsInstagram} from "react-icons/bs"
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
export default function Footer(){
    const Navigate=useNavigate()
    const handleFer=()=>{
        Navigate('/free')
    }
    return(<div>
        <div className='prefooter'>
            <h1>Insights that give you an edge</h1>
            <Button position='relative' onClick={handleFer} top='40%' background={'rgb(131,58,180) linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'} height='50px' width='220px'>TRY FOR FREE</Button>
        </div>
        <div className="container">
            <div className='footer'>
                <div className='sec'>
                <h1>SOLUTIONS</h1>
            <div className="sec1">
               <p>Pluralsight skill</p>
               <p>Pluralsight flow</p>
               <p>Government</p>
               <p>Gift of Pluralsight</p>
               <p>View Pricing</p>
               <p>Contact Sales</p>
               <p>Skill up for free</p>
            </div></div>
            <div className='sec'>
                <h1>PLATFORM</h1>
            <div className="sec2">
               <p>Browse library</p>
               <p>RoleIQ</p>
               <p>Skill IQ</p>
               <p>Iris</p>
               <p>Authors</p>
               <p>Professional Services</p>
               
            </div></div>
            <div className='sec'>
                <h1>COMPANY</h1>
            <div className="sec3">
            <p>About us</p>
               <p>Customer stories</p>
               <p>Careers</p>
               <p>Blog</p>
               <p>Newsroom</p>
               <p>Resource centre</p>
               <p>Guides</p>
            </div></div>
            <div className='sec'>
                <h1>RESOURCES</h1>
            <div className="sec4">
            <p>Download Pluralsight</p>
               <p>Events</p>
               <p>Teach</p>
               <p>Partners</p>
               <p>Affiliate Partners</p>
               <p>PluralsightOne.org</p>
               <p>Subscribe</p>
            </div></div>
            <div className='sec05'>
                <h1>SUPPORTS</h1>
            <div className="sec5">
            <p>Contact</p>
               <p>Help center</p>
               <p>IP allowlist</p>
               <p>Sitemap</p>
              
            </div></div>
            
            </div>
            {/* <h1 className='hola'>like</h1> */}
             </div>  
             <div className='footer2'>
             <div className='footer21'>
                <div className='footer211'><img src={play} alt="" /></div>
                <p>Copyright © 2004 - 2022 Pluralsight LLC. All rights reserved.</p>
             </div>
             <div className='footer22'>
                <h2>Terms of Use</h2>
                <h2>Privacy Notice</h2>
                <h2>Modern slavery Act Transparecy Statement</h2>
             </div>
             <div className='footer23'>
             < FaFacebookF style={{color:"#fff",top:"20",left:"25",position:'relative'}}  />
             <BsInstagram style={{color:"#fff",top:"20",left:"25",position:'relative'}}/>
             <FaTwitter style={{color:"#fff",top:"20",left:"25",position:'relative'}}/>
             <FaLinkedinIn  style={{color:"#fff",top:"20",left:"25",position:'relative'}}/>
             <FaYoutube  style={{color:"#fff",top:"20",left:"25",position:'relative'}}/>
             </div>
             </div>
             </div>
    )
}