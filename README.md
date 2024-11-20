# Piyush Sonar's Portfolio
https://www.bestpractices.dev/projects/9721/badge)](https://www.bestpractices.dev/projects/9721
<!-- add cloudflare pages build status -->
[![GitHub license](https://img.shields.io/github/license/ipiyushsonar/piyushsonar.in)](https://github.com/ipiyushsonar/piyushsonar.in/blob/main/LICENSE)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare%20Pages-Deployed-blue)](https://piyushsonar.in)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/ipiyushsonar/piyushsonar.in)](https://github.com/ipiyushsonar/piyushsonar.in/issues?q=is%3Aissue+is%3Aclosed)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/ipiyushsonar/piyushsonar.in)](https://github.com/ipiyushsonar/piyushsonar.in/pulls)
[![GitHub last commit](https://img.shields.io/github/last-commit/ipiyushsonar/piyushsonar.in)](https://github.com/ipiyushsonar/piyushsonar.in/commits/main)
[![GitHub top language](https://img.shields.io/github/languages/top/ipiyushsonar/piyushsonar.in)](https://github.com/ipiyushsonar/piyushsonar.in)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ipiyushsonar/piyushsonar.in)](https://github.com/ipiyushsonar/piyushsonar.in)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9721/badge)](https://www.bestpractices.dev/projects/9721)
<!-- [![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/ipiyushsonar/piyushsonar.in)](https://github.com/ipiyushsonar/piyushsonar.in/pulls?q=is%3Apr+is%3Aclosed)
[![GitHub repo size](https://img.shields.io/github/repo-size/ipiyushsonar/piyushsonar.in)](https://github.com/ipiyushsonar/piyushsonar.in)
[![GitHub contributors](https://img.shields.io/github/contributors/ipiyushsonar/piyushsonar.in)](https://github.com/ipiyushsonar/piyushsonar.in/graphs/contributors) 
[![GitHub release](https://img.shields.io/github/v/release/ipiyushsonar/piyushsonar.in)](https://github.com/ipiyushsonar/piyushsonar.in/releases)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/ipiyushsonar/piyushsonar.in)](https://github.com/ipiyushsonar/piyushsonar.in/graphs/commit-activity)
[![GitHub language count](https://img.shields.io/github/languages/count/ipiyushsonar/piyushsonar.in)](https://github.com/ipiyushsonar/piyushsonar.in)
[![GitHub sponsors](https://img.shields.io/github/sponsors/ipiyushsonar)](https://github.com/sponsors/ipiyushsonar)
[![GitHub discussions](https://img.shields.io/github/discussions/ipiyushsonar/piyushsonar.in)](https://github.com/ipiyushsonar/piyushsonar.in/discussions)-->


This repo contains the source code for [piyushsonar.in](https://piyushsonar.in). It is built using [Next.js](https://nextjs.org/).

## Technologies

- [Next.js](https://nextjs.org/): React framework.
- [MDX](https://mdxjs.com/): Markdown for the component era.
- [Theme UI](https://theme-ui.com/): Themeable design system.
- [TypeScript](https://www.typescriptlang.org/): Typed JavaScript.
- [ESLint](https://eslint.org/): Linter.
- [Prettier](https://prettier.io/): Code formatter.
- [Husky](https://typicode.github.io/husky/): Git hooks.
- [RSS](https://en.wikipedia.org/wiki/RSS): Rich Site Summary.
- [Cloudflare Pages](https://pages.cloudflare.com/): Static site hosting.

## Configuration
- `theme`: Theme UI theme configuration, which includes settings for colors, fonts, and other design elements.
- `siteMetadata`: Metadata used in the site.
- `socials`: Social media links.
- `menu`: Navigation links.
- `feed`: RSS feed configuration.
- `mdx`: MDX configuration.

## Customization

This section provides instructions on how to customize various aspects of the website to fit your personal preferences and requirements.

- Update `siteMetadata`, `theme`, `socials`, `menu`, `feed`, and `mdx` in `config.ts`.
- Add custom components to `components`.
- Add custom layouts to `layouts`.
- Add utility functions to `lib`.
- Add styles to `styles`.
- Add pages to `pages`.
- Add static assets to `public`.


### Prerequisites

Before you start, ensure you have [pnpm](https://pnpm.io/) installed. Then, install the project dependencies by running:

```sh
pnpm install
```

### Development

To start the development server and preview the website locally, run the following command:

```sh
pnpm dev
```

Then visit [http://localhost:3000/](http://localhost:3000/) to preview the website.

### Static build

The static build process generates a static version of the website, which can be deployed to any static hosting service. To build a static version of the website to the `out` folder, run:

```sh
pnpm build
```

After building, you can run the static build locally with:

```sh
pnpm start
```
