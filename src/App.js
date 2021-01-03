import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {addReminder,deleteReminder,clearReminders} from "./actions";
import {connect} from "react-redux";
import moment from "moment";

import {bindActionCreators} from "redux";

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      text : "",
      dueDate : ''
    }
  }

  addReminder() {
    console.log("this.state",this.state.text);
    this.props.addReminder(this.state.text,this.state.dueDate);
  }

  deleteReminder(id) {
    this.props.deleteReminder(id);
  }



  renderReminders(){
    const { reminders} = this.props;
    return (
      <ul className="list-group col-sm-4">{
        reminders.map(reminder => {
          return (
            <li key ={reminder.id} className ="list-group-item">
             <div className="list-item"> {reminder.text} </div>
             <div className="list-item"> <em>{moment(new Date(reminder.dueDate)).fromNow()}</em> </div>

             <div className="list-item delete-button"  onClick = { () => this.deleteReminder(reminder.id)}> &#x2715; </div>

            </li>
          )
        })
      }
      </ul>
    )
  }
  

  render(){
    return (
      <div className="App">
          <div className="title">
              Reminder Pro
            </div>
        <div className = "form-inline reminder-form">
          <div className = "form-group" >
            <input type ="text" className ="form-control" placeholder = "type here" 
            onChange = {event => this.setState({text : event.target.value})}/>
            <input className="form-control" type="datetime-local" onChange = {event => this.setState({dueDate:event.target.value})} />
          </div>
            <button type ="button" className = "btn-success btn"
            onClick = { () => this.addReminder()}> Add Reminder </button>
        </div>
        {this.renderReminders()}
        <button className ="btn btn-danger" onClick = {() => this.props.clearReminders()} >Clear all reminders</button>
      </div>
    );
  }

}

function mapStateToProps(state){
  console.log(state);
  return {
    reminders : state
  }
}

export default connect(mapStateToProps,{addReminder,deleteReminder,clearReminders}) (App);
