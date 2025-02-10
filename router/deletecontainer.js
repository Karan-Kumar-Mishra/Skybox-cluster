import express from "express"
const deletecontainer = express.Router();
import * as container_handler from "../Container-handler/index.js"

export default deletecontainer.delete('/', async (req, res) => {
    const contianer_id = req.body.container_id;
    let result = container_handler.deleteContainer(contianer_id)
    res.send({
        status: result
    })
})