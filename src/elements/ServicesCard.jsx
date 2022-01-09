import styled from 'styled-components';
import Button from './Button';

const ServicesCard = ({ children, ...props }) => {
    return (
        <Card>
            <img src="./images/services1.jpg" alt="" />
            <TextBlock>
                <Title>Ремонт кондиционера</Title>
                <Description>Ваш кондиционер не холодит? Тогда Вам сюда.</Description>
                <Button>Заказать услугу</Button>
            </TextBlock>
        </Card>
    )
}

export default ServicesCard;

const Title = styled.div`
    font-size: 26px;
    line-height: 30px;
    margin-bottom: 25px;
    color: #2C4DC3;
    display: flex;
    letter-spacing: 1px;
`;

const Description = styled.p`
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 40px;
    color: #0F0F10;
    display: flex;
    justify-content: center;
    width: 80%;
    letter-spacing: 0.3px;
`;

const TextBlock = styled.div`
    padding: 45px;

`

const Card = styled.div`

    img {
        vertical-align: bottom;
        width: 100%;
    }

    &:hover {
        ${TextBlock} {
            background-color: #2C4DC3;
        }

        ${Title} {
            color: #fff;
        }

        ${Description} {
            color: #D5DBF3;
        }
    }
`;


