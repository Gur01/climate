import styled from 'styled-components';
import { Button } from '@/ui';

const ServicesCard = ({ image, title, subTitle, ...rest }) => {
    return (
        <Card {...rest}>
            <img src={image} alt="" />
            <TextBlock>
                <Title>{title}</Title>
                <Description>{subTitle}</Description>
                <Button>Подробнее</Button>
            </TextBlock>
        </Card>
    );
};

export default ServicesCard;

const Title = styled.div`
    font-size: 26px;
    line-height: 30px;
    margin-bottom: 25px;
    color: #2c4dc3;
    display: flex;
    letter-spacing: 1px;
`;

const Description = styled.p`
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 40px;
    color: #0f0f10;
    display: flex;
    justify-content: center;
    width: 100%;
    letter-spacing: 0.3px;
    flex-grow: 1;
`;

const TextBlock = styled.div`
    padding: 25px 10px;
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const Card = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;

    img {
        vertical-align: bottom;
        width: 100%;
    }

    /* &:hover {
        ${TextBlock} {
            background-color: #2C4DC3;
        }

        ${Title} {
            color: #fff;
        }

        ${Description} {
            color: #D5DBF3;
        }
    } */
`;
