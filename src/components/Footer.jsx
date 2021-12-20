import styled from 'styled-components';
import Container from '../elements/Container';
import Layout from '../elements/Layout'
import Logo from '../elements/Logo'

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
                    <Copyright>Copyright © 2021</Copyright>
                    <Links>Вконтакте</Links>
                </SubFooter>
            </StyledFooter>
        </>
    )
}

export default Footer;

const StyledFooter = styled.footer`
    background-color: #0F0F10;
    color: #9F9F9F;
`

const StyledContainer = styled(Container)`
    padding: 100px 0;
`

const SubFooter = styled(Container)`
    display: flex;
    justify-content: space-between;
`

const Copyright = styled.div`
`

const Links = styled.div`
`