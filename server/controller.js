const plants = require('./db.json')
let globalId = 10

module.exports = {
    getPlants: (req, res) => {
        res.status(200).send(plants)
    }, 

    addPlants: (req, res) => {
        const { title, imageURL, description } = req.body
        console.log(title)
        console.log(imageURL)
        console.log(description)
        if(!title || !imageURL || !description){
            res.sendStatus(400)
            return
        }
        const copy = {...req.body, id: globalId}
        console.log(plants)
        plants.push(copy)
        console.log(plants)
        globalId++
        res.status(200).send(plants)
    }, 

    deletePlant: (req, res) => {
        const { id } = req.params
        const idx = plants.findIndex(plant => plant.id === +id)
        if(idx >= 0){
            plants.splice(idx, 1)
            res.status(200).send(plants)
        } else {
            res.sendStatus(400)
        } 
    }
}
