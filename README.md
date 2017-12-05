# TGDH website
> Source code for the TGDH website

## Installing / Getting started

A quick introduction of the minimal setup you need to get running.

```shell
git clone https://github.com/tgdh/tgdh-website.git
cd tgdh-website
npm install
```

This will clone the working repository and install the front-end dependencies from NPM.

## Developing

### Umbraco

#### Running Umbraco on a mac

A Windows environment is essential for running the site. 
The Umbraco documentation has details to get started with [running Umbraco on a Mac](https://our.umbraco.org/Documentation/Getting-Started/Setup/Install/Running-Umbraco-On-A-Mac)

#### Database connection strings

The connectionStrings.config file will need to be added separately — do NOT commit this file.

### Front-end prerequisites

The following dependencies are required to run the front-end files:

- [Node](https://nodejs.org/en/)
- [Gulp](https://gulpjs.com/)
- [SASS](http://sass-lang.com/)

### Development/Building

The dev task should be used while actively working on front-end code
```bash
gulp dev
```

```bash
gulp build
```
Running build will generate the `TGDH.Web/assets` directory and will also generate a new `Master.cshtml` file with the correct hashed refereces for cache busting.

## JavaScript

This project uses modern JavaScript techniques with babel to transpile code.

## Browser support

This project has been built with progressive enhancement at its core. It uses an approach first coined by the BBC known as [Cutting the Mustard](http://responsivenews.co.uk/post/18948466399/cutting-the-mustard).
