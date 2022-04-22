function searchProduct(query){
    const url = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=${query}';
    fetch(url)
        .then(response=>response.json())
        .then((jsonData)=>{
            const results = jsonData.map(element => element.brands);
            renderResults(results);
        });
}

function renderResults(results) {
    const list = document.getElementById("resultsList");
    list.innerHTML = "";
    results.forEach(result =>{
        const element = document.createElement("li");
        element.innerText = result;
        list.appendChild(element);
    })
}
let searchTimeoutToken = 0;
window.onload = () => {
    const searchFieldElement = document.getElementById("searchField");
    searchFieldElement.onkeyup = (event) =>{
        searchTimeoutToken = setTimeout(()=>{
            searchProduct(searchFieldElement.value);
        }, 250);
    };
}

