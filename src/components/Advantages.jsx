import styled from 'styled-components';
import Section from '../elements/Section';
import Title from '../elements/Title';
import Container from '../elements/Container';
import Divider from '../elements/Divider';
import AdvantagesCard from '../elements/AdvantagesCard';
import Group from '../elements/Group';
import Banner from '../elements/Banner';

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


