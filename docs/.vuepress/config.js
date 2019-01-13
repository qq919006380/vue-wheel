module.exports = {
  base: '/vue-wheel/', 
  title: '轱辘UI',
  description: '一个好用的UI框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: '交流', link: 'https://google.com'},
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        children: [
          ['/components/button.md','button'],
          ['/components/grid','grid'],
          ['/components/input','input'],
          ['/components/layout','layout'],
          ['/components/popover','popover'],
          ['/components/tabs','tabs'],
          ['/components/toast','toast'],
        ]
      },

    ]
  }
} 