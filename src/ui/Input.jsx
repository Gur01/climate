import styled from 'styled-components';

export const Input = ({ errorMessage, ...rest }) => {
    return (
        <Box>
            <StyledInput type="text" {...rest} />
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Box>
    );
};

const Box = styled.div`
    margin-top: 50px;
    position: relative;
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    border: 0;
    border-bottom: 1px solid ${({ error }) => (error ? '#FF0000' : '#0F0F10')};
    opacity: 0.8;
    font-size: 16px;
    font-family: inherit;
    color: ${({ error }) => (error ? '#FF0000' : '#0F0F10')};

    &:focus {
        outline-width: 0;
        opacity: 1;
    }
`;

export const ErrorMessage = styled.div`
    font-size: 12px;
    color: #ff0000;
    margin-top: 3px;
    position: absolute;
    right: 0;
`;
