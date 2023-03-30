const plants = require('./db.json')
const bcrypt = require('bcryptjs')
const users = []
let globalId = 2

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
    }, 

    login: (req, res) => {
        console.log('Logging In User')
        const { loginEmail, loginPassword } = req.body
        for (let i = 0; i < users.length; i++) {
          const existingPassword = bcrypt.compareSync(loginPassword, users[i].loginPassword)
          if (users[i].loginEmail === loginEmail && existingPassword) {
            console.log(users[i])
            const secureUser = {...users[i]}
            delete secureUser.loginPassword
            console.log(secureUser)
            return res.status(200).send(secureUser)
          }
        }
        res.status(400).send("User not found.")
    },

    signUp: (req, res) => {
        console.log('Signing Up User')
        console.log(req.body)

        const { signUpName, signUpEmail, signUpPassword } = req.body

        const salt = bcrypt.genSaltSync(5)
        const passwordHash = bcrypt.hashSync(signUpPassword, salt)

        let userObj = {
            signUpPassword: passwordHash,
            signUpName,
            signUpEmail
        }
        
        users.push(userObj)

        let secureUser = {...userObj}
        delete secureUser.signUpPassword
        res.status(200).send(secureUser)
    }

}
