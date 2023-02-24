import { Header, HeaderTop } from '@/components';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const PageHeader = ({ data }) => {
    const { image } = data;

    return (
        <StyledHeader>
            <Background image={image} />
        </StyledHeader>
    );
};

export default PageHeader;

const StyledHeader = styled(Header)`
    ${HeaderTop} {
        background-color: #2c4dc3;
    }
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    ${({ image }) =>
        image &&
        `background-image: linear-gradient(to top, rgba(44, 77, 195, 0.3), rgba(44, 77, 195, 0.3)), url(${image})`};
    background-size: cover;
    background-position: center;
`;
