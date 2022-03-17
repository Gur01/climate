import { Banner } from '@/components';
import { Container, Section } from '@/ui';

const BannerSection = ({data}) => {
    const {title, subTitle, buttonText } = data;
    
    return (
        <Section>
            <Container>
                <Banner title={title} subTitle={subTitle} buttonText={buttonText}/>
            </Container>
        </Section>
    )
}

export default BannerSection;

