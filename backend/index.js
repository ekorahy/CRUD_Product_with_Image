import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from './routes/ProductRoute.js';

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(FileUpload());
// static file image
app.use(express.static("public"));

app.use(ProductRoute);

app.listen(5000, () => console.log('Server up and Running...'));