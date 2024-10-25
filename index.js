import express from 'express';
import Anime from './models/anime.js'
import mongoose from 'mongoose';

const app = express()
const port = 3000

await mongoose.connect(`${process.env.DBKEY}`);

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.json());

app.get('/', (req, res) => {
  res.render('../views/home.ejs')
})

app.get('/featured', (req, res)=>{
  res.render('../views/featured.ejs')
})

app.get('/form', (req, res)=>{
  res.render('../views/form.ejs')
})

app.get('/api/anime-data', async (req, res)=>{
  try{
    const animeData = await Anime.find();
    res.json(animeData);
  }
  catch(err)
  {
    res.status(500).json({ error: 'Internal server error' });
  }
})

app.post('/form', async (req, res)=>{
    try{
      const anime = new Anime({title: req.body.title, genre: req.body.genre, episodes: req.body.episodes, seasons: req.body.seasons, poster: req.body.poster});
      anime.save();
      res.redirect('/form');
  }
  catch(error){
      res.redirect('/form');
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})