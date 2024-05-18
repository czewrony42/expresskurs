import dotEnv from 'dotenv/config'
import express from 'express'
import quotes from './src/quotes.js'
// import costam from "./src/midleware.js"
const app = express()


const port = process.env.PORT || 3000
app.set('view engine', 'ejs')
app.set('views', './src/views')
app.use(express.static('public'))

// app.use(costam)

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', async (req, res) => {
  const data = await quotes()
  res.render('about', {cytat: data.quote})
})

app.get('/about/contact', (req, res) => {
  res.send("oho")
})

// app.get('/json', async (req, res) => {
//   try {
//     const data = await quotes()
//     res.send(data.quote)
//   } catch (error) {
//     console.log(error)
//     res.status(500).send('Coś poszło nie tak')
//   }
// })

app.use((req, res) => {
  res.status(404)
  res.render('errors/404')
})
app.use((err, req, res, next) => {
  console.error(err.message)
  res.status(500)
  res.render('errors/500')
})

app.listen(port, () => {
  console.log('Aplikacja działa na ' + `http://localhost:${port}`)
})