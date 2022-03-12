import styled from 'styled-components';
import Button from './Button';

const Banner = ({ title, subTitle, ...rest }) => {
    return (
        <StyledBanner {...rest}>
            <Title dangerouslySetInnerHTML={{__html: title}} />
            <Description>{subTitle}</Description>
            <Button>Получить скидку</Button>
        </StyledBanner>
    )
}

export default Banner;

const StyledBanner = styled.div`
    background-color: #2C4DC3;
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    
    > div {
        margin-bottom: 30px;
    }
    
    @media screen and (min-width: 540px) {
        padding: 85px 105px;
    }
    
    @media screen and (min-width: 1024px) {
        margin-top: 120px;
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



