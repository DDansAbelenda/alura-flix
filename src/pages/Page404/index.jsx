import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    padding: 20px;
`;

const Title = styled.h1`
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: #257BE5;
    text-shadow: 2px 2px 4px #515c69;
`;

const Subtitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 20px;
    color: #fff;
`;

const HomeButton = styled(Link)`
    font-size: 1.5rem;
    color: #fff;
    background-color: #007BFF;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    &:hover {
        background-color: #0056b3;
    }
`;

const Page404 = () => {
    return (
        <Container>
            <Title>404 {':('}</Title>
            <Subtitle>Página no encontrada</Subtitle>
            <HomeButton to="/">Volver al Inicio</HomeButton>
        </Container>
    );
};

export default Page404;
