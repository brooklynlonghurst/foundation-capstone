const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.use(express.static(`${__dirname}/client`))

const { getPlants, addPlants, deletePlant } = require('./controller')

app.get('/api/plants', getPlants)
app.post('/api/plants', addPlants)
app.delete('/api/plants/:id', deletePlant)

const PORT = 4000;

app.listen(PORT, () => console.log('server listening on port 4000'))