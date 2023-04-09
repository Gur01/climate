import { Container, Layout, Section, Title } from '@/ui';
import styled from 'styled-components';

const PageContent = ({ data }) => {
    const { title, text } = data;

    return (
        <>
            <Section>
                <Container>
                    <StyledTitle dangerouslySetInnerHTML={{ __html: title }} />
                    <Layout columns={5} gap={16}></Layout>
                    <TextBlock columns={7}>
                        <div dangerouslySetInnerHTML={{ __html: text }} />
                    </TextBlock>
                </Container>
            </Section>
            <Section>
                <Container>
                    <StyledTitle>В комплекс услуг входит:</StyledTitle>
                    <Layout columns={5} gap={16}></Layout>
                    <TextBlock columns={7}>
                        <ul>
                            <li>осмотр  на механические повреждения</li>
                            <li>
                                проверка:
                                <ul>
                                    <li>межблочных соединений</li>
                                    <li>на утечку фреона</li>
                                    <li>состояния дренажной системы</li>
                                </ul>
                            </li>
                            <li>замер рабочего давления в системе кондиционера</li>
                            <li>сухая чистка внешнего блока (от пыли) </li>
                            <li>сухая чистка внутреннего блока</li>
                            <li>чистка фильтров внутреннего блока</li>
                            <li>дозаправка хладагента при необходимости (до 100 грамм)</li>
                            <li>рекомендации по правильной эксплуатации</li>
                        </ul>
                    </TextBlock>
                </Container>
            </Section>
        </>
    );
};

export default PageContent;

const StyledTitle = styled(Title)`
    margin-bottom: 40px;

    @media screen and (min-width: 1024px) {
        margin-bottom: 60px;
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
