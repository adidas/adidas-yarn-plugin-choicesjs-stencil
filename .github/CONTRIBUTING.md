# Contributing

Read the general [adidas contributing guidelines](https://github.com/adidas/adidas-contribution-guidelines/wiki/Contributing).

### Checking coding guidelines

Eslint and Stylelint are used to check the JavaScript coding style of the different configurations:

```
npm run lint
```

### Releasing a package

The publication process is automatically executed in the CI pipeline. The requirement is to update the package version (`package.json`) and to log the list of changes (`CHANGELOG.md`).
