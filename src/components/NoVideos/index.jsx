
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;// Asegura que el mensaje ocupe toda la altura de la vista
    text-align: center;
    color: #333; // Un color neutro que probablemente combine con tu paleta
    background-color: #f2f2f2; // Un fondo suave
    padding: 20px;
    border-radius: 8px
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`

const Paragraph = styled.p`
    font-size: 16px;
    margin-bottom: 20px;
`
const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background-color: #007bff; // Un color que destaque pero que combine con tu sitio
    border: none;
    border-radius: 5px;
    cursor: pointer;
`
const NoVideos = ({ message }) => {
    return (
        <Container>
            <Title>No hay videos</Title>
            <Paragraph>{message}</Paragraph>
            <Button>Volver a la página principal</Button>
        </Container>
    )
}

export default NoVideos;