
import { Tasks } from '../api/tasks.js';

// importing task-items template
import './task-items.js';

//importing body.html template 
import './body.html';
 




Template.body.helpers({
  tasks() {
   // Show newest tasks at the top
    return Tasks.find({}, { sort: { createdAt: -1 } });
  },
});

// Task Events 

Template.body.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
    //console.log(event); display each item details
 	console.log(event);
    // Insert a task into the collection
    Tasks.insert({
      text,
      createdAt: new Date(), // current time
    });
 
    // Clear form
    target.text.value = '';
  },

});