import * as React from "react";
import axios from "axios";
import TaskContent from "../fragment/task/TaskContent";

class TaskContentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:80/api/task/findAll?userId=f299a6aa-8769-11e9-bc42-526af7764f64',
        })
            .then(res => {
                const tasks = res.data;
                this.setState({tasks});
            });
    }

    render() {
        return (
            <TaskContent tasks={this.state.tasks}/>
        )
    }
}

export default TaskContentContainer;