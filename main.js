const button = document.querySelector('button')
const list = document.querySelector('ul')

const buttonClick = evt =>{
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    .then(response =>{
        console.log(response.data)
        console.log(response.data.results)
       console.log(response.data.results[0])
        
        let { residents } = response.data.results[0] 
    //    console.log(residents)
       getRes(residents)
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



button.addEventListener('click', buttonClick)