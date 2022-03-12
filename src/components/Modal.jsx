import styled from 'styled-components';

const Modal = ({open, children}) => {
    return (
        <>
            {open && <Wrapper>
                <StyledModal>{children}</StyledModal>
            </Wrapper>}
        </>
    )

}

export default Modal;

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: 0.5;
`;

const StyledModal = styled.div`
    width: 580px;
    height: 634px;
`