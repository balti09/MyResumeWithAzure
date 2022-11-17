window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounter12.azurewebsites.net/api/GetResumeCounter?code=opJVB0do1VlayBAZt7dxZuOIzZpETJVvyC-UpYUyLV28AzFu7cGsag==';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("call the Api.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console;log(error);
    });
    return count;
} ;