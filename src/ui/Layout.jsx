import styled from 'styled-components';

export const Layout = ({ children, columns = 1, gap = 0, ...props }) => {
    return (
        <StyledLayout columns={columns} gap={gap} {...props}>
            {children}
        </StyledLayout>
    );
};

const StyledLayout = styled.div`
    width: 100%;
    margin-right: ${({ gap }) => `${gap}px`};
    display: inline-block;
    vertical-align: top;

    @media screen and (min-width: 1024px) {
        width: ${({ columns, gap }) => `calc(100% / 12 * ${columns} - ${gap}px)`};
    }
`;
