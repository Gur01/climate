import { Cross } from '@/components';
import { useModal } from '@/context';
import styled from 'styled-components';

const ContactForm = () => {
    const {setIsOpenedModal, setWasSendForm} = useModal()

    const closeModal = () => {
        setWasSendForm(false);
        setIsOpenedModal(false);
    }

    return (
        <StyledForm>
            <StyledCross onClick={closeModal}/>
            <Title>Заявка принята!</Title>
            <SubTitle>Мы скоро с вами свяжемся.</SubTitle>
        </StyledForm>
    )
}

export default ContactForm;

const StyledForm = styled.div`
    padding: 60px;
    position: relative;
`;

const Title = styled.div`
    font-size: 26px;
    line-height: 30px;
    margin-bottom: 10px;
    color: #2C4DC3;

`
const SubTitle = styled.div`
    font-size: 16px;
    line-height: 24px;
`

const StyledCross = styled(Cross)`
    position: absolute;
    right: 21px;
    top: 21px;
    cursor: pointer;
`