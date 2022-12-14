# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.


### Requirements  

Node.js version 16.14 or above  

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.




## Steps


npx create-docusaurus@latest blog classic

npm start

git init

git add .

git commit -m "Add existing project files to Git"

git remote add origin https://github.com/agathemmanuel/blog.git

git push -u origin master



```
docusaurus.config.js

module.exports = {
  // ...
  url: 'https://agathemmanuel.github.io', // Your website URL
  baseUrl: '/blog',
  projectName: 'agathemmanuel.github.io',
  organizationName: 'agathemmanuel',
  trailingSlash: false,
  // ...
};

```

GIT_USER=<GITHUB_USERNAME>   
export GIT_USER=<GITHUB_USERNAME>   
yarn deploy  






# Blogs  

- Creating a simple kubernetes operator from scratch with Kubebulder and golang  
- Creating a simple kubernetes operator from scratch with Operator sdk and golang  
  it restarts the pods with a specific annotation in specified schedule
- Extending kubernetes api with Google Cloud Storage resource  
- Getting started with KUDO Operators  
- Getting started with Kapitan  
