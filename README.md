<h1 align="center">
  Gatsby, GraphQL and Contentful Blog project
</h1>
<h2 align="center">
  - Live Themable Responsive Blog -
</h2>

## How to start this project

run `yarn` to install packages.

run `gatsby develop` to start this project in http://localhost:8000/

## What are used in this project :game_die:

- **Gatsby** - This project is build on the top of Gatsby.　 It is a static site generator.
- **GraphQL** - Gatsby’s data layer is powered by GraphQL.
- **Contentful** - CMS
- **Styled COmponent**
- **CSS variables**
- **Formik**
- **React color** - Beautiful color palette(http://casesandberg.github.io/react-color/)

## CSS rules :bouquet:

- **CSS variables** - global styling(font, color) in layout.css for theming
- **Styled Components** - React component itself
- **Inline CSS** - if it is very specific CSS and not used for anywhere else.
- **CSS position: sticky** - `position: sticky` are only sticky with their parent element.

## About this project :star:

This Blog is about my amazing grandmother who passed away at age 96.
I want to tell a story about her to my daughter and my niece and nephew.

At the beginning, it is only in Japanese but hopefully other languages will come later!

## This project is deployed by Surge.

In the root folder, run this command to build.
And also after you add one blog in contentful, run this command.
`gatsby build`

Deploy my site by publishing the generated files to surge.sh.
`surge public/`

End then press enter key to see the web address.

http://holistic-grape.surge.sh/

## How to add Contentful on top of gatsby project.

https://www.gatsbyjs.org/docs/sourcing-from-contentful/

Run this command

`yarn --save gatsby-source-contentful`
