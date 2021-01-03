import * as constants from "./constants";

export const addReminder = (text,dueDate) => {
    const action = {
        type : constants.ADD_REMINDER,
        text,
        dueDate
    }
    console.log(action);
    return action;
}

export const deleteReminder = (id) => {
    const action = {
        type : constants.DELETE_REMINDER,
        id
    }
    console.log(action);
    return action;
}

export const clearReminders = () => {
    const action = {
        type : constants.CLEAR_REMINDERS,
    }
    return action;
}

