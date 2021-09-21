import express from "express";
import routes from "./src/routes/nftRoutes";
import mongoose from "mongoose";

require("dotenv").config();

const app = express();
const PORT = 8000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// bodyparser setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

// Serving static files
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send(`Server running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});
