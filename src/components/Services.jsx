import SwiperCore, { Navigation, Scrollbar } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";
import Container from '../elements/Container';
import Section from '../elements/Section';
import ServicesCard from '../elements/ServicesCard'
import Title from '../elements/Title';
import styled from 'styled-components';

SwiperCore.use([Navigation, Scrollbar]);

const Services = ({ children, ...props }) => {
    return (
        <Section {...props}>
            <Container>
                <Title style={{marginBottom: '60px'}}>Наши <span>услуги</span></Title>

                <StyledSwiper
                    modules={[Scrollbar]}
                    slidesPerView='auto'
                    spaceBetween={16}
                    loop={true}
                    pagination={{
                        clickable: true
                    }}
                    scrollbar={{ draggable: false }}
                    navigation={true}
                >
                    <SwiperSlide><ServicesCard /></SwiperSlide>
                    <SwiperSlide><ServicesCard /></SwiperSlide>
                    <SwiperSlide><ServicesCard /></SwiperSlide>
                    <SwiperSlide><ServicesCard /></SwiperSlide>
                </StyledSwiper>
            </Container>

        </Section>
    )
}

export default Services;


const StyledSwiper = styled(Swiper)`
    .swiper-slide {
        width: 30%;
    }

    .swiper-scrollbar {
        bottom: 0;
        right: 206px;
        width: 155px;
        left: unset;
        height: 1px;
        background-color: #9F9F9F;
        top: unset;
        
        .swiper-scrollbar-drag {
            background-color: #0F0F10;
        }
    }

    .swiper-button-prev {
        right: 415px;
        bottom: -20px;
        left: unset;
        top: unset;

        &:after {
            font-size: 16px;
            color: #0F0F10;
            content: 'Назад';    
        }
    }

    .swiper-button-next {
        right: 130px;
        bottom: -20px;
        left: unset;
        top: unset;
        
        &:after {
            content: 'Вперед';
            font-size: 16px;
            color: #0F0F10;
        }
    }
`