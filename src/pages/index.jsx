import { Modal } from '@/components';
import { useModal } from '@/context';
import { data } from '@/data';
import About from './Main/components/About';
import Advantages from './Main/components/Advantages';
import Feedback from './Main/components/Feedback';
import Footer from './Main/components/Footer';
import Header from './Main/components/Header';
import Services from './Main/components/Services';
import ContactForm from './Main/elements/ContactForm';
import ContactFormSuccess from './Main/elements/ContactFormSuccess';

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
    const {isOpenedModal, wasSendForm} = useModal();

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
