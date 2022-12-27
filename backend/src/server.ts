import express from "express";
import cors from "cors";
import { sample_foods } from './data';

const app = express();

app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200'],
}));

app.get("/api/foods", (req, res) => {
    res.send(sample_foods)
});

const PORT = 5000;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
