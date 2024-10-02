import express from "express";
import { urlencoded } from "express";
import { json } from "express";

const port = process.env.PORT || 8000;

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.get("/", (_req, res) => {
    res.status(200).json({ message: "Hello World!" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;
