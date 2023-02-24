import { Container, Layout, Section, Title } from '@/ui';
import styled from 'styled-components';

const Advantages = ({ data, ...rest }) => {
    const { title, text } = data;

    return (
        <Section {...rest}>
            <Container>
                <Layout columns={5} gap={16}>
                    <StyledTitle>{title}</StyledTitle>
                </Layout>
                <TextBlock columns={7}>
                    <div dangerouslySetInnerHTML={{ __html: text }} />
                    <StyledImage src="/images/worker.jpg" alt="" />
                </TextBlock>
            </Container>
        </Section>
    );
};

export default Advantages;

const StyledTitle = styled(Title)`
    font-size: 26px;
    color: #0f0f10;
    margin-bottom: 40px;
`;

const TextBlock = styled(Layout)`
    p {
        margin-bottom: 40px;

        &:last-child {
            margin-bottom: 60px;
        }
    }
`;

const StyledImage = styled.img`
    margin-top: 20px;
    width: 100%;
`;
