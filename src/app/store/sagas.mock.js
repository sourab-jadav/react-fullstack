import { take, put, select } from 'redux-saga/effects'
import axios from 'axios'
import * as mutations from './mutations'
import uuid from 'uuid'

//let's create the saga to create this task 
export function* taskCreationSaga(){
    while(true){
        //when it gets the take it will stop until the specified action gets dispatched
        //take means take the attributes from the store
        const {groupID}=yield take(mutations.REQUEST_TASK_CREATION)
        const ownerID=`U1`
        const taskID=uuid();
        console.log('new task id is ',taskID)
        yield put(mutations.CreateTask(taskID,groupID,ownerID))
        console.log("got group id",groupID)
    }
}
