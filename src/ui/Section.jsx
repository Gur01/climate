import styled from 'styled-components';

export const Section = ({ children, ...props }) => {
    return <StyledSection {...props}>{children}</StyledSection>;
};

const StyledSection = styled.section`
    margin-top: 60px;

    @media screen and (min-width: 768px) {
        margin-top: 100px;
    }

    @media screen and (min-width: 1024px) {
        margin-top: 120px;
    }
`;
