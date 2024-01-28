# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `Deploying a React App to Heroku`

1. Install Heroku CLI
   If you haven't installed the Heroku Command Line Interface (CLI) yet, you can download and install it from the official Heroku website.

2. Create a Heroku Account
   Ensure you have a Heroku account. If not, you can sign up for free on the Heroku website.

3. Login to Heroku
   Run the following command in your terminal to log in to Heroku:

bash
Copy code
heroku login
Follow the prompts to enter your Heroku credentials.

4. Prepare Your React App
   Ensure your React app is set up to be ready for deployment. Make sure your package.json file has the required scripts, dependencies, and the correct build settings.

5. Update Node.js Engine Version
   Heroku uses the specified Node.js version in the engines field of your package.json. Ensure it's set to a version supported by Heroku. For example:

```json
Copy code
"engines": {
"node": "20.x"
}
```
6. Create a .env File
   If your app relies on environment variables, create a .env file at the root of your project. Ensure that sensitive information like API keys is not hardcoded in your code.

7. Install dotenv Package (if needed)
   If you use environment variables in your local development, you may need to install the dotenv package and add the following line at the top of your application's entry file (e.g., src/index.js):

javascript
Copy code
require('dotenv').config();
8. Add Heroku Remote
   If you haven't initialized a Git repository, run the following commands:


bash
Copy code
```
git init
git add .
git commit -m "Initial commit"
```
Then, add a Heroku remote:

bash
Copy code
```
heroku create your-app-name
```
9. Configure Environment Variables on Heroku
   Go to the Heroku Dashboard, find your app, and navigate to the "Settings" tab. Under the "Config Vars" section, add the environment variables that your app needs. For example, REACT_APP_API_URL.

10. Deploy to Heroku
    Deploy your app to Heroku:

bash
Copy code
```
git push heroku master
```
11. Open Your App
    Once the deployment is successful, open your app in the browser:

bash
Copy code
```
heroku open
```
Update the Deployed App

If you make changes and want to update your Heroku app, commit your changes, and push them to Heroku:

bash
Copy code
```
git add .
git commit -m "Update"
git push heroku master
```
Learn More
Heroku Node.js Support
Heroku Configuration and Config Vars
dotenv Documentation
Remember to replace your-app-name with a unique name for your Heroku app. Additionally, make sure to secure any sensitive information and follow best practices for environment variables.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


