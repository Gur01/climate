import styled from 'styled-components';

const AdvantagesCard = ({ image, title, subTitle }) => {
    return (
        <Card>
            <img src={image} alt="" />
            <Title>{title}</Title>
            <p>{subTitle}</p>
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
    margin-bottom: 36px;
    width: 100%;
    
    @media screen and (min-width: 540px) {
        width: 50%;
    }

    @media screen and (min-width: 1024px) {
        width: 25%;
        margin-bottom: 0;
    }


    img {
        margin-bottom: 30px;
        
        @media screen and (min-width: 1024px) {
            margin-bottom: 55px;
        }
    }
`;


