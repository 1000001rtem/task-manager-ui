import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";


class RightMenu extends React.Component {
    render() {
        return (
            <div className={"rightMenu"}>
                <Navbar>
                    <NavLink>Logout</NavLink>
                </Navbar>
            </div>
        )
    }
}

export default RightMenu;