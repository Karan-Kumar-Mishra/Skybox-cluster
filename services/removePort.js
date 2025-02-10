import * as Data from "../Data/index.js"
export default function removePort(key)
{
 Data.Running_Ports= Data.Running_Ports.filter(ele=>ele!==key)
}