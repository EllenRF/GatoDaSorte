import { Link } from 'react-router-dom';
import styled from 'styled-components'

function Header() {
    return (
        <AppHeader>
            <div className='header-titulo'>
                <Link to="/">
                    <ImagemHeader
                        src="https://see.fontimg.com/api/renderfont4/OVXe8/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0ZGRjhGOCIsInQiOjF9/R2F0byBkYSBTb3J0ZQ/hello-catto.png" alt="Cat fonts">
                    </ImagemHeader>
                </Link>
            </div>
        </AppHeader>
    )
}
const ImagemHeader = styled.img`
    width: 32vw;
    padding-top: 1em;
    `

const AppHeader = styled.header`
display: flex;
  justify-content: center;
  font-size: 20px;
  background-color: transparent;
  color: #4b6276;
  font-weight: bold;
`
export default Header;