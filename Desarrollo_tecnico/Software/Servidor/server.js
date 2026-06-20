require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { createServer } = require('http')
const { Server } = require('socket.io')
const Datastore = require('nedb-promises')

const PORT = process.env.PORT || 3001

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, { cors: { origin: '*' } })

app.use(cors())
app.use(express.json())

const eventosDB = Datastore.create({ filename: 'data/eventos.db', autoload: true })
const alertasDB = Datastore.create({ filename: 'data/alertas.db', autoload: true })

app.post('/api/eventos', async (req, res) => {
  const { nodo, temperatura, flama, humo, tipo } = req.body
  if (!nodo || temperatura === undefined) {
    return res.status(400).json({ error: 'faltan campos: nodo, temperatura' })
  }

  const evento = {
    nodo,
    temperatura,
    flama: flama ?? 0,
    humo: humo ?? 0,
    tipo: tipo || 'status',
    timestamp: new Date().toISOString()
  }

  const doc = await eventosDB.insert(evento)

  if (evento.tipo === 'alerta') {
    await alertasDB.insert({ ...evento })
  }

  io.emit('nuevo-evento', evento)

  res.status(201).json(doc)
})

app.get('/api/eventos', async (req, res) => {
  const limite = parseInt(req.query.limite) || 50
  const docs = await eventosDB.find({}).sort({ timestamp: -1 }).limit(limite)
  res.json(docs)
})

app.get('/api/nodos', async (req, res) => {
  const todos = await eventosDB.find({}).sort({ timestamp: -1 })
  const mapa = {}
  for (const e of todos) {
    if (!mapa[e.nodo]) mapa[e.nodo] = e
  }
  res.json(Object.values(mapa))
})

app.get('/api/alertas', async (req, res) => {
  const limite = parseInt(req.query.limite) || 100
  const docs = await alertasDB.find({}).sort({ timestamp: -1 }).limit(limite)
  res.json(docs)
})

httpServer.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})
