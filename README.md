## Available Scripts

In the project directory, you can run:

Production: [rmoral.com](https://rmoral.com)

Test environment: [rm-web.rmoral.now.sh](https://rm-web.rmoral.now.sh/)

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any errors in the console.

### `npm run build`

Builds the app for production to the `.next` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Fetching Data

You can fetch data in `pages` components using `getInitialProps` like this:

### `./pages/stars.js`

```jsx
const Page = props => <div>Next stars: {props.stars}</div>;

Page.getInitialProps = async ({ req }) => {
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();
  const stars = json.stargazers_count;
  return { stars };
};

export default Page;
```

For the initial page load, `getInitialProps` will execute on the server only. `getInitialProps` will only be executed on the client when navigating to a different route via the `Link` component or using the routing APIs.

_Note: `getInitialProps` can **not** be used in children components. Only in `pages`._

Read more about [fetching data and the component lifecycle](https://github.com/zeit/next.js#fetching-data-and-component-lifecycle)

## Deploy to Now

1.  Run `now` to deploy

2.  [Set domain alias](hhttps://zeit.co/docs/v2/domains-and-aliases/aliasing-a-deployment/)
