import { services, service } from '@/data';
import { PageTemplate } from '@/templates';

export const getStaticProps = async () => {
    return {
        props: { ...service, services },
    };
};

const Cleaning = (props) => {
    return (
        <PageTemplate {...props}/>
    );
};

export default Cleaning;

