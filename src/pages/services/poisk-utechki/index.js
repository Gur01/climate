import { services, poiskUtechki } from '@/data';
import { PageTemplate } from '@/templates';

export const getStaticProps = async () => {
    return {
        props: { ...poiskUtechki, services },
    };
};

const Cleaning = (props) => {
    return <PageTemplate {...props} />;
};

export default Cleaning;
