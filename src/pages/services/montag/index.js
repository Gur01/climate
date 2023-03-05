import { services, montag } from '@/data';
import { PageTemplate } from '@/templates';

export const getStaticProps = async () => {
    return {
        props: { ...montag, services },
    };
};

const Cleaning = (props) => {
    return <PageTemplate {...props} />;
};

export default Cleaning;
