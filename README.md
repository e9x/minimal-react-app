# minimal-react-app

Build a React and Typescript app without Webpack.

## What's the difference between this and create-react-app?

This will only bundle React and React DOM with rollup. The Typescript compiler is used to transpile TSX to JS which can be loaded as a `<script type="module">` in the browser. Dependencies are exposed as UMD modules.

An example of using React Router DOM can be found [here](https://github.com/e9x/minimal-react-app/tree/react-router-dom).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.

The correct React and React DOM versions are chosen when building for production.
