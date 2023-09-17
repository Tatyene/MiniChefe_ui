'use client'

import React from 'react'
import Image from 'next/image'
import { Box, IconButton, position, useBreakpointValue } from '@chakra-ui/react'

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import Slider from 'react-slick'
import style from './carousel.module.css'

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
}

export default function Carousel() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState<Slider | null>(null)

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' })
    const side = useBreakpointValue({ base: '30%', md: '10px' })

    // These are the images used in the slide
    const cards = [
        '/fast-food-banner.png',
    ]

    return (
        <div className={style.caroulseContainer}>
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <IconButton
                aria-label="left-arrow"
                colorScheme="orange"
                borderRadius="full"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt />
            </IconButton>
            <IconButton
                aria-label="right-arrow"
                colorScheme="orange"
                borderRadius="full"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt />
            </IconButton>
            <div className={style.slideContainer}>
                <Slider {...settings} ref={(slider) => setSlider(slider)} >
                    {cards.map((url, index) => (
                        <div className={style.slideContent} key={index}>
                            <div>
                                <div>
                                    <Image
                                        src='/avatar1.png'
                                        alt='avatar-photo'
                                        width={70}
                                        height={70}
                                    />
                                </div>
                                <div className={style.slideNameRoleContainer}>
                                    <h5>Willians Jhone</h5>
                                    <p>CEO & Co-Founder</p>
                                </div>
                            </div>
                            <div className={style.slideDescription}>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus.”</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div >
    )
}