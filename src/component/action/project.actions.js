import axiosInstance from "../../config/axiosConfig";

export const projectActions = {
    create,
    update,
    findAll,
    remove,
    findOne,
};

async function create(project){
    await axiosInstance.post('project/create', project).then(res=>{
        console.log(res);
    })
}

async function update(project) {
    await axiosInstance.put('project/update', project).then(res => {
        console.log(res);
    });
}

async function findAll() {
    const userId = localStorage.getItem('userId');
    let projects;
    await axiosInstance.get('project/findAll', {
        handlerEnabled: true,
        params: {
            userId: userId
        }
    }).then(res => {
        projects = res.data;
        return projects;
    });
    return await projects;
}

async function findOne(projectId) {
    let project;
    await axiosInstance.get('project/findOne', {
        handlerEnabled: true,
        params: {
            projectId: projectId
        }
    }).then(res => {
        project = res.data;
        return project;
    });
    return await project;
}

function remove(projectId) {
    axiosInstance.delete('project/delete', {
        handlerEnabled: true,
        params: {
            projectId: projectId,
        }
    })
}