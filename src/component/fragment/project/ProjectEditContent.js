import * as React from "react";
import Container from "react-bootstrap/Container";
import ProjectInputGroup from "./ProjectInputGroup";

class ProjectEditContent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onChange = this.onChange.bind(this);
    }

    onChange(field, value) {
        console.log(value);
        this.props.onChange(field, value);
    }

    render() {
        return (
            <div className={"content"}>
                <Container>
                    <ProjectInputGroup project={this.props.project} onChange={this.onChange}/>
                </Container>
            </div>
        )
    }
}

export default ProjectEditContent;