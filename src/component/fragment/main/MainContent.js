import * as React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

class MainContent extends React.Component {

    render() {
        return (
            <div className={"content"}>
                <Container>
                    <div className={"greetingsContainer"}>
                        <div className={"greetingsBox"}>
                            <h3>Welcome to Task Manager</h3>
                        </div>
                        <div className={"imageBox"}>
                            <Image src="/image/titleLogo.png"/>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

export default MainContent;