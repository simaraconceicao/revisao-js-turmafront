let input = document.getElementById('usuario')
let btn = document.getElementById('btn')
let resultado = document.getElementById('resultado')


btn.addEventListener('click', async (e)=> {
    try{
        e.preventDefault() 

        let userGithubValue = input.value
        let usuario = await axios.get(`https://api.github.com/users/${userGithubValue}`)

        let texto = document.createElement('h2')
        texto.innerHTML = `${usuario.data.name}, seu humor é:`
        resultado.appendChild(texto)


        let gif = await axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=b46MWywKt5JwuSCnpEa7q9KNRDtPUc02`)
        let array = gif.data.data
    
        
        let indexAleatorio = array.reduce(()=>{
            return Math.floor(Math.random() * array.length)
        })       
        let pegaGif = array[indexAleatorio].images.downsized.url        
           
            
        let img = document.createElement('img')       
        img.setAttribute('src', pegaGif)   
        resultado.appendChild(img) 
             
        
        
    }catch{
        console.warn('deu ruim')
    }
    

    
})

