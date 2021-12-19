import SwiperCore, { Navigation, Scrollbar } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";
import Container from './Container';
import Section from './Section';
import FeedbackCard from './FeedbackCard';
import Title from './Title';
import styled from 'styled-components';

SwiperCore.use([Navigation, Scrollbar]);

const Feedback = ({ children, ...props }) => {
    return (
        <StyledSection {...props} >
            <Container>
                <StyledTitle>Отзывы <span>наших клиентов</span></StyledTitle>

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
                    <SwiperSlide><FeedbackCard /></SwiperSlide>
                    <SwiperSlide><FeedbackCard /></SwiperSlide>
                    <SwiperSlide><FeedbackCard /></SwiperSlide>
                    <SwiperSlide><FeedbackCard /></SwiperSlide>
                </StyledSwiper>
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