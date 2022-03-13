import { Button, Container } from '@/components';
import { useModal } from '@/context';
import { useClickOutside } from '@/hooks/useClickOutside';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { SwiperSlide } from 'swiper/react';
import CustomSwiper from '../elements/CustomSwiper';
import Logo from '../elements/Logo';
import SwiperNavigation from '../elements/SwiperNavigation';

const Header = ({ data }) => {
    const { phone, slides, subPhone } = data;
    const [isOpenHamburger, setOpenHamburger] = useState(false);
    const {setIsOpenedModal} = useModal();

    const navRef = useRef(null);
    const buttonRef = useRef(null);
    const headerRef = useRef(null);

    useClickOutside(navRef, (e) => {
        e.stopPropagation();

        const body = document.body;
        body.style.overflowY = 'auto';

        setOpenHamburger(false);
    }, buttonRef)

    const handleHamburger = (e) => {
        e.stopPropagation();
        const body = document.body;

        if (!isOpenHamburger) {
            body.style.overflowY = 'hidden';
        } else {
            body.style.overflowY = 'auto';
        }

        setOpenHamburger(!isOpenHamburger)
    }

    return (
        <StyledHeader ref={headerRef}>
            <HeaderTop>
                <StyledContainer>
                    <Logo />

                    <Hamburger onClick={handleHamburger} isOpenHamburger={isOpenHamburger} ref={buttonRef} >
                        <span></span>
                    </Hamburger>

                </StyledContainer>
            </HeaderTop>

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
                }}>

                {slides.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <>
                                <HeaderBackground>
                                    <LeftSide>
                                    </LeftSide>
                                    <RightSide image={slide?.image}></RightSide>
                                </HeaderBackground>

                                <HeaderCard>
                                    <Container>
                                        <HeaderText blocks={2}>
                                            <LeftSideInner>
                                                <HeaderTitle dangerouslySetInnerHTML={{__html: slide?.title}} />
                                                <HeaderSubTitle>{slide.subTitle}</HeaderSubTitle>
                                                <Button onClick={()=> setIsOpenedModal(true)}>Заказать звонок</Button>
                                            </LeftSideInner>
                                        </HeaderText>
                                    </Container>
                                </HeaderCard>
                            </>
                        </SwiperSlide>)
                })}
            </CustomSwiper>

            <HeaderBottom>
                <Container>
                    <HeaderBottomInner>
                        <ContactBlock>
                            <Phone>{phone}</Phone>
                            <SubPhone>{subPhone}</SubPhone>
                        </ContactBlock>
                        <SwiperNavigation className="header" />
                    </HeaderBottomInner>
                </Container>
            </HeaderBottom>

            <NavigationOverlay isOpenHamburger={isOpenHamburger}>
                <Navigation ref={navRef}>
                    <ul>
                        <li>Главная</li>
                        <li>О нас</li>
                        <li>FAQ</li>
                        <li>Статьи</li>
                    </ul>
                </Navigation>
            </NavigationOverlay>

        </StyledHeader>
    )
}

export default Header;

const HeaderBackground = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
`

const StyledHeader = styled.header`
    height: 768px;
    width: 100%;
    position: relative;
    overflow: hidden;
    
    @media screen and (min-width: 1024px) {
        height: 810px;
    }
`

const HeaderTop = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    padding: 25px 0;
    /* background-color: #2C4DC3; */
    z-index: 101;
`

const HeaderText = styled.div`
    width: 100%;
`

const StyledContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
`

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

`

const LeftSide = styled.div`
    display: none;
    
    
    @media screen and (min-width: 1024px) {
        display: inline-block;
        background-color: #2C4DC3;
        width: 50%;
        height: 100%;
    }
`

const RightSide = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    ${({image}) => image && `background-image: linear-gradient(to top, rgba(44, 77, 195, 0.3), rgba(44, 77, 195, 0.3)), url(${image})`};
    position: relative;
    
    @media screen and (min-width: 1024px) {
        width: 50%;
        display: inline-block;
    }
`

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


`


const HeaderTitle = styled.h1`
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


    span {
        text-decoration: underline;
        text-decoration-color: #FFD337;
    }
    `

const HeaderSubTitle = styled.h2`
    font-size: 16px;
    color: #fff;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 40px;
`



const HeaderBottom = styled.div`
    position: absolute;
    bottom: 32px;
    left: 0;
    right: 0;
    z-index: 1;
`

const Hamburger = styled.div`
    border: 2px solid #C4C4C4;
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
	align-items: center;
    cursor: pointer;
    position: relative;

    span {
        width: 18px;
        height: 2px;
        background-color: #fff;
        position: relative;
        visibility: ${({ isOpenHamburger }) => isOpenHamburger ? 'hidden' : 'visible'};
        transition: visibility 0s, top .3s ease, transform .3s ease;
        
        &:before,
        &:after {
            width: 100%;
            height: inherit;
            position: absolute;
            display: inline-block;
            content: '';
            background-color: inherit;
            visibility: visible;
            transition: inherit;
        }

        &:before {
            top: ${({ isOpenHamburger }) => isOpenHamburger ? '0' : '-6px'};
            transform: ${({ isOpenHamburger }) => isOpenHamburger ? 'rotate(-45deg)' : 'rotate(0)'}
        }

        &:after {
            top: ${({ isOpenHamburger }) => isOpenHamburger ? '0' : '6px'};
            transform: ${({ isOpenHamburger }) => isOpenHamburger ? 'rotate(45deg)' : 'rotate(0)'}

        }
    }
`


const NavigationOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;    
    right: ${({ isOpenHamburger }) => isOpenHamburger ? '0' : '-100%'};
    transition: all 0.3s ease-in-out;
    z-index: 100;
    top: 0;
`

const Navigation = styled.div`
    top: 0;
    height: 100%;
    background-color: #0F0F10;
    position: absolute;
    right: 0;
    width: 100%;
    
    @media screen and (min-width: 1024px) {
        width: calc((100vw - 1230px) / 2 + 400px);
    }


    ul {
        padding-top: 121px;
        padding-left: 100px;
        list-style-type: none;
        color: #fff;
        
        li {
            padding-bottom: 50px;
            cursor: pointer;
        }
    }
`;

const Phone = styled.div`
    font-size: 20px;
    color: #fff;
    margin-bottom: 10px;

`

const SubPhone = styled.div`
    font-size: 12px;
    color: #D6DDF3;
`

const ContactBlock = styled.div`
    display: none;
    
    @media screen and (min-width: 1024px) {
        display: block;
    }
`

const HeaderBottomInner = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: flex-start;
    margin-bottom: 18px;
    
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
`