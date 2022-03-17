import { PageContent, PageHeader, Services, Footer, BannerSection } from '@/blocks';
import { about, services } from '@/data';

export const getStaticProps = async () => {
    return {
        props: {...about, services}
    }
}

const About = ({header, content, services, banner}) => {
    return (
        <>  
            <PageHeader data={header}/>
            <PageContent data={content}/>
            <Services data={services} noTitle/>
            <BannerSection data={banner} />
            <Footer />

        </>
    )
}

export default About;
