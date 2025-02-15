import * as Data from "../Data/index.js"
async function stopContainer(id) {
    let container = Data.Docker.getContainer(id);
    await container.stop((err, data) => {
        if (err) {
            return err;
        }
        else {
            return data
        }
    })
}
export default stopContainer;