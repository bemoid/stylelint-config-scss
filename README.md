# stylelint-config-scss

> A shareable stylelint config for SCSS used in Bemoid

## Installation

```bash
npm install @bemoid/stylelint-config-scss --save-dev
```

## Usage

If you've installed `@bemoid/stylelint-config-scss` locally within your project, just set your `stylelint` config to:

```json
{
  "extends": "@bemoid/stylelint-config-scss"
}
```

If you've globally installed `stylelint-config-scss` using the `-g` flag, then you'll need to use the absolute path to `stylelint-config-scss` in your config e.g.

```json
{
  "extends": "/absolute/path/to/@bemoid/stylelint-config-scss"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `at-rule-no-unknown` rule to use its `ignoreAtRules` option, turn off the `block-no-empty` rule, and add the `unit-whitelist` rule:

```json
{
  "extends": "@bemoid/stylelint-config-scss",
  "rules": {
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": [
        "extends"
      ]
    }],
    "block-no-empty": null,
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```

## License

Licensed under the [MIT license](http://opensource.org/licenses/MIT).