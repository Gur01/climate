import { about, services } from '@/data';
import { PageTemplate } from '@/templates';

export const getStaticProps = async () => {
    return {
        props: { ...about, services },
    };
};

const About = (props) => {
    return <PageTemplate {...props} />;
};

export default About;
