//Recupera a ul
let ul = document.getElementById('lista')
console.log(lista)

//consome dados e mostra no console

fetch('https://my-json-server.typicode.com/simaraconceicao/base-minuto/db')
    .then(response => response.json())     
    .then(data =>{
        console.log(data)       
    })

