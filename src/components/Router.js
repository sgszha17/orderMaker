//This is router of react which is also a component
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App';
import NotFound from './NotFound'

const Router = ()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component = {StorePicker}/>
            {/* define the router path, and let router to the storePacker when start with path '/' */}

            <Route path="/store/:storeId" component={App}/>
            {/* Here it is able to route to the app component the app component is bound */}

            <Route component={NotFound}/>
            {/* When enter the wrong path, the not found will display!!! */}
        </Switch>
    </BrowserRouter>
)

export default Router;