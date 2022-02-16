import styled from 'styled-components';
import Button from './Button';
import Group from './Group';

const Banner = ({ children, ...props }) => {
    return (
        <StyledBanner {...props}>
            <Title>Персональная <span>Скидка 10%</span></Title>
            <Description>Явные признаки победы институционализации разоблачены. Идейные соображения.</Description>
            <Button>Получить скидку</Button>
        </StyledBanner>
    )
}

export default Banner;

const StyledBanner = styled.div`
    background-color: #2C4DC3;
    padding: 85px 105px;
    margin-top: 120px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;

    > div {
        margin-bottom: 30px;
    }
    
    @media screen and (min-width: 1024px) {
        flex-direction: row;
        align-content: center;
        margin-bottom: 0;
        align-items: center;
    }
`;

const Title = styled.div`
    font-size: 40px;
    color: #fff;
    
    span {
        text-decoration: underline;
        text-decoration-color: #FFD337;
    }
`;

const Description = styled.div`
    color: #CBD2F0;
    line-height: 24px;
`;



