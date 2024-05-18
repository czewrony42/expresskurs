import express from "express"
import quotes from "./quotes.js"
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/about', async (req, res) => {
  const data = await quotes()
  res.render('about', { cytat: data.quote })
})


export default router