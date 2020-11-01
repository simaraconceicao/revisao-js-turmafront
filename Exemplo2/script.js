//capturando o elemento ul no DOM
let ul = document.querySelector('ul')
console.log(ul)


//Consumindo os dados da API

fetch('https://my-json-server.typicode.com/simaraconceicao/base-minuto/css')
    .then(response => response.json())
    .then(data => {
        //mostrando os dados no console
        console.log(data)
        //iterando a array, criando os itens da lista e renderizando na tela

        return data.map(item =>{
            let li = document.createElement('li')
            li.innerHTML = `${item.title}`
            ul.appendChild(li)
        })
    })
    .catch(err =>{
        //tratando erros
        console.warn('Deu ruim hein')
    })