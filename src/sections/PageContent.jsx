import { Container, Layout, Section, Title } from '@/ui';
import styled from 'styled-components';

const PageContent = ({ data }) => {
    const { title, text } = data;

    return (
        <>
            <Section>
                <Container>
                    <StyledTitle style={{ marginBottom: '60px' }} dangerouslySetInnerHTML={{ __html: title }} />
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
    @media screen and (min-width: 1024px) {
        max-width: 50%;
    }
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
