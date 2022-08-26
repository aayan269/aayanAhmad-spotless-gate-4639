import './slide.css'
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {TbMessageCircle2} from "react-icons/tb";
import {AiOutlineRetweet,AiOutlineHeart,AiOutlineTwitter} from "react-icons/ai";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
let data=[
    {image:"https://pbs.twimg.com/profile_images/1448520867168784385/dCBGUked_bigger.jpg",name:"Martin Therkelson",message:"Yesterday I passed the AZ-104 exam,Pluralsight courses are great to help prepare for these exams, learned a few things, definitely would recommend if you need to do some PS."},
    {image:"https://pbs.twimg.com/profile_images/1308211174429749248/ugAopGfO_bigger.jpg",name:"William Masci",message:"Just passed the DEVASC 200-901 exam! Tough exam,but it was a great experience.I'm excited to be a part of the #DEVNET Class of 2020! also big thanks to Pluralsight. I highly recommend it if you're studying for DEVASC"},
    {image:"https://pbs.twimg.com/profile_images/1289580947009155072/uegFC50F_bigger.jpg",name:"Judy Mathew",message:"The best thing that happened to me in 2020 wasGADS2020 which introduced me to @Pluralsight. My interest in IT and programming peaked when i joined the program."},
    {image:"https://pbs.twimg.com/profile_images/1341497846168694786/Ls0jopTm_bigger.jpg",name:"Skyler Ketty",message:" Just finished Automation with windows Powershell Scripts on pluralsight from Jeff-Hicks.It was really well explained, learned a few things, definitely would recommend if you need to do some PS"},
    {image:"https://pbs.twimg.com/profile_images/1537214776018972672/KWMnJ2bB_bigger.jpg",name:"Javier Montero",message:"I love the schedule reminders feature that Pluralsight has added (well not sure when,but today I saw that) you make more simple my life,good job guys"},
    {image:"https://pbs.twimg.com/profile_images/1319270197702782979/TbWPouzl_bigger.jpg",name:"Kayode Omotype",message:"One reason I love Pluralsight tarining is how they curate similar courses on asubject into a learning path. The diversity of content delivery & repetition of salient points by the SMEs helps to make the learning process efficient."}
]
export default function Slider(){
    return(
        <div className='pre-wrapper'>
          <h2 className='ppp'>What our users are saying</h2>
        <div className="wrapper">
       
  
        <Splide
          options={ {
            perPage: 3,
            height : '250px',
            rewind : true,
            gap    : '1rem',
          } }
          aria-labelledby="basic-example-heading"
          onMoved={ ( splide, newIndex ) => {
            // eslint-disable-next-line
            console.log( 'moved', newIndex );
  
            // eslint-disable-next-line
            console.log( 'length', splide.length );
          } }
        >
          { data.map( slide => (
            <SplideSlide key={ slide.name }>
              <div className="tweetbox">
            <div className="tweetbox-head">
                <div className='profile'>
                    <div className='image'><img src={slide.image} alt="" /></div>
                    <div className='name'><h2>{slide.name}</h2></div>
                </div>
                <div className='tweet-logo'><AiOutlineTwitter style={{color:"#1da1f2",top:"8",left:"25",position:'relative',width:"35px",height:"35px"}}/></div>
            </div>
            <div className="tweetbox-middle">
              {slide.message}
            </div>
            <div className="tweetbox-lower">
                <div className='tweetbox-lowericons'><TbMessageCircle2 />
            <AiOutlineRetweet/>
            <AiOutlineHeart/></div></div>
        </div>
            </SplideSlide>
          ) ) }
        </Splide>
        
         
{/* <div>
       {data.map((item)=>(
        <div className="tweetbox">
            <div className="tweetbox-head">
                <div className='profile'>
                    <div className='image'><img src={item.image} alt="" /></div>
                    <div className='name'><h2>{item.name}</h2></div>
                </div>
                <div className='tweet-logo'><AiOutlineTwitter style={{color:"#1da1f2",top:"8",left:"25",position:'relative',width:"35px",height:"35px"}}/></div>
            </div>
            <div className="tweetbox-middle">
              {item.message}
            </div>
            <div className="tweetbox-lower">
                <div className='tweetbox-lowericons'><TbMessageCircle2 />
            <AiOutlineRetweet/>
            <AiOutlineHeart/></div></div>
        </div>
       ))} 
        </div>  */}
        
        </div>
        </div>
    )
}