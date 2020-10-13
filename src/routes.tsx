import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react';

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";


const Routes = () =>{
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/app" component={OrphanagesMap} />
        </Switch>
        </BrowserRouter>
    )
}
export default Routes;