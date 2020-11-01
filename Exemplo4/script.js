let card = document.getElementById('card')

fetch('https://my-json-server.typicode.com/simaraconceicao/base-minuto/logica')
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        return data.map(({id, title, description, img, url }) => {
            let gif = document.createElement('img')
            gif.setAttribute('src', `${img}`)

            let titulo = document.createElement('h2')
            titulo.innerHTML = `${title}`

            let descricao = document.createElement('p')
            descricao.innerHTML = `${description}`

            card.appendChild(titulo)
            card.appendChild(gif)
            card.appendChild(descricao)

        })
    })
    .catch(err =>{
        console.warn('ta erradinho bb')
    })