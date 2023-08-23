import { styled } from "styled-components";
import fechar from "../../imagens/close.png"
import { getSortes } from "../../servicos/servicos";
import { useEffect, useState } from "react";
import Carregamento from "../carregamento/indexCarregamento";

function ModaldaSorte({ onClose }) {
    const [sorte, setSortes] = useState([])
    const [carregamento, setCarregamento] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            fetchSorte();
            setCarregamento(false);
        }, 1000);

    }, [])

    async function fetchSorte() {
        const sortesAPI = await getSortes()
        setSortes(sortesAPI)
    }

    return (
        <CaixaOverlay>
            <CaixaDiv>
                <FecharCaixa src={fechar} onClick={onClose} />
                {/*  Verifica o estado do carregamento para mostrar o conteudo da sorte */}
                {carregamento ? (<Carregamento />) : (<div>
                    <p>"{sorte}"</p>
                    <ImagemGato src={sessionStorage.getItem("url")}></ImagemGato>
                </div>
                )}
            </CaixaDiv>
        </CaixaOverlay>
    )
}

const ImagemGato = styled.img`
width: 70vw;
height: 60vh;
`

const FecharCaixa = styled.img`
width: 3vw;
padding: 5px 10px;
cursor: pointer;
`
const CaixaOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
`

const CaixaDiv = styled.div`
background-color: #fff;
padding: 20px;
border: 3px solid #000;
border-radius: 15px;
width: 75vw;
height: 80vh;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

`
export default ModaldaSorte;
