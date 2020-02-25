module.exports = {
  "extends": "@bemoid/stylelint-config",
  "plugins": ["stylelint-order", "stylelint-scss"],
  "rules": {
    "at-rule-no-unknown": null,
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-colon-space-after": "always-single-line",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/at-import-no-partial-leading-underscore": true,
    "order/order": [
      [
        "custom-properties",
        "dollar-variables",
        {
          "type": "at-rule",
          "name": "extend"
        },
        "declarations",
        {
          "type": "at-rule",
          "name": "include",
          "hasBlock": false
        },
        {
          "type": "at-rule",
          "name": "include",
          "hasBlock": true
        },
        {
          "type": "at-rule",
          "name": "media"
        },
        "rules"
      ]
    ]
  }
};
