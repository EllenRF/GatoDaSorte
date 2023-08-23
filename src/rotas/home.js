import Inicio from '../componentes/inicio/indexInicio'
import Header from '../componentes/header/indexHeader';
import Botao from '../componentes/botaoGato/indexBotao';
import { styled, } from 'styled-components';


function Home() {
  return (
    <AppDiv>
      <Header></Header>
      <div>
        <Inicio></Inicio>
        <Botao></Botao>
      </div>
    </AppDiv>
  );
}

const AppDiv = styled.div`
 background: hsla(312, 77%, 86%, 1);

background: linear-gradient(90deg, hsla(312, 77%, 86%, 1) 0%, hsla(220, 61%, 79%, 1) 100%);

background: -moz-linear-gradient(90deg, hsla(312, 77%, 86%, 1) 0%, hsla(220, 61%, 79%, 1) 100%);

background: -webkit-linear-gradient(90deg, hsla(312, 77%, 86%, 1) 0%, hsla(220, 61%, 79%, 1) 100%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#f7c0ec", endColorstr="#a7bdea", GradientType=1 );
    text-align: center;
    width: 100vw;
    height: 100vh;
    position: relative;
  `
export default Home;
