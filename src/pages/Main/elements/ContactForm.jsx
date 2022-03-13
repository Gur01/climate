import { Button, Cross, Input, Textarea } from '@/components';
import { useModal } from '@/context';
import { useState } from 'react';
import styled from 'styled-components';

const phoneRegEx = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

const ContactForm = () => {
    const [error, setError] = useState({
        name: '',
        phone: '',
        message: '',
        confirm: ''
    });
    const [state, setState] = useState({
        name: '',
        phone: '',
        message: '',
        confirm: ''
    });

    const {setIsOpenedModal, setWasSendForm} = useModal()

    const validateForm = () => {
        const newErrors = { ...error };

        //name
        if (!state.name || state.name.length < 3) {
            newErrors.name = 'Укажите имя';
        } else {
            newErrors.name = '';
        }

        //phone
        if (!phoneRegEx.test(state.phone)) {
            newErrors.phone = 'Укажите номер телефона';
        } else {
            newErrors.phone = '';
        }

        // confirm
        if (!state.confirm) {
            newErrors.confirm = 'confirm';
        } else {
            newErrors.confirm = '';
        }


        setError(newErrors);

        for (const key in newErrors) {
            if (newErrors[key]) return false;
        }

        return true;
    }

    const submit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            console.log('send form');
            setWasSendForm(true);
        }
    }

    const onChange = (event) => {
        const { name, value } = event.currentTarget

        if (value) {
            setError({ ...error, [name]: '' });
        }

        setState((state) => ({ ...state, [name]: value }))
    }

    const onChangeCheckbox = (event) => {
        const { name } = event.currentTarget
        const { checked } = event.target

        if (checked) {
            setError({ ...error, [name]: false });
        }

        setState((state) => ({ ...state, [name]: checked }))
    }

    const closeModal = () => {
        console.log('hello');
        setIsOpenedModal(false)
    }

    return (
        <StyledForm>
            <StyledCross onClick={closeModal}/>
            <Title>Заказать звонок</Title>
            <SubTitle>Оставь заявку и мы перезвоним в течении 15 минут</SubTitle>
            <Input placeholder="Имя" name="name" errorMessage={error.name} onChange={onChange} />
            <Input placeholder="Телефон" name="phone" errorMessage={error.phone} onChange={onChange} />
            <Textarea placeholder="Сообщение" name="message" onChange={onChange} />
            <CheckboxBlock error={error.confirm}>
                <input type="checkbox" name="confirm" onChange={onChangeCheckbox} id="confirm"/> 
                <label htmlFor="confirm">Даю согласие на обработку персональных данных</label>
            </CheckboxBlock>
            
            <StyledButton type='submit' onClick={submit}>Заказать звонок</StyledButton>
        </StyledForm>
    )
}

export default ContactForm;

const StyledForm = styled.form`
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

const StyledButton = styled(Button)`
    margin-top: 33px;
`;

const CheckboxBlock = styled.div`
    margin-top: 27px;
    cursor: pointer;

    input {
        cursor: pointer;
    }
    
    label {
        margin-left: 17px;
        color: ${({ error }) => error ? '#FF0000' : '#0F0F10'};
        cursor: pointer;

    }
`

const StyledCross = styled(Cross)`
    position: absolute;
    right: 21px;
    top: 21px;
    cursor: pointer;
`