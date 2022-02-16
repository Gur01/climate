import SwiperCore, { Navigation, Scrollbar } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";
import Container from '../elements/Container';
import Section from '../elements/Section';
import FeedbackCard from '../elements/FeedbackCard';
import Title from '../elements/Title';
import styled from 'styled-components';
import CustomSwiper from './CustomSwiper';
import SwiperNavigation from "../elements/SwiperNavigation";

const Feedback = ({ children, ...props }) => {
    return (
        <StyledSection {...props} >
            <Container>
                <StyledTitle>Отзывы <span>наших клиентов</span></StyledTitle>

                <CustomSwiper
                    spaceBetween={16}
                    slidesPerView={3}
                    navigation={{
                        prevEl: '.feedback-prev',
                        nextEl: '.feedback-next',
                    }}
                    scrollbar={{
                        hide: false,
                        el: '.feedback-scrollbar',
                        draggable: false,
                    }}
                    breakpoints = {{
                        320: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        1024: {
                          slidesPerView: 3,
                        }
                    }}
                >
                    <SwiperSlide><FeedbackCard /></SwiperSlide>
                    <SwiperSlide><FeedbackCard /></SwiperSlide>
                    <SwiperSlide><FeedbackCard /></SwiperSlide>
                    <SwiperSlide><FeedbackCard /></SwiperSlide>
                </CustomSwiper>
                <SwiperNavigation className='feedback'/>

            </Container>

        </StyledSection>
    )
}

export default Feedback;


const StyledSection = styled(Section)`
    background: #2C4DC3;
    padding-top: 120px;
    padding-bottom: 184px;
`

const StyledTitle = styled(Title)`
    margin-bottom: 60px;
    color: #FFFFFF;
`


const StyledSwiper = styled(Swiper)`
    .swiper-slide {
        width: 42%;
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