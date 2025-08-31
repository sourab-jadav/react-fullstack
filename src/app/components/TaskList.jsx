// import React from "react";
// import { connect } from "react-redux";

// export const TaskList = ({ tasks, name }) => (
//   <div>
//     <h1>{name} group tasks are as follows:-</h1>
//     <div>
//       {tasks.map((task) => (
//         <div key={task.id}>{task.name}</div>
//       ))}
//     </div>
//   </div>
// );


// const mapStateToProps=(state,ownProps)=>{//ownprops is the props of the component 
//     let groupID=ownProps.id;
//     return {
//         name:ownProps.name,
//         id:groupID,
//         tasks:state.tasks.filter(task=>task.group===groupID)
//     }
// }

// export const ConnectedTaskList=connect(mapStateToProps)(TaskList)
// import React from "react";
// import { connect } from "react-redux";

// export const TaskList = ({ tasks, name, createNewTask, id}) => (
//     <div>
//     <h1>{name} group tasks are as follows:-</h1>
//     <div>
//         {tasks.map((task) => (
//         <div key={task.id}>{task.name}</div>
//         ))}
//     </div>
//     <button onClick={() => createNewTask(id)}>add task</button>
//     </div>
// );


// const mapStateToProps=(state,ownProps)=>{//ownprops is the props of the component 
//     //we don't add createNewTask as the property to the mapStateToProps 
//     //we need a seperate funciton matchDispatchProps
//     let groupID=ownProps.id;
//     return {
//         name:ownProps.name,
//         id:groupID,
//         tasks:state.tasks.filter(task=>task.group===groupID)
//     }
// }

// const mapDispatchProps=(dispatch,ownprops)=>{
//     return {
//         createNewTask(id){
//             console.log('creating new task..',id)
//         }
//     }
// }


// export const ConnectedTaskList=connect(mapStateToProps,mapDispatchProps)(TaskList)
