
let card = document.getElementById('card')

const renderContent = async () =>{
    try{        
        let response = await axios.get('https://my-json-server.typicode.com/simaraconceicao/base-sabedoria/javascript')
        let dados = await response.data

        console.log(dados)

        return dados.map(item => {

            let titulo =  document.createElement('h2')
            titulo.innerHTML = `${item.title}`
            card.appendChild(titulo)

            let image = document.createElement('img')
            image.setAttribute('src', `${item.img}`)
            card.appendChild(image)            
        })
        
    }catch{
        console.warn('onde foi que eu errei?')
    }
    
}

renderContent()