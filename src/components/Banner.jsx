import { useModal } from '@/context';
import { Button } from '@/ui';
import styled from 'styled-components';

const Banner = ({ title, subTitle, buttonText, ...rest }) => {
    const { setIsOpenedModal } = useModal();

    return (
        <StyledBanner {...rest}>
            <Title dangerouslySetInnerHTML={{ __html: title }} />
            <Description>{subTitle}</Description>
            <Button
                onClick={() => {
                    setIsOpenedModal(true);
                    console.log('hello');
                }}
            >
                {buttonText}
            </Button>
        </StyledBanner>
    );
};

export default Banner;

const StyledBanner = styled.div`
    background-color: #2c4dc3;
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
        text-decoration-color: #ffd337;
    }
`;

const Description = styled.div`
    color: #cbd2f0;
    line-height: 24px;
`;
