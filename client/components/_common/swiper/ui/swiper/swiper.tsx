import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Mousewheel, Autoplay} from "swiper";
import {SwiperProps} from "../../model/swiper.types";
import VolunteerCard from "../../../../_main/volunteers-section/ui/volunteer-card/volunteer-card";

import 'swiper/css';
import "swiper/css/autoplay";
import cls from "./swiper.module.scss"

SwiperCore.use([Autoplay])


const SwiperComponent = ({
    children,
    photos
}: SwiperProps) => {
    
    return (
        <Swiper
            speed={2200}
            autoplay={{
                delay: 3000
            }}
            slidesPerView={"auto"}
            loop={true}
        >
            {
                photos?.map((slide, index) => (
                    <SwiperSlide
                        key={`${slide}-${index}`}
                        virtualIndex={index}
                        className={cls["swiper-slide-bind"]}
                    >
                        <VolunteerCard/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export {SwiperComponent}