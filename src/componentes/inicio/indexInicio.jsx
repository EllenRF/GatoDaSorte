import logo from '../../imagens/imgInicio.png'
import styled from 'styled-components'

function Inicio() {
    return (
        <InicioDiv>
            <p>Qual será seu gato?</p>
            <ImagemInicio src={logo} alt='Icone de gato'></ImagemInicio>
        </InicioDiv>
    )
}

const InicioDiv = styled.div`
        color: white;
        font-size: 30px;
        font-weight: bold;
    `
const ImagemInicio = styled.img`
        width: 24vw;
    `
export default Inicio;