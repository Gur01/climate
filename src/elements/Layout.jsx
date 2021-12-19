import styled from 'styled-components';

const Layout = ({ children, columns=1, gap=0, ...props }) => {
    return (
        <StyledLayout columns={columns} gap={gap} {...props}>
            {children}
        </StyledLayout>
    )
}

export default Layout;

const StyledLayout = styled.div`
    width: ${({columns, gap})=> `calc(100% / 12 * ${columns} - ${gap}px)`};
    margin-right: ${({gap})=> `${gap}px`};
    display: inline-block;
    vertical-align: top;
`;

