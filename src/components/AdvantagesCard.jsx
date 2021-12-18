import styled from 'styled-components';
import Image from 'next/image';

const AdvantagesCard = ({ children, ...props }) => {
    return (
        <div>
            <img src="./profi.svg" alt="" />
            <Title>Профессионалы своего дела</Title>
            <p>Разнообразный и богатый опыт говорит нам, что начало повседневной работы по.</p>
        </div>
    )
}

export default AdvantagesCard;

const Title = styled.div`
    font-size: 20px;
    line-height: 23px;
`;

