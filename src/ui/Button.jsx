import Link from 'next/link';
import styled, { css } from 'styled-components';

export const Button = ({ children, href, ...props }) => {

    return href ? <StyledLink href={href}>{children}</StyledLink> : <StyledButton {...props}>{children}</StyledButton>;
};

const styles = css`
    height: 56px;
    padding: 16px 45px;
    background-color: #ffd337;
    color: #000;
    border: none;
    outline: none;
    font-size: 16px;
    cursor: pointer;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledButton = styled.button`
    ${styles}
`;

const StyledLink = styled(Link)`
    ${styles}
`;
