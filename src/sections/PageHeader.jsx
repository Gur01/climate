import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const PageHeader = ({ data }) => {
    const { image } = data;

    return (
        <Background image={image} />
    );
};

export default PageHeader;

const Background = styled.div`
    width: 100%;
    height: 50vh;
    ${({ image }) =>
        image &&
        `background-image: linear-gradient(to top, rgba(44, 77, 195, 0.3), rgba(44, 77, 195, 0.3)), url(${image})`};
    background-size: cover;
    background-position: center;
`;
