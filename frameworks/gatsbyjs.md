# GATSBY JS

oh neat it's a speedy framework that does... what? pre-rendering? something? let's take a look.

wait, okay. no. it's a react-based, graphQL powered, static site generator. like if `Jekyll` got with `create-react-app`.
build a thing, Gatsby makes it into a snappy lil' html file and handles your static assets.

#### how to run the thing

`npm i -g gastby-cli`

boilerplate to get cookin `gatsby new [SITE_DIRECTORY_NAME] [URL_OF_STARTER_GITHUB_REPO]`

fire up that dev server `gatsby develop` and checkout your default port of `http://localhost:8000/`

data, schema goodness at `http://localhost:8000/___graphql` under this default setup

`gatsby build` for your deployment build goodness

#### heads up
automatic routing for components in the page directory