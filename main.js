const button = document.querySelector('button')
const list = document.querySelector('ul')
const cardContainer = document.querySelector('#cardContainer')


const buttonClick = evt =>{
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    .then(response =>{
        console.log(response.data)
        console.log(response.data.results)
       console.log(response.data.results[0])
        
        let { residents } = response.data.results[0] 
       console.log(residents)
    //    getRes(residents)
       cardInfo(residents)
    })

    .catch(err =>{
        console.log(err)
    })
}   

    const getRes = arr =>{
         list.innerHTML = ""
        arr.forEach(resident =>{
            axios.get(resident)
            .then(response =>{
                 console.log(response.data)
                let { name } = response.data
                let listItem = document.createElement('li')
                listItem.textContent = name
                list.appendChild(listItem)
            })
            .catch(err => console.log(err))
        })
    }

const cardInfo = arr =>{
    arr.forEach(resident =>{
       axios.get(resident)
       .then(response =>{
           let { name,height,mass,gender } =  response.data
           console.log(mass)
           createCard(response.data)  
   })
})
}

const createCard = personObj =>{
const resCard = document.createElement('div')
resCard.classList.add('res-card')

resCard.innerHTML = `<div class="cardCon">
<h1 class="name">${personObj.name}</h1>
<div id="line1"></div>
<img src="https://vignette.wikia.nocookie.net/officialclubpenguinonline/images/9/9d/Galactic_Empire_Logo.png/revision/latest?cb=20200222113608">
<ul>
<li>Height: ${personObj.height}</li>
<div id="line2"></div>
<li>Mass: ${personObj.mass}</li>
<div id="line2"></div>
<li>Gender: ${personObj.gender}</li>
<div id="line2"></div>
</ul>
<div>
`

cardContainer.appendChild(resCard)
}



button.addEventListener('click', buttonClick)
