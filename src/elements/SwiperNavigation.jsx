import styled from 'styled-components';
import { ArrowLeft } from './Icons'

const SwiperNavigation = ({ theme = 'black', className }) => {
    return (
        <Navigation theme={theme}>
            <div className={`${className}-prev prev`}></div>
            <div className={`${className}-prev prev-mobile`}>
                <ArrowLeft />
            </div>

            <div className={`${className}-scrollbar scrollbar`}></div>

            <div className={`${className}-next next`}></div>
            <div className={`${className}-next next-mobile`}>
                <ArrowLeft />
            </div>
        </Navigation>
    )
}

export default SwiperNavigation;

const Navigation = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;

    .prev-mobile, 
    .next-mobile {
        border: 2px solid #C4C4C4;
        width: 56px;
        height: 56px;
        display: flex;
        justify-content: center;
	    align-items: center;
        cursor: pointer;

        svg path {
            stroke: ${({ theme }) => theme === 'black' ? '#fff' : '#0F0F10'};
        }
    }

    @media screen and (min-width: 450px) {
        .prev-mobile, 
        .next-mobile {
            display: flex;
        }
    }

    .next-mobile {
        transform: rotate(180deg);
        margin-left: 20px;
    }

    .swiper-button-disabled {
        opacity: 0.5;
    }

    @media screen and (min-width: 1024px) {
        .prev,
        .next {
            color: ${({ theme }) => theme === 'black' ? '#fff' : '#0F0F10'};
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

            &:after {
                content: 'Назад';
                display: inline-block;
            }
        }
        
        .next {
            margin-left: 24px;

            &:after {
                content: 'Вперед';
                display: inline-block;
            }
        }

        .prev-mobile, 
        .next-mobile {
            display: none;
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
                background-color: ${({ theme }) => theme === 'black' ? '#fff' : '#0F0F10'};
                
            }
            
            @media screen and (min-width: 1024px) {
                display: block;
        }
    }

`