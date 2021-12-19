import styled from 'styled-components';
import Button from './Button';

const FeedbackCard = ({ children, ...props }) => {
    return (
        <Card>
                <Text>Разнообразный и богатый опыт говорит нам, что убеждённость некоторых оппонентов создаёт предпосылки для прогресса профессионального сообщества. Кстати,  многие известные личности являются только методом политического участия и указаны как претенденты на роль ключевых факторов.</Text>
                <AuthorBlock>
                    <UserImage>
                        <img src="./images/user.png" alt="" />
                    </UserImage>
                    
                    <Author>Степан Розин</Author>
                </AuthorBlock>
        </Card>
    )
}

export default FeedbackCard;

const Card = styled.div`
    background-color: #fff;
    padding: 42px 52px;
    display: inline-block;
`

const Text = styled.p`
    color: #2F3447;
    margin-bottom: 52px;
`;

const Author = styled.p`
    font-size: 20px;
    line-height: 23px;
    color: #2F3447;
`;

const AuthorBlock = styled.div`
    display: flex;
    align-items: center;
`

const UserImage = styled.div`
    border-radius: 50%;
    width: 36px;
    height: 36px;
    overflow: hidden;
    margin-right: 20px;

    img {
        width: 100%;
        height: 100%;
    }
`


