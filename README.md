# Client-side Routing

## Pre-requisites

- Windows - WSL
- Node
- Git

## Setup

```sh
npm init
git init
git branch -m main
curl -o .gitignore https://raw.githubusercontent.com/github/gitignore/main/Node.gitignore
git add --all && git commit -m 'Initial Commit'
```

Install Express

```sh
npm install express dotenv
```

Setup TypeScript

```sh
npm i -D typescript @types/express @types/node
npx tsc --init
```

Add scripts:

```json
{
  "scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
}
```

## Notes

[How to set up TypeScript with Node.js and Express](https://blog.logrocket.com/how-to-set-up-node-typescript-express/)

[Understanding client side routing by implementing a router in Vanilla JS – Will Taylor Blog](https://www.willtaylor.blog/client-side-routing-in-vanilla-js/#:~:text=Client%20side%20routing%20is%20a,fetch%20and%20display%20new%20content.)