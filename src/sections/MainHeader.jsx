import { CustomSwiper, Header, SwiperNavigation } from '@/components';
import { useModal } from '@/context';
import { Button, Container, Title } from '@/ui';
import { forwardRef } from 'react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { SwiperSlide } from 'swiper/react';

export const MainHeader = forwardRef(({ data }, ref) => {
    const { phone, slides, subPhone } = data;
    const { setIsOpenedModal } = useModal();

    return (
        <StyledHeader ref={ref}>
            <CustomSwiper
                delay={0}
                navigation={{
                    prevEl: '.header-prev',
                    nextEl: '.header-next',
                }}
                scrollbar={{
                    hide: false,
                    el: '.header-scrollbar',
                    draggable: false,
                }}
            >
                {slides.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <>
                                <HeaderBackground>
                                    <LeftSide></LeftSide>
                                    <RightSide image={slide?.image}></RightSide>
                                </HeaderBackground>

                                <HeaderCard>
                                    <Container>
                                        <HeaderText blocks={2}>
                                            <LeftSideInner>
                                                <HeaderTitle
                                                    forwardedAs="h1"
                                                    dangerouslySetInnerHTML={{ __html: slide?.title }}
                                                />
                                                <HeaderSubTitle>{slide.subTitle}</HeaderSubTitle>
                                                <HeaderButton onClick={() => setIsOpenedModal(true)}>
                                                    Заказать звонок
                                                </HeaderButton>
                                            </LeftSideInner>
                                        </HeaderText>
                                    </Container>
                                </HeaderCard>
                            </>
                        </SwiperSlide>
                    );
                })}
            </CustomSwiper>

            <HeaderBottom>
                <Container>
                    <HeaderBottomInner>
                        <ContactBlock>
                            <Phone>{phone}</Phone>
                            <SubPhone>{subPhone}</SubPhone>
                        </ContactBlock>
                        <StyledButton onClick={() => setIsOpenedModal(true)}>Заказать звонок</StyledButton>
                        <SwiperNavigation className="header" />
                    </HeaderBottomInner>
                </Container>
            </HeaderBottom>
        </StyledHeader>
    );
});

MainHeader.displayName = 'MainHeader';

const StyledHeader = styled.header`
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;

    /* @media screen and (min-width: 1024px) {
        height: 100vh;
    } */
`;

const HeaderBackground = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
`;

const HeaderText = styled.div`
    width: 100%;
`;

const HeaderCard = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: #2C4DC3; */
    display: flex;
    overflow: hidden;
    position: absolute;
    align-items: flex-end;
    padding-bottom: 50px;

    @media screen and (min-width: 1024px) {
        justify-content: flex-start;
        align-items: center;
        padding-bottom: 0;
        padding-bottom: 60px;
    }
`;

const LeftSide = styled.div`
    display: none;

    @media screen and (min-width: 1024px) {
        display: inline-block;
        background-color: #2c4dc3;
        width: 50%;
        height: 100%;
    }
`;

const RightSide = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    ${({ image }) =>
        image &&
        `background-image: linear-gradient(to top, rgba(44, 77, 195, 0.3), rgba(44, 77, 195, 0.3)), url(${image})`};
    position: relative;

    @media screen and (min-width: 1024px) {
        width: 50%;
        display: inline-block;
    }
`;

const LeftSideInner = styled.div`
    /* margin-left: calc((100vw - 1250px) / 2);
    margin-right: 100px; */
    /* position: absolute; */
    /* left: 0; */
    padding-right: 50px;

    width: 100%;

    @media screen and (min-width: 540px) {
        width: 70%;
    }
    @media screen and (min-width: 1024px) {
        width: 50%;
    }
`;

const HeaderTitle = styled(Title)`
    color: #fff;
    font-weight: 400;
    margin-bottom: 20px;
    font-size: 34px;
    letter-spacing: 1.5px;
    line-height: 40px;

    @media screen and (min-width: 1024px) {
        line-height: 57.5px;
        letter-spacing: 2.1px;
        font-size: 50px;
    }
    /* 
    span {
        text-decoration: underline;
        text-decoration-color: #ffd337;
    } */
`;

const HeaderSubTitle = styled.h2`
    font-size: 16px;
    color: #fff;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 100px;

    @media screen and (min-width: 768px) {
        margin-bottom: 40px;
    }
`;

const HeaderBottom = styled.div`
    position: absolute;
    bottom: 32px;
    left: 0;
    right: 0;
    z-index: 1;
`;

const Phone = styled.div`
    font-size: 20px;
    color: #fff;
    margin-bottom: 10px;
`;

const SubPhone = styled.div`
    font-size: 12px;
    color: #d6ddf3;
`;

const ContactBlock = styled.div`
    display: none;

    @media screen and (min-width: 1024px) {
        display: block;
    }
`;

const HeaderBottomInner = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 18px;
    justify-content: space-between;
    align-items: flex-end;

    @media screen and (min-width: 768px) {
        justify-content: flex-end;
        align-items: center;
    }

    @media screen and (min-width: 1024px) {
        justify-content: space-between;
        margin-bottom: 0;
    }

    .prev-mobile,
    .next-mobile {
        display: none;
    }
    @media screen and (min-width: 450px) {
        .prev-mobile,
        .next-mobile {
            display: flex;
        }
    }
    @media screen and (min-width: 1024px) {
        .prev-mobile,
        .next-mobile {
            display: none;
        }
    }

    > * {
        width: 50%;
    }
`;

const StyledButton = styled(Button)`
    width: auto;
    display: inline-block;

    @media screen and (min-width: 768px) {
        display: none;
    }
`;
const HeaderButton = styled(Button)`
    display: none;

    @media screen and (min-width: 768px) {
        display: inline-block;
    }
`;
