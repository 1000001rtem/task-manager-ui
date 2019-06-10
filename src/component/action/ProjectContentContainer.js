import * as React from "react";
import axios from "axios";
import ProjectContent from "../fragment/project/ProjectContent";

class ProjectContentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:80/api/project/findAll?userId=f299a6aa-8769-11e9-bc42-526af7764f64',
        })
            .then(res => {
                const projects = res.data;
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