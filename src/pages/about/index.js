import { BannerSection, Footer, PageContent, PageHeader, Services, Navigation } from '@/sections';
import { ContactForm, ContactFormSuccess } from '@/components';
import { useModal } from '@/context';
import { about, services } from '@/data';
import { Modal } from '@/ui';
import styled from 'styled-components';

export const getStaticProps = async () => {
    return {
        props: { ...about, services },
    };
};

const About = ({ header, content, services, banner }) => {
    const { isOpenedModal, wasSendForm } = useModal();

    return (
        <>
            <StyledNavigation />
            <PageHeader data={header} />
            <PageContent data={content} />
            <Services data={services} noTitle />
            <BannerSection data={banner} />
            <Footer />
            <Modal open={isOpenedModal}>
                {!wasSendForm && <ContactForm />}
                {wasSendForm && <ContactFormSuccess />}
            </Modal>
        </>
    );
};

export default About;

const StyledNavigation = styled(Navigation)`
    position: fixed;
    top: 0;
    animation: none;
    background-color: #2C4DC3;
    padding: 10px 0;
`
