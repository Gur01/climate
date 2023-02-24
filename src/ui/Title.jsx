import styled from 'styled-components';

const Title = ({ children, ...props }) => {
    return <StyledTitle {...props}>{children}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.h3`
    font-weight: normal;
    font-size: 32px;

    span {
        text-decoration: underline;
        text-decoration-color: #ffd337;
    }

    @media screen and (min-width: 540px) {
        font-size: 40px;
    }
`;
