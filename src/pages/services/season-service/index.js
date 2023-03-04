import { services, seasonService } from '@/data';
import { PageTemplate } from '@/templates';

export const getStaticProps = async () => {
    return {
        props: { ...seasonService, services },
    };
};

const Cleaning = (props) => {
    return (
        <PageTemplate {...props}/>
    );
};

export default Cleaning;

