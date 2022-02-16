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
                        prevEl: '.services-prev',
                        nextEl: '.services-next',
                    }}
                    scrollbar={{
                        hide: false,
                        el: '.services-scrollbar',
                        draggable: false,
                    }}
                    breakpoints = {{
                        320: {
                          slidesPerView: 1,
                        },
                        540: {
                          slidesPerView: 2,
                        },
                        1024: {
                          slidesPerView: 3,
                        }
                    }}
                >
                    <SwiperSlide><ServicesCard /></SwiperSlide>
                    <SwiperSlide><ServicesCard /></SwiperSlide>
                    <SwiperSlide><ServicesCard /></SwiperSlide>
                    <SwiperSlide><ServicesCard /></SwiperSlide>
                </CustomSwiper>
                <SwiperNavigation theme="white" className='services'/>
            </Container>
        </Section>
    )
}

export default Services;