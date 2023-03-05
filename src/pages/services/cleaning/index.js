import { cleaning, services } from '@/data';
import { PageTemplate } from '@/templates';

export const getStaticProps = async () => {
    return {
        props: { ...cleaning, services },
    };
};

const Cleaning = (props) => {
    return <PageTemplate {...props} />;
};

export default Cleaning;
