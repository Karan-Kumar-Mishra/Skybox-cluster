import express from "express"
const deletecontainer = express.Router();
import * as container_handler from "../Container-handler/index.js"

export default deletecontainer.delete('/', async (req, res) => {
    const contianer_id = req.body.container_id;
    if (contianer_id === undefined || contianer_id == null) {
        res.send({
            status: "Please send the contianer id"
        })
    }
    else {

        let result = await container_handler.deleteContainer(contianer_id)
        res.send({
            status: result
        })
    }
})