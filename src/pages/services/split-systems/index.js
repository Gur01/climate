import { services, splitSystems } from '@/data';
import { PageTemplate } from '@/templates';

export const getStaticProps = async () => {
    return {
        props: { ...splitSystems, services },
    };
};

const Cleaning = (props) => {
    return (
        <PageTemplate {...props}/>
    );
};

export default Cleaning;

