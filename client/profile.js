const plantContainer = document.querySelector('#plant-pic-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api`

const plantCallback = ({ data: plants }) => displayPlants(plants)
const errCallback = err => console.log(err)

const getAllPlants = () => axios.get(baseURL + '/plants').then(plantCallback).catch(errCallback)
const createPlant = body => axios.post(baseURL + '/plants', body).then(plantCallback).catch(errCallback)
const deletePlant = id => axios.delete(`${baseURL}/plants/${id}`).then(plantCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let imageURL = document.querySelector('#img')
    let description = document.querySelector('#description')

    let bodyObj = {
        title: title.value,
        imageURL: imageURL.value,
        description: description.value
    }
    console.log(bodyObj)

    createPlant(bodyObj)

    title.value = ''
    imageURL.value = ''
    description = ''
}


function createPlantCard(plant){
    const plantCard = document.createElement('div')
    plantCard.classList.add('plant-card')

    plantCard.innerHTML = `<img alt='plant picture' src=${plant.imageURL} class="plant-picture"/>
    <p class="plant-title">${plant.title}</p>
    <p class="plant-description">${plant.description}</p>
    <button class="deletePlant" onclick="deletePlant(${plant.id})">Remove</button>`

    plantContainer.appendChild(plantCard)
}

function displayPlants(arr) {
    plantContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createPlantCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllPlants()