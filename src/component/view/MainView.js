import * as React from "react";
import Header from "../fragment/header/Header";
import Footer from "../fragment/footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import MainContent from "../fragment/main/MainContent";
import ProjectContent from "../fragment/project/ProjectContent";
import TaskContent from "../fragment/task/TaskContent";

class MainView extends React.Component {

    render() {
        return (
            <div className={"view"}>
                <Header/>
                <BrowserRouter>
                    <Route path='/main' component={MainContent}/>
                    <Route path='/project' component={ProjectContent}/>
                    <Route path='/task' component={TaskContent}/>
                </BrowserRouter>
                <Footer/>
            </div>
        )
    }
}

export default MainView;