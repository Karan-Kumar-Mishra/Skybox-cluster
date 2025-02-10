import * as Data from "../Data/index.js"
function deleteContainer(id) {
    let container = Data.Docker.getContainer(id);
    container.remove((err, data) => {
        if (err) {
            return err;
        }
        else {
            return data
        }
    })
}
export default deleteContainer