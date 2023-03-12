import styled from 'styled-components';
import { Button } from '@/ui';

const ServicesCard = ({ image, title, subTitle, href, ...rest }) => {
    return (
        <Card {...rest}>
            <ImageWrapper>
                <img src={image} alt="" />
            </ImageWrapper>
            <TextBlock>
                <Title>{title}</Title>
                <Description>{subTitle}</Description>
                <Button href={href}>Подробнее</Button>
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

const ImageWrapper = styled.div`
    height: 230px;
    width: 100%;

    img {
        vertical-align: bottom;
        height: 100%;
    }
`

const Card = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    cursor: grab;
`;
