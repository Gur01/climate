import { Container, Layout } from '@/components';
import styled from 'styled-components';
import Logo from '../elements/Logo';

const Footer = () => {
    return (
        <>
            <StyledFooter>
                <StyledContainer>
                    <Layout columns={3}><Logo /></Layout>
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
                        <Copyright>Copyright © 2021</Copyright>
                        <Links>Вконтакте</Links>
                    </SubFooterContainer>
                </SubFooter>
            </StyledFooter>
        </>
    )
}

export default Footer;

const StyledFooter = styled.footer`
    background-color: #0F0F10;
    color: #9F9F9F;
    margin-top: 100px;

    @media screen and (min-width: 1024px) {
        margin-top: 120px
    }

`

const StyledContainer = styled(Container)`
    padding-top: 100px;
    padding-bottom: 100px;
`

const SubFooter = styled.div`
    border-top: 1px solid #272727;
    padding: 22px 0;
`

const SubFooterContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
`

const Copyright = styled.div`
`

const Links = styled.div`
`