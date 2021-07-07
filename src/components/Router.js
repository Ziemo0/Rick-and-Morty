import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App.js";
import characterPage from "./characterPage/characterPage.js";

const RouterPage = () => (
    <BrowserRouter>
        <Switch>
        <Route path="/" component={App} exact/>
        <Route path="/characterPage/:id" component={characterPage}/>
        </Switch>
    </BrowserRouter>

);

export default RouterPage;

