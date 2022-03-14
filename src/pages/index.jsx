import { About, Advantages, Feedback, Footer, Header, Services } from '@/blocks';
import { ContactForm, ContactFormSuccess } from '@/components';
import { useModal } from '@/context';
import { data } from '@/data';
import { Modal } from '@/ui';

export const getStaticProps = async () => {
    return {
        props: data
    }
}

export default function Home({
    header,
    advantages,
    services,
    feedback,
    about
}) {
    const { isOpenedModal, wasSendForm } = useModal();

    return (
        <>
            <Header data={header} />
            <Advantages data={advantages} />
            <Services data={services} />
            <Feedback data={feedback} />
            <About data={about} />
            <Footer />
            <Modal open={isOpenedModal}>
                {!wasSendForm && <ContactForm />}
                {wasSendForm && <ContactFormSuccess />}
            </Modal>
        </>
    )
}
