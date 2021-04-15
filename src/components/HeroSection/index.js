import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import {Button} from '../ButtonElements'

const HeroSection = () => {
 const [hover, setHover] = useState(false);
 const onHover = () => {
  setHover(!hover)  
 }

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>James Ohsako</HeroH1>
        <HeroP>HeroP here</HeroP>
        <HeroBtnWrapper>
          <Button to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-80} onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>My Projects {hover ? <ArrowForward /> : <ArrowRight />} </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
