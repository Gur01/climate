import { Container, Layout, Section, Title } from '@/ui';
import styled from 'styled-components';

const PageContent = ({ data }) => {
    const { title, text } = data;

    return (
        <>
            <Section>
                <Container>
                    <Title style={{ marginBottom: '60px' }} dangerouslySetInnerHTML={{ __html: title }} />
                    <Layout columns={5} gap={16}></Layout>
                    <TextBlock columns={7} >
                        <div dangerouslySetInnerHTML={{ __html: text }} />
                    </TextBlock>
                </Container>
            </Section>
        </>
    );
};

export default PageContent;

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

    img {
        margin-top: 20px;
        margin-bottom: 20px;
        width: 100%;
    }
`;

const StyledImage = styled.img`
    margin-top: 20px;
    width: 100%;
`;
