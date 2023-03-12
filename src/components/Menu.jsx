import { menu } from '@/data/menu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { forwardRef } from 'react';
import styled from 'styled-components';
import { ArrowLeft } from '@/ui';

const Menu = forwardRef(({ className }, ref) => {
    const router = useRouter();

    return (
        <StyledMenu ref={ref} className={className}>
            <ul>
                {menu.map((item) => {
                    return item.children ? (
                        <li key={item.id}>
                            <DropdownItem>
                                <span>{item.name}</span>
                                <StyledArrowLeft />
                            </DropdownItem>
                            <ul>
                                {item.children.map((innerItem) => {
                                    return (
                                        <StyledLink key={innerItem.id} isActive={router.pathname == innerItem.path}>
                                            <Link href={innerItem.path}>{innerItem.name}</Link>
                                        </StyledLink>
                                    );
                                })}
                            </ul>
                        </li>
                    ) : (
                        <StyledLink key={item.id} isActive={router.pathname == item.path}>
                            <Link href={item.path}>{item.name}</Link>
                        </StyledLink>
                    );
                })}
            </ul>
        </StyledMenu>
    );
});

Menu.displayName = 'Menu';

export default Menu;

const StyledLink = styled.li`
    opacity: ${({ isActive }) => (isActive ? '0.8' : '1')};
`;

export const StyledArrowLeft = styled(ArrowLeft)`
    transform: rotate(-90deg);
    width: 8px;
    display: inline-block;
    margin-left: 10px;
    transition: transform 0.15s ease;

    @media screen and (max-width: 767px) {
        display: none;
    }
`;

const StyledMenu = styled.div`
    /* top: 0;
    right: 0;*/
    /* width: 100%; 
 */
    li {
        cursor: pointer;
    }
`;



const DropdownItem = styled.div`
    display: flex;
    align-items: center;
`;
