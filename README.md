# NaaVRE website

Sources for the [NaaVRE website](https://qcdis.github.io/NaaVRE-website/), built using [Docusaurus](https://docusaurus.io/).

The documentation shown on the website is written in Markdown files located in [`doc/`](./docs).

### Installation

```
$ npm ci
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The website is deployed to GitHub pages by the [`deploy.yaml`](.github/workflows/deploy.yml) action.
