import { Template } from 'meteor/templating';
 
import { Tasks } from '../api/tasks.js';
 
import './task.html';
 
 
 // In task.html template adding events to the template. 
 //First event is click event, check-box on/off
 //If checked task is updated, event listener checing uncheck or checked 
 //Second event is click event if delete button is clicked item is remvoed  
Template.task.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Tasks.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  'click .delete'() {
    Tasks.remove(this._id);
  },
});