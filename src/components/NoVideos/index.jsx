
import styled from "styled-components"
import PropTypes from "prop-types"
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh; // Asegura que el mensaje ocupe toda la altura de la vista
    text-align: center;
    padding: 1.25rem;
`

const Title = styled.h1`
    color: #257BE5;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.25rem;
`

const Paragraph = styled.p`
    color: #e7e3e3;
    font-size: 1rem;
    margin-bottom: 1.25rem;
`


const NoVideos = ({ message }) => {
    return (
        <Container>
            <Title>Error al cargar la página</Title>
            <Paragraph>{message}</Paragraph>
        </Container>
    )
}

NoVideos.propTypes = {
    message: PropTypes.string.isRequired
}

export default NoVideos;