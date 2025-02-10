import * as Data from "../Data/index.js";
import { exec } from "child_process";
import os from "os";

function set_env() {

    const backendPort = Data.get_backend_port(); 
    const frontendPort = Data.get_frontend_port(); 

    if (os.type() === "Linux") {
        process.env.BACKEND_PORT = backendPort;
        process.env.FRONTEND_PORT = frontendPort;
        console.log("We are working in Linux.");
    } else {
        process.env.BACKEND_PORT = backendPort;
        process.env.FRONTEND_PORT = frontendPort;
        console.log("We are working in Windows.");
    }

    
}

export default set_env;
