import { useRef, useState } from 'react';
import styled from 'styled-components';
import SwiperCore, { Navigation as Nav, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useClickOutside } from '../hooks/useClickOutside';
import Button from './Button';
import Container from './Container';
import Divider from './Divider';

SwiperCore.use([Nav]);

const Header = () => {
    const [isOpenHamburger, setOpenHamburger] = useState(false);

    const navRef = useRef(null);
    const buttonRef = useRef(null);


    useClickOutside(navRef, (e) => {
        e.stopPropagation();
        setOpenHamburger(false);
    }, buttonRef)

    const handleHamburger = (e) => {
        console.log('handle');
        e.stopPropagation();
        setOpenHamburger(!isOpenHamburger)
    }

    return (
        <StyledHeader>
            <HeaderTop>
                <StyledContainer>
                    <Logo>
                        <LogoImage src="/logo.png" alt="Logo" />
                        <LogoTitle>
                            <div>
                                <span>air</span>Climat
                            </div>
                            <div>Ремонт кондиционеров</div>
                        </LogoTitle>

                    </Logo>

                    <Hamburger onClick={handleHamburger} isOpenHamburger={isOpenHamburger} ref={buttonRef} >
                        <span></span>
                    </Hamburger>

                </StyledContainer>
            </HeaderTop>

            <StyledSwiper
                modules={[Scrollbar]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                scrollbar={{ draggable: false }}
                speed={600}
            >
                <SwiperSlide>
                    <HeaderCard>
                        <Divider blocks={2}>
                            <LeftSide>
                                <LeftSideInner>
                                    <HeaderTitle>Обслуживание кондиционеров <br />от <span>профессионалов</span></HeaderTitle>
                                    <HeaderSubTitle>Противоположная точка зрения подразумевает, что тщательные исследования конкурентов объединены в целые кластеры себе подобных.</HeaderSubTitle>
                                    <Button>Заказать звонок</Button>
                                </LeftSideInner>
                            </LeftSide>
                            <RightSide></RightSide>
                        </Divider>
                    </HeaderCard>
                </SwiperSlide>
                <SwiperSlide>
                    <HeaderCard>
                        <Divider blocks={2}>

                            <LeftSide>
                                <LeftSideInner>
                                    <HeaderTitle>Клининговые услуги <br />от <span>профессионалов</span></HeaderTitle>
                                    <HeaderSubTitle>Противоположная точка зрения подразумевает, что тщательные исследования конкурентов объединены в целые кластеры себе подобных.</HeaderSubTitle>
                                    <Button>Заказать звонок</Button>
                                </LeftSideInner>
                            </LeftSide>
                            <RightSide></RightSide>
                        </Divider>
                    </HeaderCard>
                </SwiperSlide>
                <SwiperSlide>
                    <HeaderCard>
                        <Divider blocks={2}>
                            <LeftSide>
                                <LeftSideInner>
                                    <HeaderTitle>Обслуживание кондиционеров <br />от <span>профессионалов</span></HeaderTitle>
                                    <HeaderSubTitle>Противоположная точка зрения подразумевает, что тщательные исследования конкурентов объединены в целые кластеры себе подобных.</HeaderSubTitle>
                                    <Button>Заказать звонок</Button>
                                </LeftSideInner>
                            </LeftSide>
                            <RightSide></RightSide>
                        </Divider>
                    </HeaderCard>
                </SwiperSlide>
            </StyledSwiper>


            <HeaderBottom>
                <Container>
                    <Phone>+7 000 000 00 00</Phone>
                    <SubPhone>с 10 до 22, без выходных</SubPhone>
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

const StyledHeader = styled.header`
    height: 810px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
`

const HeaderTop = styled.div`
    position: absolute ;
    left: 0;
    right: 0;
    padding: 16px 0;
    /* background-color: #2C4DC3; */
    z-index: 150;
`

const StyledContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
`



const HeaderCard = styled.div`
    width: 100%;
    height: 100%;
    background-color: #2C4DC3;
    display: flex;
    overflow: hidden;

`

const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
	justify-content: center;
	align-items: center;
    height: 100%;
`

const LeftSideInner = styled.div`
    margin-left: calc((100vw - 1250px) / 2);
    margin-right: 100px;
`

const HeaderTitle = styled.h1`
    font-size: 50px;
    color: #fff;
    font-weight: 400;
    line-height: 57,5px;

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

const RightSide = styled.div`
    height: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-image: linear-gradient(to top, rgba(44, 77, 195, 0.3), rgba(44, 77, 195, 0.3)), url('/montag1.png');
    position: relative;
`

const HeaderBottom = styled.div`
    position: absolute;
    bottom: 32px;
    left: 0;
    right: 0;
`

const Logo = styled.div`
    display: flex;
    align-items: center;

`

const LogoImage = styled.img`
    margin-right: 17px;

`

const LogoTitle = styled.div`
    color: #fff;
    
    > div:first-child {
        font-size: 18px;
        font-family: inherit;

        span {
            color: #FFD337
            
        }
    }
    
    > div:last-child {
        font-family: inherit;
        font-size: 12px;
        font-weight: 400;
    }
`

const LogoSubTitle = styled.div`

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
`

const Navigation = styled.div`
    top: 0;
    height: 100%;
    background-color: #0F0F10;
    width: calc((100vw - 1230px) / 2 + 400px);
    position: absolute;
    right: 0;

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

const StyledSwiper = styled(Swiper)`
    height: 100%;
    width: 100%;
    z-index: unset !important;
    
    .swiper-wrapper {
        z-index: unset !important;
    }
    
    .swiper-slide {
        z-index: unset !important;
    }

    .swiper-scrollbar {
        bottom: 32px;
        right: 206px;
        width: 155px;
        left: unset;
        height: 1px;
        background-color:#a7b5cf;
        top: unset;
        
        .swiper-scrollbar-drag {
            background-color:#fff;
        }
    }

    .swiper-button-prev {
        right: 415px;
        bottom: 12px;
        left: unset;
        top: unset;
    
        &:after {
            font-size: 16px;
            color: #fff;
            content: 'Назад';    
        }
    }
    
    .swiper-button-next {
        right: 130px;
        bottom: 12px;
        left: unset;
        top: unset;
        
        &:after {
            content: 'Вперед';
            font-size: 16px;
            color: #fff;
        }
    }
`

const Phone = styled.div`
    font-size: 20px;
    color: #fff;


`
const SubPhone = styled.div`
    font-size: 12px;
    color: #D6DDF3
`