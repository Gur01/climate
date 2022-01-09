import { SwiperSlide } from "swiper/react";
import Container from '../elements/Container';
import Section from '../elements/Section';
import ServicesCard from '../elements/ServicesCard';
import Title from '../elements/Title';
import CustomSwiper from './CustomSwiper';
import SwiperNavigation from "../elements/SwiperNavigation";

const Services = ({ children, ...props }) => {
    return (
        <Section {...props}>
            <Container>
                <Title style={{marginBottom: '60px'}}>Наши <span>услуги</span></Title>

                <CustomSwiper
                    spaceBetween={16}
                    slidesPerView={3}
                    navigation={{
                        prevEl: '.prev-servises',
                        nextEl: '.next-servises',
                    }}
                    scrollbar={{
                        hide: false,
                        el: '.scrollbar-servises',
                        draggable: false,
                    }}
                >
                    <SwiperSlide><ServicesCard /></SwiperSlide>
                    <SwiperSlide><ServicesCard /></SwiperSlide>
                    <SwiperSlide><ServicesCard /></SwiperSlide>
                    <SwiperSlide><ServicesCard /></SwiperSlide>
                </CustomSwiper>
                <SwiperNavigation theme="white" />
            </Container>
        </Section>
    )
}

export default Services;