import * as Data from "../Data/index.js"
export default function generatePort() {
    Data.set_backend_port(Math.floor(Math.random()*65536));
    Data.set_frontend_port(Math.floor(Math.random()*65536));
}