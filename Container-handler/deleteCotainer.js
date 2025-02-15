import * as Data from "../Data/index.js"
async function deleteContainer(id) {
    let container = Data.Docker.getContainer(id);
    await container.remove((err, data) => {
        if (err) {
            return err;
        }
        else {
            return data
        }
    })
}
export default deleteContainer;