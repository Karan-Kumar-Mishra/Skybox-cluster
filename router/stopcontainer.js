import express from "express"
const stopcontainer = express.Router();
import * as container_handler from "../Container-handler/index.js"

export default stopcontainer.post('/', async (req, res) => {
    const contianer_id = req.body.container_id;
    if (contianer_id === undefined || contianer_id == null) {
        res.send({
            status: "Please send the contianer id"
        })
    }
    else {
        res.send({
            status: await container_handler.stopContainer(contianer_id)
        })
    }
})