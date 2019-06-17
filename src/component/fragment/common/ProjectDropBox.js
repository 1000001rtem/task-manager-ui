import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import {projectActions} from "../../action/project.actions";

class ProjectDropBox extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedProjectId: {
                id: null,
                name: null,
            },
            projects: [],
        };
    }

    onSelect = (eventKey, key) => {
        this.setState({
            selectedProjectId: {
                id: eventKey,
                name: this.state.projects.map(e => {
                    if (e.id === eventKey) return e.name;
                }),
            }
        });
        console.log(this.state.selectedProjectId);
        this.props.onChange(eventKey);
    };

    componentDidMount() {
        projectActions.findAll().then(res => {
            console.log(res);
            this.setState({projects: res});
            this.setState({
                selectedProjectId: {
                    id: this.state.projects[0].id,
                    name: this.state.projects[0].name,
                }
            });
            this.props.onChange(this.state.selectedProjectId.id);
        });
    }

    render() {
        return (
            <Dropdown title={this.state.selectedProjectId.name} onSelect={this.onSelect} id="d">
                <Dropdown.Toggle>
                    {this.state.selectedProjectId.name}
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