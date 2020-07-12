This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### Define `REACT`

- React is a Javascript Library for building User Interface
- Run on browser ==> run in the browser, don't have to wait server response to get a new page or render something new
- React using Components for building UI

### Implement `REACT`

Component in React like a function and we use to reuse code

- Component can have paramerter like a object when we reference to
- When want to reuse or duplicate "Html" code. Should create a id, which can reference the "HTML" code parameters
- "render" function: 2 parameters:
  _ function
  _ position which we want to use

### ES06

2.let & const

- let: variable value
- const: constant value
  3.Arrow functions:
- Syntax: `const <name_func> = () => {}`
- No more issuses with the "this" keywork
- When use "this" inside an arrow function it will always keep its context and dont change surprisingly on runtime

  4.Export and Import:

- Two ways to import:

  - default exports: we can call it by the another name - import person from .... - import prs from ....


      * named exports: we cann't call it by the another name, must call defined name
      	- import {base} from ...
      	- import {base as Base} from ...

      * If have many constant want to import from 1 file: use *
      	- import * as bundled from ...  ==> when we access variable we can use: bundled.name, bundled.base or ....

5.Classes:

7.Spread & Rest operator:

- Speard: copy old array/object to new array/object with the same content
- Rest: converse elements to array and implement array's methods
  8.Destructuring:
- Creating the variables referencing elements and propertities in array and object respectively
  >     const numbers = [1,2,3];
  >     [num1,num2] = numbers;
  >
  >     // [num1,,num3] = numbers;
  >     console.log(num1,num2);
  >     // console.log(num1,num3);

### Install `REACT PROJECT`

- install package:
  >      1.npm install create-react-app -g
  >      2.create-react-app <name_project>
  >      3.cd <name_project>
  >      4.npm start
