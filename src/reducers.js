import { act } from "react-dom/test-utils";
import * as constants from "./constants";
import {bake_cookie, read_cookie} from "sfcookies";

const newReminder = (action) => {
    return {
        text: action.text,
        dueDate : action.dueDate,
        id : Math.random()
    }
}
const deleteReminder = (state =[], id)=>{
    const reminders = state.filter( reminder => reminder.id !== id);
    return reminders;
}

const reminders = (state = [], action) => {
    let reminders = null;
    state = read_cookie("reminders");
    switch(action.type){
        case constants.ADD_REMINDER : 
            reminders =  [...state, newReminder(action)];
            bake_cookie("reminders",reminders);
            console.log("reminders",reminders);
            return reminders;
        case constants.DELETE_REMINDER:
            reminders = deleteReminder(state,action.id);
            bake_cookie("reminders",reminders);
            return reminders;
        case constants.CLEAR_REMINDERS :
            reminders = []
            bake_cookie("reminders",reminders);
            return reminders;

        default : return state;
    }
}

export default reminders;