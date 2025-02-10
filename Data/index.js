import Dockerode from "dockerode";
import * as services from "../services/index.js"

const Docker = new Dockerode();
let backend_port=null;
let frontend_port=null;
let Running_Ports = [];
let Free_Ports=[];
let Container_List = [];


function get_backend_port() {
    return backend_port;
}
function set_backend_port(port) {
     backend_port=port;
}
function get_frontend_port() {
    return frontend_port;
}
function set_frontend_port(port) {
    frontend_port=port
}
export {
    Docker,
    Running_Ports,
    Container_List,
    get_backend_port,
    get_frontend_port,
    set_backend_port,
    set_frontend_port,
    backend_port,
    frontend_port
}
