let card = document.getElementById('card')

fetch('https://my-json-server.typicode.com/simaraconceicao/base-minuto/html')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        return data.map(item =>{
            let img = document.createElement('img')
            img.setAttribute('src', `${item.img}`)

            let titulo = document.createElement('p')
            titulo.innerHTML = `${item.title}`

            card.appendChild(titulo)
            card.appendChild(img)

        })
    })
    .catch(err =>{
        console.warn('Deu ruim bb')
    })