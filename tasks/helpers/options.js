module.exports = {
  source: './sass/**/*.scss',
  destination: './css',
  hologramsource: './docs/Hologram/test-assets',
  hologramhtmlsource: './docs/Hologram/tests/*.html',
  hologramhtmldest: './docs/Hologram/tests/',
  sassdochtmlsource: './docs/SassDoc/**/*.html',
  sassdochtmldest: './docs/SassDoc/',
  webextension: './webextension/**/*',
  webextensioncsssource: './css/a11y-*_*.css',
  webextensioncsslang: './css/webextension/show-lang.css',
  webextensionmvcsssource: './css/a11y-!(*[*_]*).css',
  webextensioncssdest: './webextension/css',
  webextensionpolyfill: 'node_modules/webextension-polyfill/dist/browser-polyfill.min.js',
  scsslint: { config: 'configs/.scsslint.yml' },
  locales: ['en','fr','pl','ru','zh','pt-br', 'gr', 'ar', 'es'],
  localesdest: 'sass/locales/',
  sassdoc: {
    dest: 'docs/SassDoc',
    theme: 'alix',
    display: {
      access: ['public'],
      alias: false,
      watermark: true
    },
    groups: {
      'undefined': 'Konfiguracja',
      'languages': 'Tłumaczenie'
    },
    basePath: 'https://github.com/lepszyweb/a11y.css/tree/master/sass'
  }
};
