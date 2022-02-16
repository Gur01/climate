import styled from 'styled-components';

const SwiperNavigation = ({theme = 'black', className}) => {
    return (
        <Navigation theme={theme}>
            <div className={`${className}-prev prev`}>Назад</div>
            <div className={`${className}-scrollbar scrollbar`}></div>
            <div className={`${className}-next next`}>Назад</div>
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

        /* &:after {
            content: 'Назад';
            display: inline-block;
        } */
    }
    
    .next {
        margin-left: 24px;

        /* &:after {
            content: 'Вперед';
            display: inline-block;
        } */
    }

    @media screen and (min-width: 1024px) {
        .prev {

        /* &:after {
            content: 'Назад';
            display: inline-block;
        } */
    }
    
    .next {
        /* &:after {
            content: 'Вперед';
            display: inline-block;
        } */
    }
    }

    .scrollbar {
        height: 1px;
        background-color:#a7b5cf;
        width: 155px;
        position: relative;
        margin-top: 8px;
        display: none;
        
        .swiper-scrollbar-drag {
            background-color: ${({theme}) => theme === 'black' ?'#fff' : '#0F0F10'};
            
        }
        
        @media screen and (min-width: 1024px) {
            display: block;
    }
    }

`