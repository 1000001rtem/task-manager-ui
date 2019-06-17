import * as React from "react";
import Container from "react-bootstrap/Container";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";

class Header extends React.Component {

    render() {
        return (
            <div className={"header"}>
                <Container>
                    <div className={"menuPanel"}>
                        <LeftMenu/>
                        <RightMenu/>
                    </div>
                </Container>
            </div>
        )
    }

}

export default Header;