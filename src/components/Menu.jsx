import { menu } from '@/data/menu';
import { Link } from '@/ui';
import { useRouter } from 'next/router';
import { forwardRef } from 'react';
import styled from 'styled-components';

const Menu = forwardRef(({ className }, ref) => {
    const router = useRouter();

    return (
        <StyledMenu ref={ref} className={className}>
            <ul>
                {menu.map((item) => {
                    return item.children ? (
                        <li key={item.id}>
                            <span>{item.name}</span>
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

const StyledMenu = styled.div`
    /* top: 0;
    right: 0;*/
    /* width: 100%; 
 */
    ul {
        li {
            cursor: pointer;
        }
    }
`;
