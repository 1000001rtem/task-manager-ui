import axiosInstance from "../../config/axiosConfig";

export const projectActions = {
    findAll
};

async function findAll() {
    const userId = localStorage.getItem('userId');
    let projects;
    await axiosInstance.get('project/findAll', {
        handlerEnabled: false,
        params: {
            userId: userId
        }
    }).then(res => {
        projects = res.data;
        return projects;
    });
    return await projects;
}