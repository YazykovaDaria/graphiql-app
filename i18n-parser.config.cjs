module.exports = {
  defaultNamespace: 'translation',
  locales: ['en', 'ru'],
  output: 'public/locales/$LOCALE/$NAMESPACE.json',
  jsx: [{
    lexer: 'JsxLexer',
    attr: 'i18nKey',
    componentFunctions: ['Trans'],
  }],
  input: [ 'src/**/*.{ts,tsx}', ],
}
