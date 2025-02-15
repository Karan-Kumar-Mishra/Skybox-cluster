import express from "express";
import * as router from "./router/index.js";
import * as middleware from "./middleware/index.js";
import cors from "cors";
import dotenv from "dotenv";
import * as Services from "./services/index.js"
import * as Data from "./Data/index.js"
const app = express();

dotenv.config();
app.use(express.urlencoded({ extended: true })); 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(middleware.bodyParserJson);
app.use(middleware.bodyParserUrlencoded);

app.use('/create',router.createcontainer);
app.use('/delete',router.deletecontainer);
app.use('/stop',router.stopcontainer);
app.use('/start',router.startcontainer);

app.use(router.Proxy);

app.listen(3000, () => {  
    console.log("Server is running...");
});
