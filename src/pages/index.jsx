import { ContactForm, ContactFormSuccess } from '@/components';
import { useModal } from '@/context';
import { main, services } from '@/data';
import { About, Advantages, BannerSection, Feedback, Footer, MainHeader, Navigation, Services } from '@/sections';
import { Modal } from '@/ui';
import { useRef } from 'react';

export const getStaticProps = async () => {
    return {
        props: { ...main, services },
    };
};

export default function Home({ header, advantages, services, feedback, about, banner }) {
    const { isOpenedModal, wasSendForm } = useModal();
    const headerRef = useRef(null);

    return (
        <>
            <Navigation headerRef={headerRef} />
            <MainHeader data={header} ref={headerRef} />
            <Advantages data={advantages} />
            <BannerSection data={banner} />
            <Services data={services} />
            <Feedback data={feedback} />
            <About data={about} />
            <Footer />
            <Modal open={isOpenedModal}>
                {!wasSendForm && <ContactForm />}
                {wasSendForm && <ContactFormSuccess />}
            </Modal>
        </>
    );
}
