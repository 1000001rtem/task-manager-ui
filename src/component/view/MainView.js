import * as React from "react";
import Header from "../fragment/header/Header";
import Footer from "../fragment/footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import MainContent from "../fragment/main/MainContent";
import ProjectContentContainer from "../action/ProjectContentContainer";
import TaskContentContainer from "../action/TaskContentContainer";
import LoginContent from "../fragment/login/LoginContent";
import ProjectEditContentContainer from "../action/ProjectEditContentContainer";
import ProjectCreateContentContainer from "../action/ProjectCreateContentContainer";
import TaskCreateContentContainer from "../action/TaskCreateContentContainer";

class MainView extends React.Component {

    render() {
        return (
            <div className={"view"}>
                <Header/>
                <BrowserRouter>
                    <Route path='/main' component={MainContent}/>
                    <Route path='/project' component={ProjectContentContainer}/>
                    <Route path='/task' component={TaskContentContainer}/>
                    <Route path='/login' component={LoginContent}/>
                    <Route path='/createProject' component={ProjectCreateContentContainer}/>
                    <Route path='/projectEdit/:projectId' component={ProjectEditContentContainer}/>
                    <Route path='/createTask' component={TaskCreateContentContainer}/>
                </BrowserRouter>
                <Footer/>
            </div>
        )
    }

}

export default MainView;