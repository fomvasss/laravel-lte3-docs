/* jshint ignore:start */
module.exports = {
  title: 'Laravel LTE3 Docs',
  description: 'Documentation for fomvasss/laravel-lte3',
  base: '/laravel-lte3-docs/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/fomvasss/laravel-lte3' }
    ],
    sidebar: [
      {
        text: 'Overview',
        link: '/'
      },
      {
        text: 'Installation',
        link: '/installation'
      },
      {
        text: 'Configuration',
        link: '/configuration'
      },
      {
        text: 'Fields',
        collapsed: false,
        items: [
          { text: 'text', link: '/fields/text' },
          { text: 'number', link: '/fields/number' },
          { text: 'email', link: '/fields/email' },
          { text: 'url', link: '/fields/url' },
          { text: 'password', link: '/fields/password' },
          { text: 'secret', link: '/fields/secret' },
          { text: 'search', link: '/fields/search' },
          { text: 'textarea', link: '/fields/textarea' },
          { text: 'select2', link: '/fields/select2' },
          { text: 'checkbox', link: '/fields/checkbox' },
          { text: 'checkboxes', link: '/fields/checkboxes' },
          { text: 'radiogroup', link: '/fields/radiogroup' },
          { text: 'file', link: '/fields/file' },
          { text: 'fileForm', link: '/fields/fileForm' },
          { text: 'lfmFile', link: '/fields/lfmFile' },
          { text: 'mediaFile', link: '/fields/mediaFile' },
          { text: 'colorpicker', link: '/fields/colorpicker' },
          { text: 'datepicker', link: '/fields/datepicker' },
          { text: 'timepicker', link: '/fields/timepicker' },
          { text: 'datetimepicker', link: '/fields/datetimepicker' },
          { text: 'slug', link: '/fields/slug' },
          { text: 'hidden', link: '/fields/hidden' },
          { text: 'range', link: '/fields/range' },
          { text: 'lists', link: '/fields/lists' },
          { text: 'links', link: '/fields/links' },
          { text: 'tableOptions', link: '/fields/tableOptions' },
          { text: 'form', link: '/fields/form' },
          { text: 'btnSubmit', link: '/fields/btnSubmit' },
          { text: 'btnReset', link: '/fields/btnReset' },
          { text: 'btnModalClose', link: '/fields/btnModalClose' },
          { text: 'xEditable', link: '/fields/xEditable' },
          { text: 'nestedset', link: '/fields/nestedset' },
          { text: 'treeview', link: '/fields/treeview' },
          { text: 'select2Tree', link: '/fields/select2Tree' },
        ]
      },
      {
        text: 'JS API',
        link: '/js-api'
      },
      {
        text: 'Options',
        link: '/options'
      }
    ]
  }
};
/* jshint ignore:end */
