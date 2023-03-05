import { services, regularService } from '@/data';
import { PageTemplate } from '@/templates';

export const getStaticProps = async () => {
    return {
        props: { ...regularService, services },
    };
};

const Cleaning = (props) => {
    return <PageTemplate {...props} />;
};

export default Cleaning;
