import { services, diagnostics } from '@/data';
import { PageTemplate } from '@/templates';

export const getStaticProps = async () => {
    return {
        props: { ...diagnostics, services },
    };
};

const Cleaning = (props) => {
    return (
        <PageTemplate {...props}/>
    );
};

export default Cleaning;

