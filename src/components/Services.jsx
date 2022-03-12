import { SwiperSlide } from "swiper/react";
import Container from '../elements/Container';
import Section from '../elements/Section';
import ServicesCard from '../elements/ServicesCard';
import Title from '../elements/Title';
import CustomSwiper from './CustomSwiper';
import SwiperNavigation from "../elements/SwiperNavigation";

const Services = ({ data, ...rest }) => {
    const {title, items} = data;

    return (
        <Section {...rest}>
            <Container>
                <Title style={{marginBottom: '60px'}} dangerouslySetInnerHTML={{__html: title}} />

                <CustomSwiper
                    spaceBetween={16}
                    slidesPerView={3}
                    navigation={{
                        prevEl: '.services-prev',
                        nextEl: '.services-next',
                    }}
                    scrollbar={{
                        hide: false,
                        el: '.services-scrollbar',
                        draggable: false,
                    }}
                    breakpoints = {{
                        320: {
                          slidesPerView: 1,
                        },
                        540: {
                          slidesPerView: 2,
                        },
                        1024: {
                          slidesPerView: 3,
                        }
                    }}
                >
                    {items.map((item, index)=> {
                        return (
                            <SwiperSlide key={index}>
                                <ServicesCard image={item?.image} title={item?.title} subTitle={item?.subTitle}/>
                            </SwiperSlide>
                        )
                    })}
                </CustomSwiper>
                <SwiperNavigation theme="white" className='services'/>
            </Container>
        </Section>
    )
}

export default Services;