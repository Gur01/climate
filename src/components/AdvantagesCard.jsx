import styled from 'styled-components';
import Image from 'next/image';

const AdvantagesCard = ({ children, ...props }) => {
    return (
        <Card>
            <img src="./profi.svg" alt="" />
            <Title>Профессионалы своего дела</Title>
            <p>Разнообразный и богатый опыт говорит нам, что начало повседневной работы по.</p>
        </Card>
    )
}

export default AdvantagesCard;

const Title = styled.div`
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 25px;
`;

const Card = styled.div`
    padding-right: 30px;

    img {
        margin-bottom: 55px;
    }
`;


