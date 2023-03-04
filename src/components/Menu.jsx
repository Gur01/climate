import { forwardRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { menu } from '@/data/menu'
import { useRouter } from 'next/router';

const Menu = forwardRef(({ className }, ref) => {
    const router = useRouter();

    return (
        <StyledMenu ref={ref} className={className}>
            <ul>
                {menu.map(item => {
                    return item.children ?
                        <li>
                            <span>{item.name}</span>
                            {console.log(item)}
                            <ul>
                                {item.children.map((innerItem) => {
                                    return (
                                        <StyledLink key={innerItem.id} isActive={router.pathname == innerItem.path}>
                                            <Link href={innerItem.path}>{innerItem.name}</Link>
                                        </StyledLink>
                                    )
                                })}
                            </ul>
                        </li> :
                        <StyledLink key={item.id} isActive={router.pathname == item.path}>
                            <Link href={item.path}>{item.name}</Link>
                        </StyledLink>

                })}
            </ul>
        </StyledMenu>
    );
})

Menu.displayName = "Menu";

export default Menu;

const StyledLink = styled.li`
    opacity: ${({isActive})=> isActive ? '0.8' : '1'};
`

const StyledMenu = styled.div`
    top: 0;
    right: 0;
    width: 100%;

    /* vipadashka styles desktop*/
    /* first level */
    > ul {
        margin: 0;
        
        > li {
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
                    transition: opacity .15s ease;
                    
                    &:not(:last-child) {
                        margin-bottom: 16px;
                    }

                    &:hover{
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