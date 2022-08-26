import { Button, Switch, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import Slider from '../slider/slider';
import './Free.css';
import SliderMarks from './Freeslide';
import {MdOutlineCheck} from "react-icons/md"
let first=<MdOutlineCheck style={{color:"#fff",fontSize:"30px",left:"80%",position:'relative',color:"rgb(196,154,20)"}}/>
let third=<MdOutlineCheck style={{color:"#fff",fontSize:"30px",left:"90%",position:'relative',color:"rgb(236,0,140)"}}/>
let fourth=<MdOutlineCheck style={{color:"#fff",fontSize:"30px",left:"80%",position:'relative',color:"rgb(236,0,140)"}}/>
let tdata=[
  {name:"Paths",frst:{first},scnd:{first},thrd:{third},frth:{fourth}},
  {name:"Channels",frst:{first},scnd:{first},thrd:{third},frth:{fourth}},
  {name:"Discussion",frst:{first},scnd:{first},thrd:{third},frth:{fourth}},
  {name:"Exercise files",frst:{first},scnd:{first},thrd:{third},frth:{fourth}},
  {name:"Mobile and TV apps",frst:{first},scnd:{first},thrd:{third},frth:{fourth}},
  {name:"Offline viewing",frst:{first},scnd:{first},thrd:{third},frth:{fourth}},
  {name:"Conference",frst:{first},scnd:{first},thrd:{third},frth:{fourth}},
  {name:"Guides",frst:{first},scnd:{first},thrd:{third},frth:{fourth}},
  {name:"Badges",frst:{first},scnd:{first},thrd:{third},frth:{fourth}}
]
let tdata2=[
  {name:"Skill IQ",frst:{first},scnd:{first},thrd:{third},frth:{fourth}},
  {name:"Role IQ",frst:{first},scnd:{first},thrd:{third},frth:{fourth}},
  {name:"Couse learning checks",frst:{first},scnd:{first},thrd:{third},frth:{fourth}},
]
let tdata3=[
  {name:"API Access",frst:"",scnd:"",thrd:{third},frth:{fourth}},
  {name:"Trend Analytics",frst:"",scnd:"",thrd:{third},frth:{fourth}},
  {name:"Skill Analytics",frst:"",scnd:"",thrd:{third},frth:{fourth}},
  {name:"Usage Analytics",frst:"",scnd:"",thrd:{third},frth:{fourth}},
  {name:"Role Analytics",frst:"",scnd:"",thrd:{third},frth:{fourth}},
  {name:"Channel Analytics",frst:"",scnd:"",thrd:{third},frth:{fourth}},
]
export default function Free(){
    return(
        <div>
          <div className="freebanner">
            <div className="freebanner-box">
                <h6>TRY PLURALSIGHT SKILLS FOR FREE</h6>
                <h1>Build your career, one skill at a time</h1>
                <h5>Get started with a free trial. Cancel anytime. </h5>
            </div>
          </div>
          <div className="freetextandadjuster">
            <div className='freefire'>
              <div className='freetext'><h6>Number of subscriptions?</h6>
                 <h5>We can recommend the right plan.</h5>
              </div>
              <div className='freeadjuster'><SliderMarks/></div>
            </div>

            </div>


         <div className='father-of-4-box'>
              <div className='trialdays-text'><h3>Your free 10-day individual trial includes</h3></div>
              <div className='free4boxes'>
                <div className='free4boxes-1'><div className='free4boxes-12'><img src="https://www.pluralsight.com/content/experience-fragments/pluralsight/Pricing/pricing-free-trial/en---pricing-free-trial---control/jcr:content/root/generic_block_copy_c/parsys/generic_block/parsys/generic_block/parsys/columns_copy/column-parsys-1/column_control_copy/column-parsys-1/flex_block/parsys/flex_open_block/parsys/columns/column-parsys-1/image_text3/image/image-res.img.37cc84a4-5f17-4dc3-90f2-0c2a7153c380.png" alt="" /><h3>Expert-led courses</h3></div><h5>Keep up with the pace of change with thousands of expert-led, in-depth courses.</h5></div>
                <div className='free4boxes-1'><div className='free4boxes-12'><img src="https://www.pluralsight.com/content/experience-fragments/pluralsight/Pricing/pricing-free-trial/en---pricing-free-trial---control/jcr:content/root/generic_block_copy_c/parsys/generic_block/parsys/generic_block/parsys/columns_copy/column-parsys-1/column_control_copy/column-parsys-1/flex_block/parsys/flex_open_block_copy/parsys/columns/column-parsys-1/image_text3/image/image-res.img.fd6b68be-a84a-48ed-bcea-21276ff717de.png" alt="" /><h3>Pluralsight IQ</h3></div><h5>Validate skill levels with assessments that take 10 minutes or less..</h5></div>
                <div className='free4boxes-1'><div className='free4boxes-12'><img src="https://www.pluralsight.com/content/experience-fragments/pluralsight/Pricing/pricing-free-trial/en---pricing-free-trial---control/jcr:content/root/generic_block_copy_c/parsys/generic_block/parsys/generic_block/parsys/columns_copy/column-parsys-1/column_control_copy/column-parsys-1/flex_block/parsys/flex_open_block/parsys/columns/column-parsys-1/image_text3/image/image-res.img.37cc84a4-5f17-4dc3-90f2-0c2a7153c380.png" alt="" /><h3>Expanded library</h3></div><h5>Grow your team's proficiency with access to our full 7,000+ course library..</h5><h6>*Available on Premium only</h6></div>
                <div className='free4boxes-1'><div className='free4boxes-12'><img src="https://www.pluralsight.com/content/experience-fragments/pluralsight/Pricing/pricing-free-trial/en---pricing-free-trial---control/jcr:content/root/generic_block_copy_c/parsys/generic_block/parsys/generic_block/parsys/columns_copy/column-parsys-1/column_control_copy/column-parsys-1/flex_block/parsys/flex_open_block_copy_1940868835/parsys/columns/column-parsys-1/image_text3/image/image-res.img.211f260b-a3ba-4936-adb5-5d5cf12d7eb1.png" alt="" /><h3>Hands-on learning</h3></div><h5>Practice and apply knowledge faster in real-world scenarios with projects and interactive courses.</h5><h6>*Available on Premium only</h6></div>
               
              </div>
         </div>


        <div className='father-of-2-box'><div className='switch-button'><h3>Monthly</h3><Switch size='lg' /><h3>Yearly</h3></div>
            <div className='free2boxes'>
                <div className='free2boxes-1'>
                    <div className='free2boxes-11'></div>
                    <div className='free2boxes-12'><div className='free2boxes-12-text'><h3>Standard</h3></div><div className='free2boxes-12-yellowtag'><h3>SAVE 33% - LIMITED TIME</h3></div></div>
                    <div className='free2boxes-13'><h3>Our core library of most popular courses,paths and all skill assessments</h3></div>
                    <Button position='relative' bottom='7%' left='20%' background={'rgb(131,58,180) linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'} height='60px' width='350px'>START A FREE 10-DAY TRIAL</Button>
                    <div className='free2boxes-14'><h3>10-day free trial <br/> then ₹ 682.10/month, billed annually (₹ 8185.48)</h3></div>
                    </div>
                <div className='free2boxes-1'>
                <div className='free2boxes-21'><h3>BEST OPPERTUNITY</h3></div>
                    <div className='free2boxes-22'><div className='free2boxes-22-text'><h3>Premium</h3></div><div className='free2boxes-22-yellowtag'><h3>SAVE 33% - LIMITED TIME</h3></div></div>
                    <div className='free2boxes-23'><h3>Our expanded library containing all 7,000+ courses, certification practice exams</h3></div>
                    <Button position='relative' bottom='7%' left='20%' background={'rgb(131,58,180) linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'} height='60px' width='350px'>START A FREE 10-DAY TRIAL</Button>
                    <div className='free2boxes-24'><h3>10-day free trial <br/> then ₹ 682.10/month, billed annually (₹ 8185.48)</h3></div>
                    
                </div>
            </div>
        </div>


<div className='freetable'>
<TableContainer className='tbl'>
  <Table variant='striped' colorScheme=''>
    <TableCaption color='white'>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th color='rgb(21,73,128)' fontWeight='bolder'  fontSize='20px' >Core</Th>
        <Th className='team1' color='white' fontSize='16px' isNumeric>standard</Th>
        <Th className='team2' color='white' fontSize='16px'  isNumeric>premium</Th>
         <Th className='team3' color='white' fontSize='16px' isNumeric>professional</Th>
          <Th className='team4' color='white' fontSize='16px' isNumeric>enterprise</Th>
      </Tr>
    </Thead>
    <Tbody>
    <Tr>
        <Td fontSize="20px">Free Trial</Td>
        <Td fontSize="18px" className='team1' isNumeric>For 10 days</Td>
        <Td fontSize="18px" className='team2' isNumeric>For 10 days</Td>
        <Td fontSize="18px" className='team3'  isNumeric>For 14 days</Td>
        <Td fontSize="18px" className='team4' isNumeric>For 14 days</Td>
      </Tr>
      <Tr>
        <Td fontSize="20px">Course library</Td>
        <Td  fontSize="18px" className='team1' isNumeric>Core library</Td>
        <Td fontSize="18px" className='team2' isNumeric>Expanded library</Td>
        <Td fontSize="18px" className='team3'  isNumeric>Expanded library</Td>
        <Td fontSize="18px" className='team4' isNumeric>Expanded library</Td>
      </Tr>
      {tdata.map((el)=>(
      <Tr key={el.name}>
      <Td fontSize="20px">{el.name}</Td>
      <Td className='team1' isNumeric>{el.frst.first}</Td>
      <Td className='team2' isNumeric>{el.scnd.first}</Td>
      <Td  isNumeric>{el.thrd.third}</Td>
      <Td className='team4' isNumeric>{el.frth.fourth}</Td>
    </Tr>
      ))}
    </Tbody>
    <br/><br/><br/>
    <h2 style={{color:'rgb(21,73,128)', fontWeight:'bolder',  fontSize:'20px',position:"relative",left:"-20%"}}>ASSESSMENTS</h2>
    <Thead>
      <Tr>
        <Th  ></Th>
        <Th  isNumeric></Th>
        <Th   isNumeric></Th>
         <Th  isNumeric></Th>
          <Th  isNumeric></Th>
      </Tr>
    </Thead>
    <Tbody>
    {tdata2.map((el)=>(
      <Tr key={el.name}>
      <Td fontSize="20px">{el.name}</Td>
      <Td className='team1' isNumeric>{el.frst.first}</Td>
      <Td className='team2' isNumeric>{el.scnd.first}</Td>
      <Td  isNumeric>{el.thrd.third}</Td>
      <Td className='team4' isNumeric>{el.frth.fourth}</Td>
    </Tr>
      ))}
    </Tbody>

    <br/><br/><br/>
    <h2 style={{color:'rgb(21,73,128)', fontWeight:'bolder',  fontSize:'20px',position:"relative",left:"-20%"}}>ANALYTICS</h2>
    <Thead>
      <Tr>
        <Th  ></Th>
        <Th  isNumeric></Th>
        <Th   isNumeric></Th>
         <Th  isNumeric></Th>
          <Th  isNumeric></Th>
      </Tr>
    </Thead>
    <Tbody>
    {tdata3.map((el)=>(
      <Tr key={el.name}>
      <Td fontSize="20px">{el.name}</Td>
      <Td className='team1' isNumeric>{el.frst.first}</Td>
      <Td className='team2' isNumeric>{el.scnd.first}</Td>
      <Td  isNumeric>{el.thrd.third}</Td>
      <Td className='team4' isNumeric>{el.frth.fourth}</Td>
    </Tr>
      ))}
    </Tbody>
  </Table>
</TableContainer>

</div>
<div className='slid'>
        <Slider /></div>


        </div>
    )
}