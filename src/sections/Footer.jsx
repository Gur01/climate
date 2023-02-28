import { Logo } from '@/components';
import { Container, Layout } from '@/ui';
import styled from 'styled-components';

const Footer = () => {
    return (
        <>
            <StyledFooter>
                <StyledContainer>
                    <Layout columns={3}>
                        <Logo />
                    </Layout>
                    <Layout columns={3}>
                        <ul>
                            <li>раздел</li>
                            <li>раздел</li>
                            <li>раздел</li>
                            <li>раздел</li>
                        </ul>
                    </Layout>
                    <Layout columns={3}>3</Layout>
                    <Layout columns={3}>4</Layout>
                </StyledContainer>
                <SubFooter>
                    <SubFooterContainer>
                        <Copyright>Copyright © {new Date().getFullYear()}</Copyright>
                        <Links>Вконтакте</Links>
                    </SubFooterContainer>
                </SubFooter>
            </StyledFooter>
        </>
    );
};

export default Footer;

const StyledFooter = styled.footer`
    background-color: #0f0f10;
    color: #9f9f9f;
    margin-top: 100px;

    @media screen and (min-width: 1024px) {
        margin-top: 120px;
    }
`;

const StyledContainer = styled(Container)`
    padding-top: 100px;
    padding-bottom: 100px;
`;

const SubFooter = styled.div`
    border-top: 1px solid #272727;
    padding: 22px 0;
`;

const SubFooterContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
`;

const Copyright = styled.div``;

const Links = styled.div``;
