import mongoose from "mongoose";

const AnimeSchema = new mongoose.Schema({
    title: String,
    genre: String,
    episodes: String,
    seasons: String,
    poster: String,
});

const Anime = mongoose.model('Anime', AnimeSchema);
export default Anime;