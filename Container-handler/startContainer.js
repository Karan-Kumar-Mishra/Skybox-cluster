import * as Data from "../Data/index.js"
async function startContainer(id) {
    let container = Data.Docker.getContainer(id);
    await container.start((err, data) => {
        if (err) {
            return err;
        }
        else {
            return data
        }
    })
}
export default startContainer;