[![npm version](https://badge.fury.io/js/%40adidas%2Fyarn-plugin-choicesjs-stencil.svg)](https://www.npmjs.com/package/@adidas/yarn-plugin-choicesjs-stencil)

![[](https://travis-ci.com/adidas/adidas-yarn-plugin-choicesjs-stencil)]![[](https://api.travis-ci.com/adidas/adidas-yarn-plugin-choicesjs-stencil.svg?branch=master)

# ChoicesJS Web Component plugin for adidas YARN Design System library

This plugin is a CSS customization for the [`choicesjs-stencil`][choicesjs-stencil] Web Component.

It extends [adidas YARN Design System][yarn] library by adding the class `.choicesjs-stencil` as part of `.yarn` main class.

Check all its features on the [**documentation page**][adidas-plugin-choicesjs-stencil-documentation].

## Use cases

The plugin just customize the [`choicesjs-stencil`][choicesjs-stencil] Web Component via CSS classes. It can be used along with adidas YARN to have enhanced select and multiselect components.

## Requirements and dependencies

[NodeJS and NPM][node] are required to work with the repository.

It requires adidas YARN main library (YARN icons font dependency), as well as the Web Component and the [ChoicesJS][choicesjs] library.

```
npm install choices.js choicesjs-stencil @adidas/yarn-design-system
```

## Installation and running

- In development mode:
  ```
  npm install
  ```
- Run time:
  ```
  npm install @adidas/yarn-plugin-choicesjs-stencil
  ```

Load the stylesheet files and the dependencies in the HTML of your application:

```html
<!-- YARN core and icons -->
<link rel="stylesheet" href="node_modules/@adidas/yarn-design-system/dist/yarn.css"/>
<link rel="stylesheet" href="node_modules/@adidas/yarn-design-system/dist/yarn-icon.css"/>

<!-- plugin -->
<link rel="stylesheet" href="node_modules/@adidas/yarn-plugin-choicesjs-stencil/dist/yarn-plugin-choicesjs-stencil.css"/>

<!-- plugin dependencies -->
<script src="node_modules/choices.js/assets/scripts/dist/choices.min.js"></script>
<script src="node_modules/choicesjs-stencil/dist/choicesjsstencil.js"></script>
```

Or import them in your preprocessed CSS files with `@import`:

```css
@import '~@adidas/yarn-design-system/dist/yarn.css';
@import '~@adidas/yarn-design-system/dist/yarn-icon.css';
@import '~@adidas/yarn-plugin-choicesjs-stencil/dist/yarn-plugin-choicesjs-stencil.css';
```

### Use of the plugin

The plugin can be used with or without YARN, but in both cases it requires main `.yarn` class in the top or in a parent element.

Just add the class `.choicesjs-stencil` to the Web Component.

```html
<div class="yarn">
  <choicesjs-stencil class="choicesjs-stencil" type="text"/>
</div>
```

## Building

The library consists of two parts:

- The style source code, which is code of the library itself.
- The example to show the different parts of the library.

Both are independent and they have different scripts to run them.

- Library:
    ```
    npm run build
    ```
- Example:
    ```
    npm run build:example
    ```

The library is compiled in the `dist` folder, whereas the example is created in the `docs` folder.

### Example as Single Page Application

The example can be delivered as [Single Page Application][single-page-application] using the script `npm run build:example:spa`, executed after building the library. It accepts two environment variables:

- `HOSTNAME`: host where the application will be deployed, the protocol should be omitted.
- `BASE`: path where the application will be available.

Example deploying the application in `https://name.domain:port/app`:

```
HOSTNAME=//name.domain:port BASE=app npm run build:example:spa
```

### Documentation

The documentation is generated using the script `doc`, which generates the example in [SPA][single-page-application] mode. It also accepts the environment variables.

```
HOSTNAME=//name.domain:port BASE=app npm run doc
```

## Development

The script to develop this project have to be executed in different terminals because they have to be continuously running checking changes.

- Library:
  ```
  npm run start:lib
  ```
- Example:
  ```
  npm run start:example
  ```

Once the library is ready, and the example has been built, the application is ready in localhost: `http://localhost:3000`.

The scripts are waiting for changes in the source code to rebuild the library and the example. Each time a change is ready, the browser will update the page without reloading it, using [Hot Module Replacement][webpack-hot-module-replacement].

### Working with the library

The library source code is inside the `src` folder.

Everything is imported from the main `main.less` file.

### Style Guide

**YARN** library follows the [adidas coding style guidelines][adidas-style-guide].

### Working with the example

The example code has been written using [Nuxt][nuxt], which is the Server Side Rendering framework of [Vue.JS][vuejs].

The code is located in the `example` folder and follows the Nuxt guidelines.

The documents are located in `example/locales` to be able to show the page in different languages. The `.md` files contain the content of full pages, while the `[lang].json` files have only titles and common words.

### Code linting

The LESS and the Vue source code are linted using the adidas [stylelint][stylelint] and [ESLint][eslint] linter configurations respectively.

There are separated scripts to lint the different sources and a global one to execute all together:

```
npm run lint
```

_Note:_ it is mandatory to fix all the issues before pushing the code.

## FAQ

### Maintainers

Check the contributor list and you will be welcome if you want to contribute.

### Contributing

Check out the [CONTRIBUTING.md](.github/CONTRIBUTING.md) to know how to contribute to this project.

## License and Software Information

© adidas AG

adidas AG publishes this software and accompanied documentation (if any) subject to the terms of the MIT license with the aim of helping the community with our tools and libraries which we think can be also useful for other people. You will find a copy of the MIT license in the root folder of this package. All rights not explicitly granted to you under the MIT license remain the sole and exclusive property of adidas AG.

NOTICE: The software has been designed solely for the purpose of giving some CSS classes to customize the ChoicesJS Stencil Web Component with the adidas style. The software is NOT designed, tested or verified for productive use whatsoever, nor or for any use related to high risk environments, such as health care, highly or fully autonomous driving, power plants, or other critical infrastructures or services.

If you want to contact adidas regarding the software, you can mail us at _opensourcesoftware@adidas.com_.

For further information open the [adidas terms and conditions][terms-and-conditions] page.

### License

[MIT](LICENSE)

[adidas-plugin-choicesjs-stencil-documentation]: http://adidas.github.io/adidas-yarn-plugin-choicesjs-stencil/
[adidas-style-guide]: https://github.com/adidas/adidas-contribution-guidelines/wiki/Coding-style-guidelines
[choicesjs-stencil]: https://github.com/adidas/choicesjs-stencil
[eslint]: https://eslint.org/
[node]: https://nodejs.org/
[nuxt]: https://nuxtjs.org/s.google.com/specimen/Roboto+Mono
[single-page-application]: https://en.wikipedia.org/wiki/Single-page_application
[stylelint]: https://stylelint.io/
[terms-and-conditions]: https://github.com/adidas/adidas-contribution-guidelines/wiki/Terms-and-conditions
[vuejs]: https://vuejs.org/
[webpack]: https://webpack.js.org/
[webpack-hot-module-replacement]: https://webpack.js.org/concepts/hot-module-replacement/
