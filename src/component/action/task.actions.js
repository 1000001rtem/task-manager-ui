import axiosInstance from "../../config/axiosConfig";

export const projectActions = {
    findAll
};

async function findAll() {
    const userId = localStorage.getItem('userId');
    let tasks;
    await axiosInstance.get('task/findAll', {
        handlerEnabled: true,
        params: {
            userId: userId
        }
    }).then(res => {
        tasks = res.data;
        return tasks;
    });
    return await tasks;
}