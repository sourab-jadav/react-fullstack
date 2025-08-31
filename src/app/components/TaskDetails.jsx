import { connect } from "react-redux";
import React from "react";
import { defaultState } from "../../server/defaultState";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
import * as mutations from '../store/mutations'
const TaskDetails=({
    id,
    task,
    isComplete,
    groups,
    setTaskCompletion,
    setTaskName,
    setTaskGroup
})=>{
    return (
      <div className="card p-3 col-6">
        <h1>{task.name}</h1>
        <input
          onChange={setTaskName}
          value={task.name}
          className="form-control form-control-lg"
        />
        <button onClick={() => setTaskCompletion(id, !isComplete)} className="btn btn-primary mt-2">
          {isComplete ? `Reopen` : `complete`}
        </button>
        <div className="mt-3">
          <select onChange={setTaskGroup} value={task.group} className="form-control">
            {groups.map((group) => (
              <option key={group.id} value={group.id}>
                {group.name}
              </option>
            ))}
          </select>
        </div>
        <Link to={"/dashboard"}>
        <button className="btn btn-primary mt-2">Done</button>
        </Link>
      </div>
    );
}
const mapStateToProps=(state,ownProps)=>{
    let id =ownProps.match.match.params.id
    let [task]=state.tasks.filter((task)=>task.id===id);

    let isComplete=task.isComplete;
    let groups=state.groups
    return {
        id,
        task,
        groups,
        isComplete
    }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    let id =ownProps.match.match.params.id;
    console.log(id)
    return {
        setTaskCompletion(id,isComplete){
            dispatch(mutations.setTaskCompletion(id,isComplete))
        },
        setTaskName(e){
            dispatch(mutations.setTaskName(id,e.target.value))
        },
        setTaskGroup(e){
            dispatch(mutations.setTaskGroup(id,e.target.value))
        }
    }
}
export const ConnectedTaskDetails=connect(mapStateToProps,mapDispatchToProps)(TaskDetails)
