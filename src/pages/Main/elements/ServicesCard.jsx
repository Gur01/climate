import styled from 'styled-components';
import {Button} from '@/components';

const ServicesCard = ({ image, title, subTitle, ...rest }) => {
    return (
        <Card {...rest}>
            <img src={image} alt="" />
            <TextBlock>
                <Title>{title}</Title>
                <Description>{subTitle}</Description>
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


