import styled from 'styled-components';

const Logo = (props) => {
    return (
        <StyledLogo {...props}>
            <LogoImage src="/logo.png" alt="Logo" />
            <LogoTitle>
                <div>
                    <span>air</span>Сleaning
                </div>
                <div>Ремонт кондиционеров</div>
            </LogoTitle>
        </StyledLogo>
    );
};

export default Logo;

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const LogoImage = styled.img`
    margin-right: 17px;
`;

const LogoTitle = styled.div`
    color: #fff;

    > div:first-child {
        font-size: 18px;
        font-family: inherit;

        span {
            color: #ffd337;
        }
    }

    > div:last-child {
        font-family: inherit;
        font-size: 12px;
        font-weight: 400;
        color: #9f9f9f;
    }
`;
