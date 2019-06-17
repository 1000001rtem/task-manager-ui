import * as React from "react";
import ProjectContent from "../fragment/project/ProjectContent";
import {projectActions} from "./project.actions";

class ProjectContentContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
        this.removeHandle = this.removeHandle.bind(this);
    }

    componentDidMount() {
        projectActions.findAll().then(res => {
            this.setState({projects: res});
        });
    }

    removeHandle(projectId) {
        projectActions.remove(projectId);
        window.location.reload();
    }

    render() {
        return (
            <ProjectContent projects={this.state.projects} removeHandle={this.removeHandle}/>
        )
    }

}

export default ProjectContentContainer;