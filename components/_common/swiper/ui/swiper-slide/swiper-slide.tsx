import {FC, ReactNode} from 'react';
import {SwiperSlide} from "swiper/react"
import VolunteerCard from "../../../../_main/volunteers-section/ui/volunteer-card/volunteer-card";

interface SwiperSlideProps {
    slide?: any
    virtualIndex: number
    children?: ReactNode
}

const SwiperSlideComponent: FC<SwiperSlideProps> = ({slide, virtualIndex, children}) => {

    return (
        <SwiperSlide
            key={slide}
            virtualIndex={virtualIndex}
        >
            <VolunteerCard/>
        </SwiperSlide>
    );

};

export { SwiperSlideComponent };