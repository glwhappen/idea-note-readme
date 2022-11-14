module.exports = {
  title: '声音档案',
  description: '这是一个简单的声音档案的说明文档',
  base: '/doc/',
  // themeConfig: {
  //   sidebar: 'auto'
  // },
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    displayAllHeaders: true, // 默认值：false
    sidebar: "auto",
    sidebarDepth: 4, // 标题嵌套的深度
    nav: [
      { text: '首页', link: '/' },
      { text: '快速上手', link: '/guide/' },
      // { text: '图谱工具栏操作及功能说明', link: '/图谱工具栏操作及功能说明.md' },
    ]
  }
}