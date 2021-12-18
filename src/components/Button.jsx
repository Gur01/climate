import styled from 'styled-components';

const Button = ({ children, ...props }) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    )
}

export default Button;

const StyledButton = styled.button`
    height: 56px;
    padding: 16px 45px;
    background-color: #FFD337;
    color: #000;
    border: none;
	outline: none;
    font-size: 16px;
    cursor: pointer;
    white-space: nowrap
`;

