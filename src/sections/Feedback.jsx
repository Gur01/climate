import { CustomSwiper, FeedbackCard, SwiperNavigation } from '@/components';
import { Container, Section, Title } from '@/ui';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { SwiperSlide } from 'swiper/react';

const Feedback = ({ data, ...rest }) => {
    const { title, items } = data;

    return (
        <StyledSection {...rest}>
            <Container>
                <StyledTitle dangerouslySetInnerHTML={{ __html: title }} />

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
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {items.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <FeedbackCard text={item.text} name={item.name} image={item.image} />
                            </SwiperSlide>
                        );
                    })}
                </CustomSwiper>
                <SwiperNavigation className="feedback" />
            </Container>
        </StyledSection>
    );
};

export default Feedback;

const StyledSection = styled(Section)`
    background: #2c4dc3;
    padding-top: 100px;
    padding-bottom: 100px;

    @media screen and (min-width: 1024px) {
        padding-top: 120px;
        padding-bottom: 120px;
    }

    .prev-mobile,
    .next-mobile {
        top: 45%;
    }
`;
const StyledTitle = styled(Title)`
    margin-bottom: 60px;
    color: #ffffff;
`;
