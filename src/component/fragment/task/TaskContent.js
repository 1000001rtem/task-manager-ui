import * as React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

class TaskContent extends React.Component {
    constructor(props, context, handleClick) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
        this.getProject = this.getProject.bind(this);
    }

    handleClick = (taskId) => {
        this.props.removeHandle(taskId);
    };

    async getProject(projectId) {
        this.props.projects.map(e => {
            if (e.id === projectId) {
                console.log(e.name);
                return e.name;
            }
        })
    }

    render() {
        return (
            <div className={"content"}>
                <Container>
                    <div className={"tableBox"}>
                        <Table>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Status Date</th>
                                <th>Project Id</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.tasks.map((e, i) =>
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.description}</td>
                                    <td>{e.startDate}</td>
                                    <td>{e.endDate}</td>
                                    <td>{e.status}</td>
                                    <td>{e.projectId}</td>
                                    <td>
                                        <Button onClick={() => this.handleClick(e.id)}>Delete</Button>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </Table>
                        <Button href={'/createTask'}>NEW</Button>
                    </div>
                </Container>
            </div>
        )
    }
}

export default TaskContent;