import * as Data from "../Data/index.js"

async function createContainer() {
    
    const container = await Data.Docker.createContainer({
        Image: 'file_cluster',
        Tty: true,  
        OpenStdin: true,
        ExposedPorts: {
            '5173': {} ,
            '3000': {} 

        },
        HostConfig: {
            PortBindings: {
                '5173': [
                    {
                        HostPort: Data.get_frontend_port().toString() 
                    }
                ],
                '3000': [
                    {
                        HostPort: Data.get_backend_port().toString() 
                    }
                ]
            }
        }
        
    });
  
    return container;
}

export default createContainer;
