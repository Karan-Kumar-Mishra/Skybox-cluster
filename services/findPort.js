import * as Data from "../Data/index.js"
export default function findPort(key) {
 return Data.Running_Ports.find(num=>num===key)
}