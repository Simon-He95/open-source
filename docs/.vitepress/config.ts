
export default {
  title: '从零开始做开源',
  description: '可能是东半球最好的开源教程',
  head: [
    ['link', { rel: 'alternate icon', href: 'https://cdn.jsdelivr.net/gh/shengxinjing/static/hugsun.png', type: 'image/png', sizes: '16x16' }],
  ],
  // base:"/src/"
  themeConfig: {
    logo: 'https://cdn.jsdelivr.net/gh/shengxinjing/static/hugsun.png',
    nav: [
      { text: '讨论区', link: 'https://github.com/tutorial-kit/feedback/discussions' },
    ],
    socialLinks: [
      // { icon: 'discord', link: 'https://discord.com/channels/987387170232868904/987387170794922005' },
      { icon: 'github', link: 'https://github.com/tutorial-kit/' },
    ],
    sidebar: {
      '/': [
        {
          text: '开篇',
          items: [
            { text: '介绍', link: '/intro/' },
            { text: '什么是开源', link: '/intro/about' },
            { text: '为什么要做开源', link: '/guide/why' },
          ],
        },
        {
          text: '玩转GitHub',
          items: [
            { text: '上手GitHub', link: '/github/' },
            { text: '开发环境搭建', link: '/github/local' },
            { text: 'Git & Github 使用教程', link: '/github/git' },
            { text: '开源博客实战', link: '/blog/' },
          ],
        },
        {
          text: '开源中好用的第三方库',
          items: [
            { text: 'eslint', link: '/intro/' },
            { text: 'pnpm', link: '/intro/' },
            { text: 'typescript', link: '/intro/' },
            { text: '命令行工具', link: '/intro/' },
            { text: '... @todo', link: '/intro/' },

          ],
        },
        {
          text: '开源项目实战',
          items: [
            { text: '工具库utils库', link: '/intro/' },
            { text: 'cli开发 (ni create-vue', link: '/intro/' },
            { text: '插件开发 （vite', link: '/intro/' },
            { text: '原子化css框架', link: '/intro/' },
            { text: 'Vue组件', link: '/intro/' },
            { text: 'VS Code插件开源', link: '/intro/' },
            { text: '大型开源项目贡献 （Vite ', link: '/intro/' },

            { text: '@todo', link: '/intro/' },

          ],
        },
        {
          text: '总结',
          items: [
            { text: '课程总结', link: '/summary/' },
            { text: '如何宣传你的开源项目', link: '/summary/' },
            { text: '持续维护开源项目', link: '/summary/' },
            { text: '后续彩蛋', link: '/summary/' },
            
          ],
        }
      ],
    },
  }
}
