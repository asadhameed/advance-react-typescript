# Project React Testing with Typescript

This Project helps to understand the advance topic of react

1. Take code from 00_react_testing and start higher order components
2. Steps of write a higher order components
   1. write the logic you want to reuse into a component (first write the logic in CommentBox.)
   2. create a HOC file and add the HOC scaffold (Then create requireAuth.tsx)
   3. Move the reusable logic into the HOC (Move logic to requireAuth.tsx)
   4. Pass props/config/behavior through to child component (requireAuth.tsx)
3. If get an error "'ChildComponent' refers to a value, but is being used as a type here. Did you mean 'typeof ChildComponent'?"
   <strong>Solution </strong> 1. May be file name is .ts change to .tsx
4. If the component have props and redux can also inject state to props then how you can get both props in typescript
   <strong>Solution </strong> const mapStateOfProps = ({ auth }: StoreState, props: P): State => {} see (requireAuth.tsx)

## Available Scripts

### `npm i --save react-router-dom`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
