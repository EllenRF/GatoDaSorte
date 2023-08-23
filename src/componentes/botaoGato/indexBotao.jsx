import { useState } from "react";
import { styled } from "styled-components"
import ModaldaSorte from "../modalSorte/indexModal";
import { getImagens } from "../../servicos/servicos";

function Botao() {
  const [mostrarModal, setModal] = useState(false);
  const abrirModal = () => { setModal(true) };
  const fecharModal = () => { setModal(false) };

  return (
    <div>
      <BotaoGato onClick={() => {
        abrirModal()
        getImagens();
      }}>
        Crie seu Gato
      </BotaoGato>
      {mostrarModal && <ModaldaSorte onClose={fecharModal} />}
    </div>
  )
}


const BotaoGato = styled.button`
  background:  transparent;
  border: 4px solid #6987a0;
  width: 24vw;
  color: #6987a0;
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  font-size: 25px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transition: all 200ms;
  
  &:hover {
    margin-top: 10px;
    transform: scale(1.2);
    color: #000;
    border-color: #000;
  }
`

export default Botao;
