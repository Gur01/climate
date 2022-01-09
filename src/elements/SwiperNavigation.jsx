import styled from 'styled-components';

const SwiperNavigation = ({theme = 'black'}) => {
    return (
        <Navigation theme={theme}>
            <div className='prev'>Назад</div>
            <div className='scrollbar'></div>
            <div className='next'>Вперед</div>
        </Navigation>
    )
}

export default SwiperNavigation

const Navigation = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;

    .prev,
    .next {
        color: ${({theme}) => theme === 'black' ?'#fff' : '#0F0F10'};
        cursor: pointer;
        font-size: 16px;
        user-select: none;

        &.swiper-button-disabled {
            opacity: .35;
            cursor: auto;
            pointer-events: none;
        }
    }

    .prev {
        margin-right: 24px;
    }

    .next {
        margin-left: 24px;
    }

    .scrollbar {
        height: 1px;
        background-color:#a7b5cf;
        width: 155px;
        position: relative;
        margin-top: 8px;
        
        .swiper-scrollbar-drag {
            background-color:#fff;
        }
    }

`