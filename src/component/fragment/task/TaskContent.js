import * as React from "react";
import Container from "react-bootstrap/Container";

class TaskContent extends React.Component {
    render() {
        return (
            <div className={"content"}>
                <Container>
                    <h1>Task</h1>
                </Container>
            </div>
        )
    }
}

export default TaskContent;