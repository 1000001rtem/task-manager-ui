import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";


class RightMenu extends React.Component {

    logout() {
        localStorage.clear();
    }

    render() {
        return (
            <div className={"rightMenu"}>
                <Navbar>
                    <NavLink href={"/"} onClick={this.logout}>Logout</NavLink>
                </Navbar>
            </div>
        )
    }

}

export default RightMenu;