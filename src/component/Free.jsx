import { Button, Switch } from '@chakra-ui/react';
import './Free.css';
import SliderMarks from './Freeslide';

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
                    <div className='free2boxes-12'><div className='free2boxes-12-text'></div><div className='free2boxes-12-yellowtag'><h3></h3></div></div>
                    <div className='free2boxes-13'></div>
                    <div><Button className='free2boxes-1-button'>START A FREE 10 DAY TRIAL</Button></div>
                    <div className='free2boxes-14'></div>
                    </div>
                <div className='free2boxes-2'></div>
            </div>
        </div>







        </div>
    )
}