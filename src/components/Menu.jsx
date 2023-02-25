import { forwardRef } from 'react';
import styled from 'styled-components';

const Menu = forwardRef(({ className }, ref) => {
    return (
        <StyledMenu ref={ref} className={className}>
            <ul>
                <li onClick={() => router.push('/')}>Главная</li>
                <li onClick={() => router.push('about')}>О нас</li>
                <li>FAQ</li>
                <li>Статьи</li>
            </ul>
        </StyledMenu>
    );
})

export default Menu;

const StyledMenu = styled.div`
    top: 0;
    right: 0;
    width: 100%;

    /* @media screen and (min-width: 768px) {
        width: 50%;
    }
    @media screen and (min-width: 1024px) {
        width: calc((100vw - 1230px) / 2 + 400px);
    }*/
`;