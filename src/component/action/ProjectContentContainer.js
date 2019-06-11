import * as React from "react";
import ProjectContent from "../fragment/project/ProjectContent";
import {projectActions} from "./project.actions";

class ProjectContentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        projectActions.findAll().then(res => {
            const projects = res;
            this.setState({projects});
        });
    }

    render() {
        return (
            <ProjectContent projects={this.state.projects}/>
        )
    }
}

export default ProjectContentContainer;