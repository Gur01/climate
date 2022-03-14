import styled from 'styled-components';
import { ErrorMessage } from './Input';

const Textarea = ({ error, errorMessage = 'Ошибка!', ...rest }) => {
    return (
        <Box>
            <StyledTextarea {...rest} />
            {error && <ErrorMessage>{errorMessage}</ErrorMessage>}

        </Box>
    )
}

export default Textarea;

const Box = styled.div`
    margin-top: 50px;
    `

const StyledTextarea = styled.textarea`
    width: 100%;
    padding: 10px;
    border: 0;
    border-bottom: 1px solid ${({ error }) => error ? '#FF0000' : '#0F0F10'};
    color: ${({ error }) => error ? '#FF0000' : '#0F0F10'};
    opacity: 0.9;
    font-size: 16px;
    font-family: inherit;
    min-height: 100px;
    resize: none;
    line-height:24px;

    &:focus {
        outline-width: 0;
        opacity: 1
    }
;

`