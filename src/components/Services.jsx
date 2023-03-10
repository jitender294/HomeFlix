import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../asset/3.jpg'

const Services = () => {
    return (
        <div>
            <Carousel
                infiniteLoop  
                autoPlay  
                autoFocus  
                // showStatus={false}
                showArrows={false}
                interval={1000}  
                showThumbs={false}  
                showIndicators={false} >  


                <div>  
                    <img src={img1} alt="Item1" />
                    <p className='legend'>Full stack</p>
                </div>
                <div>
                    <img src={img1} alt="Item1" />
                    <p className='legend'>Peer to Peer Support</p>
                </div>
            </Carousel>  
        </div>
    )
}

export default Services