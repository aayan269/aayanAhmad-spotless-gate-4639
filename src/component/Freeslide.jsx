import { Box, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack } from "@chakra-ui/react"
import { useState } from "react"


export default function SliderMarks() {
    const [sliderValue, setSliderValue] = useState(50)
  
    const labelStyles = {
      mt: '2',
      ml: '-2.5',
      fontSize: 'sm',
    }
  
    return (
      <Box pt={6} pb={2} w={350}>
        <Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>
          <SliderMark style={{color:"#fff"}} value={25} {...labelStyles}>
            25%
          </SliderMark>
          <SliderMark style={{color:"#fff"}} value={50} {...labelStyles}>
            50%
          </SliderMark>
          <SliderMark style={{color:"#fff"}} value={75} {...labelStyles}>
            75%
          </SliderMark>
          <SliderMark
            value={sliderValue}
            textAlign='center'
            bg='blue.500'
            color='white'
            mt='-10'
            ml='-5'
            w='12'
          >
            {sliderValue}%
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    )
  }