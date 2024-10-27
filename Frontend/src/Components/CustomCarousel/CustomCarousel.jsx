import React from 'react'
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

import hydEventsLogo from '../../assets/hydEventsLogo.png'; 
import img from '../../assets/img.png'; 

export const CustomCarousel = () => {
  return (
    <div>
<CCarousel controls transition="crossfade">
  <CCarouselItem>
    <CImage className="d-block w-100" src={img} alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={hydEventsLogo} alt="slide 2" />
  </CCarouselItem>
  {/* <CCarouselItem>
    <CImage className="d-block w-100" src={AngularImg} alt="slide 3" />
  </CCarouselItem> */}
</CCarousel>
    </div>
  )
}
export default CustomCarousel
