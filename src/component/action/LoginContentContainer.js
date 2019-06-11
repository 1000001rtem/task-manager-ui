import * as React from "react";
import axios from "axios";
import LoginContent from "../fragment/login/LoginContent";

class LoginContentContainer extends React.Component {

    _login(login, password) {
        axios({
            method: 'post',
            url: 'http://127.0.0.1:80/api/auth',
            data: {
                login: login,
                password: password,
            }
        })
            .then(res => {
                console.log(res);
            });
    }

    render() {
        return (
            <LoginContent _login={this._login()}/>
        )
    }
}

export default LoginContentContainer;