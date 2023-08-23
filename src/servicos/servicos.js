import axios from "axios";
import Cookies from "js-cookie";

// Utilizado para pegar as frases
const sorteAPI = axios.create({ baseURL: "https://glitch.com/~gato-api" })
async function getSortes() {
    const response = await sorteAPI.get('/')
    return response.data
}

// Utilizado para pegar as imagens
async function getImagens() {
    const csrfToken = Cookies.get('csrfToken');
    const apiKey = process.env.CAT_API_KEY;
    const url = "https://api.thecatapi.com/v1/images/search"
    sessionStorage.setItem("carregandoImagem", true);

    axios.get(url, { withCredentials: true, headers: { "x-api-key": apiKey, "X-CSRF-TOKEN": csrfToken } })
        .then(function (response) {
            sessionStorage.setItem("url", response.data[0].url)
            sessionStorage.setItem("carregandoImagem", false);
        })
        .catch(err => { console.log(err) })
}

export {
    getSortes,
    getImagens
}