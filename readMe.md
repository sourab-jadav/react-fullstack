

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

