import * as React from "react";
import {projectActions} from "./project.actions";
import ProjectEditContent from "../fragment/project/ProjectEditContent";

class ProjectEditContentContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            project: [],
        };
        this.onChange = this.onChange.bind(this);

    }

    onChange(field, value) {
        console.log(value);
        this.state.project[field] = value;
        console.log(this.state);
    }

    componentDidMount() {
        projectActions.findOne(this.props.match.params.projectId).then(res => {
            this.setState({project: res});
        });
    }

    render() {
        return (
            <ProjectEditContent project={this.state.project} onChange={this.onChange}/>
        )
    }
}

export default ProjectEditContentContainer;