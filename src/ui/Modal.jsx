import styled from 'styled-components';

const Modal = ({open, children}) => {
    return (
        <>
            {open && (
                <>
                    <Wrapper>
                        <StyledModal>{children}</StyledModal>
                    </ Wrapper>
                    {/* <Background /> */}
                </>
            )}
        </>
    )

}

export default Modal;

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
	align-items: center;
    z-index: 1000;

    @media screen and (min-width: 768px) {
        z-index: 1;
    }
`

const Background = styled.div`
    width: 100%;
    height: 100vh;
    opacity: 0.5;
    background-color: #fff;
    z-index: 1000;
    top: 0;
    bottom: 0;
    position: fixed;
`

const StyledModal = styled.div`
    background-color: #fff;
    z-index: 1001;
    width: 100%;
    height: 100%;
    
    @media screen and (min-width: 768px) {
        width: 580px;
        height: auto;
        flex-direction: row;
        align-content: center;
        margin-bottom: 0;
        align-items: center;
    }
`