import Container from '../elements/Container';
import Layout from '../elements/Layout';
import Section from '../elements/Section';
import Title from '../elements/Title';
import styled from 'styled-components';

const Advantages = ({ children, ...props }) => {
    return (
        <Section>
            <Container>
                <Layout columns={5} gap={16}>
                    <StyledTitle>О компании</StyledTitle>
                </Layout>
                <TextBlock columns={7}>
                    <p>Явные признаки победы институционализации разоблачены. Идейные соображения высшего порядка, а также современная методология разработки не даёт нам.</p>
                    <p>Явные признаки победы институционализации разоблачены. Идейные соображения высшего порядка, а также современная методология разработки не даёт нам.</p>
                    <p>Явные признаки победы институционализации разоблачены. Идейные соображения высшего порядка, а также современная методология разработки не даёт нам.</p>
                    <p>Явные признаки победы институционализации разоблачены. Идейные соображения высшего порядка, а также современная методология разработки не даёт нам.</p>
                    <p>Явные признаки победы институционализации разоблачены. Идейные соображения высшего порядка, а также современная методология разработки не даёт нам.</p>
                    <StyledImage src="/images/worker.jpg" alt="" />
                </TextBlock>
            </Container>
        </Section>
    )
}

export default Advantages;

const StyledTitle = styled(Title)`
    font-size: 26px;
    color: #0F0F10;
`

const TextBlock = styled(Layout)`
    p {
        margin-bottom: 40px;
        
        &:last-child {
            margin-bottom: 60px;
        }
    }
`

const StyledImage = styled.img`
        margin-top: 20px;
`


