// import React from "react";
// import { connect } from "react-redux";

// export const Dashboard = ({groups})=>(
//     <div>
//         <h1>Welcome to the Dashboard</h1>
//         {groups.map(group=>(
//             <div>
//                 {group.name}
//             </div>
//         ))}
//     </div>
// )

// /**
//  * now the above dashboard it has the ability to pass the groups 
//  * to know how to get groups we have to connect it we do so with the function called 
//  * mapStateToProps this function takes state and whatever you return it will 
//  * pass as props to another component 
//  */

// function mapStateToProps(state){
//     return {
//         groups:state.groups
//     }
// }

// export const ConnectedDashboard = connect(mapStateToProps)(Dashboard)
import React from "react";
import { connect } from "react-redux";
import { ConnectedTaskList } from "./TaskList";

export const Dashboard = ({groups})=>(
    <div className="row">
        {groups.map(group=>(
            <ConnectedTaskList id={group.id} name={group.name} key={group.id} className="col"/>
        ))}
    </div>
)

/**
 * now the above dashboard it has the ability to pass the groups 
 * to know how to get groups we have to connect it we do so with the function called 
 * mapStateToProps this function takes state and whatever you return it will 
 * pass as props to another component 
 */

function mapStateToProps(state){
    return {
        groups:state.groups
    }
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard)