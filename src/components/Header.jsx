import { Logo } from "@/components";
import { useClickOutside } from "@/hooks/useClickOutside";
import { Container } from "@/ui";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const Header = ({ children, className }) => {
  const [isOpenHamburger, setOpenHamburger] = useState(false);
  const router = useRouter();
  const navRef = useRef(null);
  const buttonRef = useRef(null);
  const headerRef = useRef(null);

  useClickOutside(
    navRef,
    (e) => {
      e.stopPropagation();

      // const body = document.body;
      // body.style.overflowY = 'auto';

      setOpenHamburger(false);
    },
    buttonRef
  );

  const handleHamburger = (e) => {
    e.stopPropagation();
    const body = document.body;

    // if (!isOpenHamburger) {
    //     body.style.overflowY = 'hidden';
    // } else {
    //     body.style.overflowY = 'auto';
    // }

    setOpenHamburger(!isOpenHamburger);
  };

  return (
    <StyledHeader ref={headerRef} className={className}>
      <HeaderTop>
        <StyledContainer>
          <Logo onClick={() => router.push("/")} />

          <Hamburger
            onClick={handleHamburger}
            isOpenHamburger={isOpenHamburger}
            ref={buttonRef}
          >
            <span></span>
          </Hamburger>
        </StyledContainer>
      </HeaderTop>
      {children}
      <NavigationOverlay isOpenHamburger={isOpenHamburger}>
        <Navigation ref={navRef}>
          <ul>
            <li onClick={() => router.push("/")}>Главная</li>
            <li onClick={() => router.push("about")}>О нас</li>
            <li>FAQ</li>
            <li>Статьи</li>
          </ul>
        </Navigation>
      </NavigationOverlay>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  height: 768px;
  width: 100%;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    height: 810px;
  }
`;

export const HeaderTop = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  padding: 25px 0;
  /* background-color: #2C4DC3; */
  z-index: 101;
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

  span {
    width: 18px;
    height: 2px;
    background-color: #fff;
    position: relative;
    visibility: ${({ isOpenHamburger }) =>
      isOpenHamburger ? "hidden" : "visible"};
    transition: visibility 0s, top 0.3s ease, transform 0.3s ease;

    &:before,
    &:after {
      width: 100%;
      height: inherit;
      position: absolute;
      display: inline-block;
      content: "";
      background-color: inherit;
      visibility: visible;
      transition: inherit;
    }

    &:before {
      top: ${({ isOpenHamburger }) => (isOpenHamburger ? "0" : "-6px")};
      transform: ${({ isOpenHamburger }) =>
        isOpenHamburger ? "rotate(-45deg)" : "rotate(0)"};
    }

    &:after {
      top: ${({ isOpenHamburger }) => (isOpenHamburger ? "0" : "6px")};
      transform: ${({ isOpenHamburger }) =>
        isOpenHamburger ? "rotate(45deg)" : "rotate(0)"};
    }
  }
`;

const NavigationOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  right: ${({ isOpenHamburger }) => (isOpenHamburger ? "0" : "-100%")};
  transition: all 0.3s ease-in-out;
  z-index: 100;
  top: 0;
`;

const Navigation = styled.div`
  top: 0;
  height: 100%;
  background-color: #0f0f10;
  position: absolute;
  right: 0;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
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
