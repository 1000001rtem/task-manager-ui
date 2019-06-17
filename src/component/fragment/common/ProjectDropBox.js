import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import {projectActions} from "../../action/project.actions";

class ProjectDropBox extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedProject: {
                id: null,
                name: null,
            },
            projects: [],
        };
    }

    onSelect = (eventKey, key) => {
        this.setState({
            selectedProject: {
                id: eventKey,
                name: this.state.projects.map(e => {
                    if (e.id === eventKey) return e.name;
                }),
            }
        });
        console.log(this.state.selectedProject);
        this.props.onChange(eventKey);
    };

    componentDidMount() {
        projectActions.findAll().then(res => {
            console.log(res);
            this.setState({projects: res});
            if (this.props.projectId) {
                this.setState({
                    selectedProject: {
                        id: this.props.projectId,
                        name: this.state.projects.map(e => {
                                if (e.id === this.props.projectId) return e.name;
                            }
                        )
                    }
                });
            } else {
                this.setState({
                    selectedProject: {
                        id: this.state.projects[0].id,
                        name: this.state.projects[0].name,
                    }
                });
            }
            this.props.onChange(this.state.selectedProject.id);
        });
    }

    render() {
        return (
            <Dropdown title={this.state.selectedProject.name} onSelect={this.onSelect} id="d">
                <Dropdown.Toggle>
                    {this.state.selectedProject.name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {this.state.projects.map(project => (
                        <Dropdown.Item eventKey={project.id} key={project.name}>
                            {project.name}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        )
    }

}

export default ProjectDropBox;