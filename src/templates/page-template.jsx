import { ContactForm, ContactFormSuccess } from '@/components';
import { useModal } from '@/context';
import { BannerSection, Footer, Navigation, PageContent, PageHeader, Services } from '@/sections';
import { Modal } from '@/ui';
import styled from 'styled-components';

export const PageTemplate = ({ header, content, services: data, banner }) => {
    const { isOpenedModal, wasSendForm } = useModal();

    return (
        <>
            <StyledNavigation />
            <PageHeader data={header} />
            <PageContent data={content} />
            <Services data={data} noTitle />
            <BannerSection data={banner} />
            <Footer />
            <Modal open={isOpenedModal}>
                {!wasSendForm && <ContactForm />}
                {wasSendForm && <ContactFormSuccess />}
            </Modal>
        </>
    );
};

export default PageTemplate;

const StyledNavigation = styled(Navigation)`
    position: fixed;
    top: 0;
    animation: none;
    background-color: #2C4DC3;
    padding: 10px 0;
`
