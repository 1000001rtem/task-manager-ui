import * as React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

class TaskContent extends React.Component {
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
                                </tr>
                            )}
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </div>
        )
    }
}

export default TaskContent;