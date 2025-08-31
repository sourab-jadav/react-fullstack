

1 -- we start with setting up webpack it allows to compile es6 and jsx to javascript 

2 -- create mock application state using the Redux

3 -- create a dashboard component to display list of task 

4 -- create task detail where user can update task 
pre-requisites:--

text-editor -- webstorm or atom

https://github.com/danielstern/express-react-fullstack

//version number of npm libraries are key
react@16.4.2

1 --
we need webpack@4.17.2
webpack also depends on babel to compile es6 ,jsx to .js code 
one thing that wepack does that babel can't is it bundles set of files that are connected to one another 

npm install --save-dev webpack@4.17.2
npm install --save-dev webpack-cli@3.1.2 webpack-dev-server@3.1.7
npm install --save-dev @babel/core@7.0.0

stop indexing for the nodemodules file using .gitignore 
node_moduless

npm install --save-dev @babel/node@7.0.0 //compile babel within the commandline
@babel/preset-env@7.0.0 //compile es6
@babel/preset-react@7.0.0 //compile react
@babel/register@7.0.0 //it is dependency needed for many babel features to work 

create .babelrc file to define how  .jsx   and es6 should be handled
(it is a json file that babel will check on how to run )
-> create a webpack.config.js file on how to bundle our app 
files created until now 
.babelrc
webpack.config.js 
./src/app/index.js
created a start script = "webpack"
redux manages the data that underlies your application 
application state can be easily accessed 
redux state is provided to react components via react-redux a small connector library 
steps in using the redux 
1 - create a default application state using a json file 
server/defaultState.js
store/index.js

index.js till line 4
----------creating a dashboard component------
create file ./src/app/components/Dashboard.js
and export the component Dashboard 
import it into ./src/app/components/Main.jsx and render the component into the html file using 
React and ReactDOM libraries 
-------- let's now use react rredux to connect the rreduux store too dashboard

make a new componeent called main.jsx
Provider is an element in react redux that takes store as an argument and any
connected components inside this provider will have access to this store 
