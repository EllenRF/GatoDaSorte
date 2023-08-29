import axios from "axios";

const sorteAPI = axios.create({ baseURL: "https://apig-ato-ellenrf.vercel.app/" })

// Utilizado para pegar as frases
async function getSortes() {
    try{
        const response = await sorteAPI.get('/')
        return response.data
    } catch(err) {console.log(err)}
}

// Utilizado para pegar as imagens
async function getImagens() {
    sessionStorage.setItem("carregandoImagem", true);

    try{
        const response = await sorteAPI.get('/img')
        sessionStorage.setItem("img", response.data)
        sessionStorage.setItem("carregandoImagem", false);
    }
    catch(err){ console.log(err) }
}

export {
    getSortes,
    getImagens
}