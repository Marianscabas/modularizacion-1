import getData from "./getData.js";
import { showData } from "./showData.js";

const element =document.querySelector('.list-group');


const endpoint = 'http://localhost:3001/products/'; 

document.addEventListener('DOMContentLoaded', () =>{
    const data = getData(endpoint)
    showData(data, element);
})


element.addEventListener("click", async (e) =>{
    const btnDetail = e.target.classList.contains("btn-outline-dark");
    const id = e.target.id
    if (btnDetail) {
        const lista = await getData(endpoint)
        const objeto = lista.find(lis => lis.id === Number(id))
        localStorage.setItem("Detail", JSON.stringify(objeto))
        window.location.href = "detail.html"
    }

})