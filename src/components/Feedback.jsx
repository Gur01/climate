import styled from 'styled-components';
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import { SwiperSlide } from "swiper/react";
import Container from '../elements/Container';
import FeedbackCard from '../elements/FeedbackCard';
import Section from '../elements/Section';
import SwiperNavigation from "../elements/SwiperNavigation";
import Title from '../elements/Title';
import CustomSwiper from './CustomSwiper';

const Feedback = ({ data, ...rest }) => {
    const {title, items} = data;

    return (
        <StyledSection {...rest} >
            <Container>
                <StyledTitle dangerouslySetInnerHTML={{__html: title}} />

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
                    {items.map((item, index)=> {
                        return (
                            <SwiperSlide key={index}>
                                <FeedbackCard text={item.text} name={item.name} image={item.image}/>
                            </SwiperSlide>
                        )
                    })}
                </CustomSwiper>
                <SwiperNavigation className='feedback'/>

            </Container>

        </StyledSection>
    )
}

export default Feedback;


const StyledSection = styled(Section)`
    background: #2C4DC3;
    padding-top: 100px;
    padding-bottom: 100px;
    
    @media screen and (min-width: 1024px) {
        padding-top: 120px;
        padding-bottom: 120px;
    }


`
const StyledTitle = styled(Title)`
    margin-bottom: 60px;
    color: #FFFFFF;
`