import express from "express"
const createcontainer=express.Router();
import * as container_handler from "../Container-handler/index.js"
import * as Data from "../Data/index.js"
import * as Services from "../services/index.js"
export default createcontainer.post('/', async (req,res)=>{
  Services.generatePort()
  Services.set_env();
  const contaner=await container_handler.createContainer();
  await contaner.start();
  const container_info= await contaner.inspect();
  res.send({
    ip_address:container_info.NetworkSettings.IPAddress,
    frontend_port: Data.get_frontend_port(),
    backend_port:Data.get_backend_port()
  })
})