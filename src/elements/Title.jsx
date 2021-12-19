import styled from 'styled-components';

const Title = ({ children, ...props }) => {
    return (
        <StyledTitle {...props}>
            {children}
        </StyledTitle>
    )
}

export default Title;

const StyledTitle = styled.h3`
    font-size: 40px;
    font-weight: normal;
    
    span {
        text-decoration: underline;
        text-decoration-color: #FFD337;
    }
`;

