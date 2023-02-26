import styled from 'styled-components';

const Title = ({ children, ...props }) => {
    return <StyledTitle {...props}>{children}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.h3`
    font-weight: normal;
    font-size: 32px;

    span {
        position: relative;
        z-index: 10;

        &:after {
            height: 3px;
            bottom: -2px;
            left: 0;
            width: 100%;
            background-color: #ffd337;
            position: absolute;
            display: inline-block;
            content: "";
            z-index: 0;
        }
    }

    @media screen and (min-width: 540px) {
        font-size: 40px;
    }
`;
