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
                <StyledGroup>
                    <AdvantagesTitle>
                        <StyledTitle>Наши <span>преимущества</span></StyledTitle>
                        <TitleDescription>Явные признаки победы институционализации разоблачены.
                            Идейные соображения высшего порядка, а также современная методология разработки не даёт нам.</TitleDescription>
                    </AdvantagesTitle>

                    <AdvantagesGroup>
                            <AdvantagesCard />
                            <AdvantagesCard />
                            <AdvantagesCard />
                            <AdvantagesCard />
                    </AdvantagesGroup>

                </StyledGroup>
                <Banner />
            </Container>

        </Section>
    )
}

export default Advantages;

const StyledGroup = styled(Group)`
display: block;

/* > * {
    width: 100%;

    @media screen and (min-width: 1024px) {
        width: 50%;
    }
} */
`

const StyledTitle = styled(Title)`
    margin-bottom: 25px;

    @media screen and (min-width: 1024px) {
        margin-bottom: 0;
    }
    
`

const AdvantagesGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0;
    
    
    @media screen and (min-width: 1024px) {
        flex-wrap: nowrap;
        margin-bottom: 25px;
    }
    
`

const TitleDescription = styled.p`
    
`

const AdvantagesTitle = styled.div`
    display: block;

    @media screen and (min-width: 1024px) {
        display: flex;
    }
    
    > * {
        width: 100%;
        
        @media screen and (min-width: 1024px) {
            width: 50%;
        }
    }
`


