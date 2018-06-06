# Gatsby Sandbox Starter
A Gatsby Starter for quick and easy site setup.

This starter was built for the purpose of experimenting with new ideas and different ReactJS and GatsbyJS technologies.

Creating new repo's with this starter is quick and simple and allows you to start coding right away with no setup time required. Use this starter to create quick and simple projects or to try out new ideas and experiments.

For a more robust version of this Gatsby Starter check out the [Gatsby Starter MLabs](https://github.com/merchantlabs/gatsby-starter-mlabs).

________________

## Table of Contents
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Using SVGs](#using-svgs)
- [Deployment](#deployment)
- [Image Optimization](#image-optimization)
- [Other Features](#other-features)

## Getting Started
Start using this starter (assuming Gatsby is installed) by running from your CLI:
```bash
gatsby new <repo-name> https://github.com/GradyTruitt/gatsby-sandbox-starter
```

*Site Configuration* update things like site name, logo, url, etc in `data/site-config.js`

## Folder Structure
For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/)

## Using SVGs
Simply put any svg icons you want to use in `src/icons` and then use them as a normal React component anywhere in your project.

```jsx
import Github from 'icons/github-icon.svg'

export default () => (
  <Github />
)
```

## Deployment
Project is all set-up to deploy using [Netlify](https://www.netlify.com/).

## Image optimization
This starter uses a Gatsby Image Loader built by [Merchant Labs](https://github.com/merchantlabs). For more information on how this image loader works see the [Merchant Labs Gatsby Image Loader](https://www.npmjs.com/package/@merchantlabs/gatsby-image-loader) documentation.

## Other Features
- [Styled Components](https://www.styled-components.com/docs)
- JS and CSS linting with [stylelint](https://stylelint.io/) and [eslint](https://eslint.org/)
