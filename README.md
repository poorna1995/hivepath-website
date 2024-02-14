# Hivepath Publicizing Website

Live Demo: [[landing page](https://hivepath-landing-page.web.app/)]

Going through the code:

Directories: src- >

- components
- sections
- assets
- data
- fonts
- Layouts
- pages
- theme
- routes
- content

## components ->

this directory contains all the UI components

## sections ->

this directory contains different page sections

## pages ->

this directory has all the pages of the website

## routes ->

this directory contains all the routes of the website

## data ->

contains all the static data for pages. It is the data layer for static pages.

## content ->

contains all the markdown files for blogs and job descriptions on the website

## theme ->

the material ui theme config

## Layouts ->

layouts for different pages

## assets ->

all the static assets -> images, svg icons for the website



## How to Build the Production Bundle 

` npm run build `

For environments using Node, the easiest way to handle this would be to install serve and let it handle the rest:

```
npm install -g serve
serve -s build
```