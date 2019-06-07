import * as React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import MainView from "./MainView";
import ProjectView from "./ProjectView";
import TaskView from "./TaskView";

class TitleView extends React.Component {
    render() {
        return (
            <div className={"view"}>
                <BrowserRouter>
                    <Route path='/main' component={MainView}/>
                    <Route path='/project' component={ProjectView}/>
                    <Route path='/task' component={TaskView}/>
                </BrowserRouter>
            </div>
        )
    }
}

export default TitleView;