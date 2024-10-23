const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('../views/home.ejs')
})

app.get('/featured', (req, res)=>{
  res.render('../views/featured.ejs')
})

app.get('/form', (req, res)=>{
  res.render('../views/form.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})