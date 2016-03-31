<h1>To Do List In Meteor</h1>
<h3>About:</h3>
Simple mobile responsive and mobile enabled todo list app using Meteor.js. App allows users to add, update, check-off, delete items

<h3>Requirements:</h3>
install node.js
install meteor 
From terminal type: 
$ meteor create simple-todos
$ cd simple-todos
$ meteor <--runs server 
Open your web browser and go to http://localhost:3000 to see the app running.
You file should contain the following

<code>

client/main.js        # a JavaScript entry point loaded on the client
client/main.html      # an HTML file that defines view templates
client/main.css       # a CSS file to define your app's styles
server/main.js        # a JavaScript entry point loaded on the server
package.json          # a control file for installing NPM packages
.meteor               # internal Meteor files
.gitignore            # a control file for git

</code>

1.Templates
1.1 client/main.html
<p>remove all code in client/main.html and add following</p>
 
<code>

	<head>
  	<title>simple</title>
	</head>

</code>

1.2 Create imports directory 
1.2 Create ui directory inside of imports
1.3 Create body.js file in ui directory 
1.4 Create body.html file in ui directory 

<code>

imports/ui/body.js
imports/ui/body.html 

</code>
1.5 In the imports/ui/body.html add the following: 


<code>

<body>
  <div class="container">
    <header>
      <h1>Todo List</h1>
    </header>
 
    <ul>
      {{#each tasks}}
        {{> task}}
      {{/each}}
    </ul>
  </div>
</body>
 
<template name="task">
  <li>{{text}}</li>
</template>

</code>

1.6 In the imports/ui/body.js add the following:

<code>

import { Template } from 'meteor/templating';
 
import './body.html';
 
Template.body.helpers({
  tasks: [
    { text: 'This is task 1' },
    { text: 'This is task 2' },
    { text: 'This is task 3' },
  ],
});

</code>
<p>Files inside imports/ only load if they are imported, so we'll need to import imports/ui/body.js from our client:</p>
1.7 In client/main.js remove all the code and add: 
<code>
	import '../imports/ui/body.js';
</code>
<p>In our browser, the app will now look much like this:</p>
Todo List

This is task 1
This is task 2
This is task 3

<h3>Stack:</h3>
<ul>
<li>Meteor.js</li>
<li>JavaScript</li>
<li>JQuery</li>
<li>Bootstrap</li>
<li>HTML5</li>
<li>CSS3</li>
<li>Heroku</li> 
</ul>
