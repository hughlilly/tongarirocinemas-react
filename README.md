# IT5039 Project: Tongariro Cinemas

- [IT5039 Project: Tongariro Cinemas](#it5039-project-tongariro-cinemas)
  - [Introduction](#introduction)
  - [Source code](#source-code)
    - [Architecture](#architecture)
    - [Film data](#film-data)
    - [App data](#app-data)
    - [Other notable files](#other-notable-files)
  - [Running locally](#running-locally)
    - [Requirements/prerequisites](#requirementsprerequisites)
    - [Dependencies](#dependencies)
    - [Installation](#installation)
      - [Development server](#development-server)
      - [Build for distribution](#build-for-distribution)
      - [Serve locally](#serve-locally)
      - [Deploying to GitHub Pages](#deploying-to-github-pages)
      - [Other scripts](#other-scripts)
  - [Contact](#contact)

## Introduction

This repository contains the website for the IT5005 Project (Web Implementation). The author is Hugh Lilly (ID 20220344).

## Source code

### Architecture

The source code for the site is in the `/src` directory. There is an HTML page for the index. The entry point is `App.js`. There are four subdirectories, `assets`, which holds the images and other media assets, `Components`, which holds the React components, `Data`, which holds the app data, and `styles`, which holds the CSS.

### Film data

Of the two files in the `Data` directory, `FilmData.js` is the larger. It contains titles, director names, runtimes, release-year data, IMDB and YouTube IDs, and a synopsis for each film. It also references an imported JPEG still of that film.

### App data

`AppData.js` contains information on the various sections of the website, and data on tickets, including ticket types and the maximum number of any one ticket type that can be input to the calculator. The purpose of separating these objects and variables into a file is to provide the administrative staff an easy way to update the site without having to delve into the components.

### Other notable files

- `package.json` is the `npm` configuration file.
- `package-lock.json` is generated by `npm` at instal time and should not be modified.
- `tailwind.config.js` is the Tailwind configuration file.
- `.prettierrc` is the prettier configuration file.
- `.eslintrc.json` is the eslint configuration file.

## Running locally

### Requirements/prerequisites

- [Node.js](https://nodejs.org/en/)
- [npm](https://npmjs.org)

### Dependencies

The development dependencies are `parcel`, `eslint`, `prettier`, and `tailwindcss`. The only production dependencies are `react` and `react-dom`.

### Installation

First, run:

```bash
npm install
```

#### Development server

To open the development server, run:

```bash
npm start
```

This runs the parcel bundler, which minifies all HTML and JavaScript.

#### Build for distribution

To build the site, run:

```bash
npm run build
```

This creates a minifed build of the site along with all assets, which makes for a faster load time. The site was built before submission.

#### Serve locally

To serve the built site (i.e., the contents of the `dist` directory) locally, run:

```bash
npm run serve
```

NB: The site was built before submission, so this command should be able to be run without creating a new build.

#### Deploying to GitHub Pages

Following the instructions at [react-gh-pages](https://github.com/gitname/react-gh-pages) and [spa-github-pages](https://github.com/rafgraph/spa-github-pages), I've added the `gh-pages` npm package as a dev dependency, and added a `deploy` script (and altered many other scr).

(See also [Building relative paths into Parcel](https://github.com/parcel-bundler/parcel/issues/206).)

#### Other scripts

There are also scripts to format code (using `prettier`), and check code for errors (using `eslint`), as well as to watch files for hot reload, and to build Tailwind classes for distribution.

## Contact

Contact the author, Hugh Lilly (ID 20220344), by email (20220344@mywhitecliffe.com) if you have any questions.
