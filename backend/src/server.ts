import express from "express";
import cors from "cors";
import { sample_foods, sample_tags } from './data';

const app = express();

app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200'],
}));

app.get("/api/foods", (req, res) => {
    res.send(sample_foods);
});

app.get("/api/foods/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
   res.send(sample_foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase())));
});

app.get("/api/foods/tags", (req, res) => {
    res.send(sample_tags);
});

app.get("/api/foods/tag/:tagName", (req, res) => {
    const searchTag = req.params.tagName;
    res.send(searchTag === 'All' ? sample_foods : sample_foods.filter(food => food.tags?.map((tag: string) => tag.toLowerCase()).includes(searchTag.toLowerCase())));
});

app.get("/api/foods/:foodId", (req, res) => {
    const foodId = req.params.foodId
    const food = sample_foods.find(food => food.id == foodId);
    res.send(food);
})

const PORT = 5002;

app.listen(PORT, () => console.log(`App listening on high port ${PORT}`));
