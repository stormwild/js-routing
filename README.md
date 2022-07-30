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

Eslint Prettier

```
npm i -D eslint-config-prettier eslint-plugin-prettier
touch .eslintrc.json
touch .prettierrc.json 
npm install --save-dev eslint-config-recommended
npm install --save-dev husky
```

Add precommit to `package.json`

```json
{
  "scripts": {
    "precommit": "eslint ."
  }
}
```

Linting

```
npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript

npm i -D prettier-eslint
npm i -D eslint-config-prettier
```

Add scripts to `package.json`:

```json
{
  "scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
}
```

## Usage

Create `.env` file and specify available port. See `.env.example`

Run for local development

```sh
npm i 
npm run dev
```

## Notes

### Resources or References

[How to set up TypeScript with Node.js and Express](https://blog.logrocket.com/how-to-set-up-node-typescript-express/)

[Understanding client side routing by implementing a router in Vanilla JS – Will Taylor Blog](https://www.willtaylor.blog/client-side-routing-in-vanilla-js/#:~:text=Client%20side%20routing%20is%20a,fetch%20and%20display%20new%20content.)

[Use TypeScript to Build a Node API with Express](https://developer.okta.com/blog/2018/11/15/node-express-typescript)

[TypeScript ESLint](https://typescript-eslint.io/docs/)

[How to use Prettier with ESLint](https://www.robinwieruch.de/prettier-eslint/)

### Concepts

> #### What is client side routing?
> 
> Client side routing is a type of routing where as the user navigates around the application or website no full page reloads take place, even when the page’s URL changes. Instead, JavaScript is used to update the URL and fetch and display new content.
> 
> We can by more specific and pin down the exact behaviour that we have grown to expect from a single page application with routing.
> 
> - When the application is first loaded, the route which is loaded and the content displayed are determined by the URL path.
> - When the user navigates around by clicking a link within the application, the URL changes. Without a full page reload, a new route with new content is loaded, based on the new URL.
> - When the user navigates by clicking the browser forward/back buttons, they move back or forward through the routes that they previously visited.

> #### Implementing client side routing
> 
> If we think about implementing an application with the above behaviour ourselves, there are two main technical challenges which we are confronted with:
> 
> - How do we change the URL without causing a page reload, and also preserve the behaviour of the browser forward/back buttons?
> - How do we map any given URL to the appropriate template (or component)?
> 
> The answer to question 2 is more complicated and depends on exact requirements - we will look at implementing an algorithm which can do this later on.
> 
> As for changing a URL without causing a page reload, we will use a method on the `history` api called `pushState`.

> ```js
> window.history.pushState({ data: 'some data' },'Some history entry title', '/some-path');
> ```