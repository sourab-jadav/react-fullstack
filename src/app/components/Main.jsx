// import React from "react";
// import { Provider } from 'react-redux'
// import { store } from "../store";


// export const Main=()=>(
//     <Provider store={store}>
//         <div>
//             Dashboard Goes here
//         </div>
//     </Provider>
// )
// import React from "react";
// import { Provider } from 'react-redux'
// import { store } from "../store";
// import { ConnectedDashboard } from "./dashboard";


// export const Main=()=>(
//     <Provider store={store}>
//         <div>
//             {/* Dashboard Goes here */}
//             <ConnectedDashboard/>
//         </div>
//     </Provider>
// )
//working on the router
// import React from "react";
// import { Provider } from 'react-redux'
// import { store } from "../store";
// import { ConnectedDashboard } from "./dashboard";
// import { Router, Route} from 'react-router-dom'
// import { history } from "../store/history";


// export const Main = () => (
//     <Router history={history}>
//         <Provider store={store}>
//         <div>
//             {/* Dashboard Goes here */}
//             <Route exact path="/dashboard" render={()=><ConnectedDashboard/>}></Route>
//             {/* the exact attribute says to display the comp only if the url matches the exact path */}
//         </div>
//         </Provider>
//     </Router>
// );
//working on the navigation
import React from "react";
import { Provider } from 'react-redux'
import { store } from "../store";
import { Counter } from "./Counter";
import { Router, Route} from 'react-router-dom'
import { history } from "../store/history";
import { ConnectedNavigation } from "./Navigation";
import { ConnectedDashboard } from "./dashboard";
import { ConnectedTaskDetails } from "./TaskDetails";
import { ConnectedLogin } from "./Login.jsx~";
import { Redirect } from "react-router";

const RouteGaurd = Component => ({match})=>{
    console.info("Route gaurd",match)
    if(!store.getState().session.authenticated){
       return <Redirect to="/"/> 
    }
    return <Component match={match}/>
}
export const Main = () => (
    <Router history={history}>
        <Provider store={store}>
        <div>
            <ConnectedNavigation/>
            {/* Dashboard Goes here */}
            <Route exact path="/" component={ConnectedLogin}/>
            <Route exact 
            path="/dashboard"
            // render={()=><ConnectedDashboard/>}>
            render={RouteGaurd(ConnectedDashboard)}>
            </Route>
            <Route exact path="/task/:id" render={(match)=><ConnectedTaskDetails match={match}/>}/>
            {/* the exact attribute says to display the comp only if the url matches the exact path */}
        </div>
        </Provider>
    </Router>
);
