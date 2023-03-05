import styled from 'styled-components';

export const Container = ({ children, className }) => {
    return <StyledContainer className={className}>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
    max-width: 1250px;
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
    /* border: 1px solid grey; */
    position: relative;
`;
