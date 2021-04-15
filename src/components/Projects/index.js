import React from 'react'
import Icon1 from '../../images/icon-accessible.png'
import Icon2 from '../../images/icon-concise.png'
import Icon3 from '../../images/icon-intuitive.png'
import {ServicesContainer, ServicesWrapper, ServicesCard,ServicesH1, ServicesH2, ServicesIcon, ServicesP} from './ProjectsElements'

const Services = () => {
  return (
    <ServicesContainer id='projects'>
      <ServicesH1>My Projects</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>H2 here!</ServicesH2>
          <ServicesP>P tag here</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>H2 here!</ServicesH2>
          <ServicesP>P tag here</ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>H2 here!</ServicesH2>
          <ServicesP>P tag here</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
