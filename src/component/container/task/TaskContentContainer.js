import * as React from "react";
import TaskContent from "../../fragment/task/TaskContent";
import {taskActions} from "../../../action/task.actions";
import {projectActions} from "../../../action/project.actions";

class TaskContentContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            projects: []
        };
    }

    componentDidMount() {
        taskActions.findAll()
            .then(res => {
                this.setState({tasks: res});
            });
        projectActions.findAll().then(res => {
            this.setState({projects: res});
        });
    }

    removeHandle(taskId) {
        taskActions.remove(taskId);
        window.location.reload();
    }

    render() {
        return (
            <TaskContent tasks={this.state.tasks} removeHandle={this.removeHandle} projects={this.state.projects}/>
        )
    }

}

export default TaskContentContainer;