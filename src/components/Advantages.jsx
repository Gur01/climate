import styled from 'styled-components';
import Section from './Section';
import Title from './Title';
import Container from './Container';
import Divider from './Divider';
import AdvantagesCard from './AdvantagesCard';
import Group from './Group';
import Banner from './Banner';

const Advantages = ({ children, ...props }) => {
    return (
        <Section>
            <Container>
                <Group>
                    <Divider blocks={2}>
                        <Title>Наши <span>преимущества</span></Title>
                        <p>Явные признаки победы институционализации разоблачены.
                            Идейные соображения высшего порядка, а также современная методология разработки не даёт нам.</p>
                    </Divider>

                    <Divider blocks={4}>
                        <Group type="hotizontal">
                            <AdvantagesCard />
                            <AdvantagesCard />
                            <AdvantagesCard />
                            <AdvantagesCard />                        
                        </Group>   
                    </Divider>
                    
                </Group>
                <Banner />
            </Container>

        </Section>
    )
}

export default Advantages;


