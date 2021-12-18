# Project React Testing with Typescript

This Project helps to understand the advance topic of react

1. Install the enzyme and enzyme-adapter (App.test.tsx)
   1. Make setupTests.ts and configure enzyme
2. Makes absolute path "baseUrl": "./src" tsconfig.json
3. Enzyme library test (\_\_testEnzyme\_\_/)
   1. The enzyme Full rendering actually mounts the component in the DOM. They share the fakeDOM so after each test you should cleanup the fakeDOM (\_\_testEnzyme\_\_/CommentBox.test.tsx).
4. React default library testing-library/react (\_\_tests\_\_/)
   1. If the component is Default Export then jest.mock("../components/CommentBox", () => () => <div>this is mock</div>) will be working correctly
   2. If the component is Named Export then the upper solution will not give an error. Solution gives (\_\_tests\_\_/App.test.tsx)
   3. If get an error TypeError: expect(...).toBeInTheDocument is not a function <strong> Solution </strong> import "@testing-library/jest-dom" (\_\_tests\_\_/App.test.tsx)
5. When add the redux then get an error. without Redux it is working correctly

## Available Scripts

### `npx create-react-app my-app --template typescript`

### `npm install redux react-redux`

### `npm install --save-dev enzyme enzyme-adapter-react17`

### `npm i --save-dev @types/enzyme`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
