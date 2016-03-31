<h1>Creating your first Meteor App</h1>
<p>create a simple app to manage a 'to do' list

To create the app, open your terminal and type:
meteor create simple-todos
This will create a new folder called simple-todos with all of the files that a Meteor app needs:</p>
<code>
client/main.js        # a JavaScript entry point loaded on the client
client/main.html      # an HTML file that defines view templates
client/main.css       # a CSS file to define your app's styles
server/main.js        # a JavaScript entry point loaded on the server
package.json          # a control file for installing NPM packages
.meteor               # internal Meteor files
.gitignore            # a control file for git
</code>
<p>To run the newly created app:</p>
In the terminal following commands
$ cd simple-todos
$ meteor
<p>Open your web browser and go to http://localhost:3000 to see the app running.</p>

<p>WOOT WOOT YOU HAVE FIRST METEOR APP RUNNING!!!</p>

<p>Take a look at this default app for a bit locate directories</p>

NEXT Templates 

Client/main.html 
--remove all code 
--add 
<head>
  <title>simple</title>
</head>

Create imports/ directory
create ui directory inside of imports 
imports/ui
create body.html file 
create body.js file 

Inside of body.html file add 
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