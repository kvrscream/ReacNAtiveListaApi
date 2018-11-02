//Usar biblioteca axios para facilitar o uso de api
import axios from 'axios';


const api = axios.create({
    //O create do Axios usamos baseUrl para definir parte do caminho como base
    baseURL: "http://localhost:3001/api"
});


export default api;