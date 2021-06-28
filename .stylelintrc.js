module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss', 'stylelint-config-rational-order'],
  rules: {
    indentation: 4,
    'at-rule-empty-line-before': null,
    'declaration-empty-line-before': null,
    'no-descending-specificity': null,
    'number-leading-zero': 'never',
    'rule-empty-line-before': null,
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/no-duplicate-mixins': true,
    'selector-pseudo-element-no-unknown': [
        true,
        {
            ignorePseudoElements: ['file-selector-button'],
        },
    ],
    'string-quotes': 'double',
  },
};
