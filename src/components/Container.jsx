import styled from 'styled-components';

const Container = ({ children, className }) => {
    return (
        <StyledContainer className={className}>{children}</StyledContainer>
    )
}

export default Container;

const StyledContainer = styled.div`
    width: 1230px;
    margin: 0 auto;
    /* border: 1px solid grey; */
    position: relative;
`;