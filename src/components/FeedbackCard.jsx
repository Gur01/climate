import styled from 'styled-components';

const FeedbackCard = ({ text, name, image, ...rest }) => {
    return (
        <Card {...rest}>
            <Text>{text}</Text>
            <AuthorBlock>
                <UserImage>
                    <img src={image} alt="" />
                </UserImage>

                <Author>{name}</Author>
            </AuthorBlock>
        </Card>
    );
};

export default FeedbackCard;

const Card = styled.div`
    background-color: #fff;
    padding: 42px 52px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

const Text = styled.p`
    color: #2f3447;
    margin-bottom: 52px;
`;

const Author = styled.p`
    font-size: 20px;
    line-height: 23px;
    color: #2f3447;
`;

const AuthorBlock = styled.div`
    display: flex;
    align-items: center;
`;

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
`;
