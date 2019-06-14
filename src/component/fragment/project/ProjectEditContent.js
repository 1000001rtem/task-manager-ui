import * as React from "react";
import Container from "react-bootstrap/Container";
import ProjectInputGroup from "./ProjectInputGroup";

class ProjectEditContent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(project) {
        this.props.onSubmit(project);
    }

    render() {
        return (
            <div className={"content"}>
                <Container>
                    <ProjectInputGroup project={this.props.project} onSubmit={this.onSubmit}/>
                </Container>
            </div>
        )
    }
}

export default ProjectEditContent;