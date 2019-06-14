import axiosInstance from "../../config/axiosConfig";

export const userActions = {
    login,
    logout
};

async function login(login, password) {
    axiosInstance.post('auth', {
        handlerEnabled: false,
        login: login,
        password: password
    }).then(res => {
        localStorage.setItem('userId', res.data.userId);
        localStorage.setItem('token', 'Bearer ' + res.data.token);
        localStorage.setItem('login', res.data.login);
    });
}

function logout() {
    localStorage.clear();
}