import loading from '../../imagens/loading.gif';
import { styled } from 'styled-components';

function Carregamento() {
  return (
    <CarregaDiv>
      <img src={loading} alt="Carregando" />
    </CarregaDiv>
  );
};

const CarregaDiv = styled.div`
  margin: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    width: 100px;
  }
  `
export default Carregamento;