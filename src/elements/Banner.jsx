import styled from 'styled-components';
import Button from './Button';
import Group from './Group';

const Banner = ({ children, ...props }) => {
    return (
        <StyledBanner {...props}>
            <Group type="hotizontal" style={{alignItems: 'center'}}>
                <Title>Персональная <span>Скидка 10%</span></Title>
                <Description>Явные признаки победы институционализации разоблачены. Идейные соображения.</Description>
                <Button>Получить скидку</Button>
            </Group>
        </StyledBanner>
    )
}

export default Banner;

const StyledBanner = styled.div`
    background-color: #2C4DC3;
    padding: 85px 105px;
    margin-top: 120px;
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
`;



