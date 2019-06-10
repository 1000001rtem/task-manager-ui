import * as React from "react";
import Container from "react-bootstrap/Container";

class LoginContent extends React.Component {
    render() {
        return (
            <div className={"content"}>
                <Container>
                    <div className={"loginBox"}>
                        <form className="form-signin">
                            <h2 className="form-signin-heading">Please login</h2>
                            <input type="text" className="form-control" name="login" placeholder="Login"
                                   required=""
                                   autoFocus=""/>
                            <input type="password" className="form-control" name="password" placeholder="Password"
                                   required=""/>
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                        </form>
                    </div>
                </Container>

            </div>
        )
    }
}

export default LoginContent;

{/*<div className="wrapper">*/
}
{/*    <form className="form-signin">*/
}
{/*        <h2 className="form-signin-heading">Please login</h2>*/
}
{/*        <input type="text" className="form-control" name="username" placeholder="Email Address" required=""*/
}
{/*               autoFocus=""/>*/
}
{/*        <input type="password" className="form-control" name="password" placeholder="Password" required=""/>*/
}
{/*        <label className="checkbox">*/
}
{/*            <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Remember me*/
}
{/*        </label>*/
}
{/*        <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>*/
}
{/*    </form>*/
}
{/*</div>*/
}