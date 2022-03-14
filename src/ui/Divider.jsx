
import styled from 'styled-components';

const Divider = ({ children, blocks, ...props }) => {
    return (
        <StyledDivider blocks={blocks} {...props}>
            {children}
        </StyledDivider>
    )
}

export default Divider;

const StyledDivider = styled.div`
    display: flex;
	justify-content: space-between;
    width: 100%;
    align-items: flex-start;

    > * {
        width: ${({blocks})=> blocks ? `calc(100% / ${blocks})` : 'auto' }
    }
`;

