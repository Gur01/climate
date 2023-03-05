import { Logo, Menu } from '@/components';
import { useClickOutside } from '@/hooks/useClickOutside';
import { Container } from '@/ui';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

export const Navigation = ({ className, headerRef }) => {
    const [isOpenHamburger, setOpenHamburger] = useState(false);
    const [isStickyMenu, setIsStickyMenu] = useState(false);
    const [animatePosition, setAnimatePosition] = useState(false);

    const router = useRouter();
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const body = document.body;
        // reset body lock
        body.style.overflowY = 'auto';
    }, []);

    useEffect(() => {
        const header = headerRef?.current;

        if (!header) return;

        const options = {
            rootMargin: '0px',
            threshold: 0.4,
        };

        const callback = (entries) => {
            entries.forEach((entry) => {
                entry.isIntersecting ? setIsStickyMenu(false) : setIsStickyMenu(true);
            });
        };

        const observer = new IntersectionObserver(callback, options);
        observer.observe(header);
    }, [headerRef]);

    useEffect(() => {
        if (!isStickyMenu) {
            setTimeout(() => {
                setAnimatePosition(true);
            }, 300);
        } else {
            setAnimatePosition(false);
        }
    }, [isStickyMenu]);

    // useEffect(() => {
    //     if(isStickyMenu) {
    //         setAnimatePosition(true)
    //     }
    // }, [])

    useClickOutside(
        menuRef,
        (e) => {
            e.stopPropagation();

            // const body = document.body;
            // body.style.overflowY = 'auto';

            setOpenHamburger(false);
        },
        buttonRef,
    );

    const handleHamburger = (e) => {
        e.stopPropagation();
        const body = document.body;

        if (!isOpenHamburger) {
            body.style.overflowY = 'hidden';
        } else {
            body.style.overflowY = 'auto';
        }

        setOpenHamburger(!isOpenHamburger);
    };

    return (
        <NavigationTop isStickyMenu={isStickyMenu} animatePosition={animatePosition} className={className}>
            <StyledContainer>
                <Logo onClick={() => router.push('/')} />

                <Hamburger onClick={handleHamburger} isOpenHamburger={isOpenHamburger} ref={buttonRef}>
                    <span></span>
                </Hamburger>
                <DesktopMenu />
            </StyledContainer>
            <MenuOverlay isOpenHamburger={isOpenHamburger}>
                <MobileMenu ref={menuRef} />
            </MenuOverlay>
        </NavigationTop>
    );
};

const slideDown = keyframes`
    from {
      transform: translateY(-100%);
      background-color: transparent;
    }
    
    to {
        transform: translateY(0);
        background-color: #2C4DC3;
    }
`;

const slideUp = keyframes`
    from {
        transform: translateY(0);
        background-color: #2C4DC3;   
    }
  
    to {
        transform: translateY(-100%);
        background-color: transparent;
    }
`;

export const NavigationTop = styled.nav`
    position: ${({ animatePosition }) => (animatePosition ? 'absolute' : 'fixed')};
    left: 0;
    right: 0;
    padding: ${({ animatePosition }) => (animatePosition ? '25px 0' : '10px 0')};
    /* background-color: #2C4DC3; */
    z-index: 101;
    /* box-shadow: 0px 5px 10px 0px #2c4dc3; */
    /* opacity: 0.95; */

    animation-duration: 0.3s;
    animation-fill-mode: none;
    animation-name: ${({ isStickyMenu }) => (isStickyMenu ? slideDown : slideUp)};

    ${({ isStickyMenu }) => isStickyMenu && 'background-color: #2C4DC3;'};
`;

const StyledContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
`;

const Hamburger = styled.div`
    border: 2px solid #c4c4c4;
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    z-index: 2;

    @media screen and (min-width: 768px) {
        display: none;
    }

    span {
        width: 18px;
        height: 2px;
        background-color: #fff;
        position: relative;
        visibility: ${({ isOpenHamburger }) => (isOpenHamburger ? 'hidden' : 'visible')};
        transition: visibility 0s, top 0.3s ease, transform 0.3s ease;

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
            top: ${({ isOpenHamburger }) => (isOpenHamburger ? '0' : '-6px')};
            transform: ${({ isOpenHamburger }) => (isOpenHamburger ? 'rotate(-45deg)' : 'rotate(0)')};
        }

        &:after {
            top: ${({ isOpenHamburger }) => (isOpenHamburger ? '0' : '6px')};
            transform: ${({ isOpenHamburger }) => (isOpenHamburger ? 'rotate(45deg)' : 'rotate(0)')};
        }
    }
`;

const MenuOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    right: ${({ isOpenHamburger }) => (isOpenHamburger ? '0' : '-100%')};
    transition: all 0.3s ease-in-out;
    top: 0;
    display: ${({ isOpenHamburger }) => (isOpenHamburger ? 'block' : 'none')};

    @media screen and (min-width: 768px) {
        display: none;
    }
`;

const MobileMenu = styled(Menu)`
    height: 100%;
    background-color: #0f0f10;
    position: absolute;
    width: 100%;

    > ul {
        padding-top: 121px;
        padding-left: 100px;
        list-style-type: none;
        color: #fff;

        > li {
            padding-bottom: 50px;
            /* cursor: pointer; */

            > ul {
                margin-left: 16px;

                > li {
                    margin-top: 16px;
                }
            }
        }
    }
`;

const DesktopMenu = styled(Menu)`
    display: none;
    color: #fff;
    font-size: 16px;
    text-align: right;

    @media screen and (min-width: 768px) {
        display: block;
    }

    /* vipadashka styles desktop*/
    /* first level */
    > ul {
        margin: 0;

        > li {
            display: inline-block;
            position: relative;
            height: 100%;
            padding: 16px;

            &:last-child {
                padding-right: 0;
            }

            /* second level */
            > ul {
                display: none;
                width: 300px;
                position: absolute;
                top: 100%;
                right: -150%;
                text-align: left;
                background-color: rgba(44, 77, 195, 0.8);
                padding: 16px;

                > li {
                    display: block;
                    margin-left: 0;
                    transition: opacity 0.15s ease;

                    &:not(:last-child) {
                        margin-bottom: 16px;
                    }

                    &:hover {
                        opacity: 0.8;
                    }
                }
            }

            &:hover {
                ul {
                    display: inline-block;
                }
            }
        }
    }
`;
