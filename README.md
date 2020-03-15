This project was built for HIGHER CONSCIOUS NESSNETWORK(HCN) which uses AWS-Amplify library to utilize AWS services and resources.

## Project Setup

### Check out HCN code

'git clone git@github.com:visionforhumanity/hcn.git'

### Run 'npm install -g @aws-amplify/cli'

Install amplify command line tool globally.

### Run 'npm install'

Install all dependencies in the project.

### Setup AWS profile and credentials

```
On MAC / Linux:
$cd ~/
$mkdir .aws
$cd .aws
$touch config
$touch credentials

On Windows:
$cd ~/
$mkdir .aws
$cd .aws
$type NUL > config
$type NUL > credentials
```

Update config and credentials file as follows:

```
config:
[default]
region = ap-southeast-2
```

```
credentials:
[default]
aws_access_key_id=<YOUR_ACCESS_KEY>
aws_secret_access_key=<YOUR_SECRET_ACCESS_KEY>
```

### Run 'amplify init'

To setup aws-amplify configuration, run command 'amplify init' under app folder and choose 'dev' as an environment and follow the sample output below to setup your local environment.

```
$ amplify init
Note: It is recommended to run this command from the root of your app directory
? Do you want to use an existing environment? Yes
? Choose the environment you would like to use: dev
? Choose your default editor: Visual Studio Code
Using default provider  awscloudformation

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use default
✔ Initialized provider successfully.
Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify <category> add" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything
```

### Run 'amplify env pull'

It will generate 'aws-exports.js' under /src folder.

### Run 'npm start'

The js file 'aws-exports.js' should be generated in /src folder after you run 'amplify env pull'. And now you are ready to start your app by using 'npm start' command.

### ENDS for now

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Basic Coding Standards

#### Prettier config

Create file `prettier.config.js` in root folder.
Put the content below

```
module.exports = {
  eslintIntegration: false,
  printWidth: 120,
  arrowParens: 'always',
  singleQuote: true,
  tabWidth: 2,
  bracketSpacing: false,
  useTabs: false,
  semi: true
};
```

Set editor format tool to prettier

#### Import statements

When writing import statements, prefer to use alias `@` instead of relative paths, which is hard to write and not clear for review. Two different styles are listed below for comparison.
```
// Recommend
import '@/components/ui/CardBox/CardBox'
// Not recommend
import '../../../../components/ui/CardBox/CardBox'
```

#### CSS Styles

All CSS files are written in js styles.

Eg. FooterStyle.js

```
const styles = {
    xxx : {}
}
export styles
```

Use withStyles when imported
Footer.js

```
import {withStyles} from '@material-ui/core';
import {styles} from './FooterStyle.js'

...

export default withStyles(styles)(Footer)
```

#### Name Convention

> Pascal Case- First letter of every word in the name is capitalized. Eg: NavigationBar
> Camel Case - Every word in the name is capitalized except the first word. Eg: handleOpenForm

For each components and corresponding style file, use Pascal Case, eg, CardBox.js CardBoxStyle.js

For js function names inside the file ,use Cameliminate case

#### About locales

All displayed word on website should be initially set in `i18n.js` and import from here then use. (Only the word or sentences used for UI). Eg, menu, submenu, title.

> src / utils / common / locales / i18n.js

```
export const SECOND_GENOME = 'second genome';
```

### Project Structure
```
├── public/ -----------------------# html file
├── src/ --------------------------# main react project
│ ├── _tests_ ---------------------# auto generate test cases file
│ ├── assets ----------------------# static files
│ │ ├── images --------------------# images  names are in camelcase starting with lower case
│ │ ├── css -----------------------# other third-party css files,font
│ │ └── js ------------------------# other third-party js files
│ ├── components/ -----------------# components folder
│ │ ├── ui/ -----------------------# ui components
│ │ │ ├── CardBox -----------------# small reusable UI component
│ │ ├── base/ ---------------------# functional components
│ │ │ ├── auth --------------------# auth
│ │ ├── layouts/ ------------------# main layout
│ │ │ ├── Header ------------------# nav,submenu
│ │ │ ├── Footer ------------------# footer
│ ├── utils/ ----------------------# useful utils
│ │ ├── common/ -------------------# other utils
│ │ │ ├── locales/ ----------------# locales
│ │ ├── hooks/ --------------------# custom hooks
│ ├── pages/ ----------------------# pages component folder
│ │ ├── home ----------------------# home pages
│ │ │ ├── Sections ----------------# page parts
│ │ │ ├── Home.js -----------------# main home page
│ │ │ ├── HomeStyles.js -----------# page style file .js
│ │ │ ├── index.js ----------------# page export
│ │ ├── intro ---------------------# intro category pages
│ │ ├── content -------------------# content category pages
│ │ ├── organize ------------------# organize category pages
│ │ ├── network -------------------# network category pages
│ │ ├── index.js ------------------# export all page component
│ ├── store/ ----------------------# redux main folder
│ │ ├── action --------------------# main action folder
│ │ │ ├── index.js ----------------# combine actions
│ │ │ ├── actionA.js
│ │ │ ├── actionB.js
│ │ ├── reducer -------------------# main reducer folder
│ │ │ ├── index.js ----------------# combine reducers
│ │ │ ├── reducerA.js
│ │ │ ├── reducerB.js
│ │ ├── action-types.js -----------# collect all actions
│ │ ├── index.js ------------------# export store
│ ├── index.css -------------------# index/global css file
│ ├── index.js --------------------# main entry `<Provider>`
│ ├── routes.js -------------------# collect all the routes
│ ├── serviceWorker.js  
├── README.md ---------------------# readme file
└── package.json # packages
```
