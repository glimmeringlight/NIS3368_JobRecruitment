module.exports = {
    title: 'JobRecruitment说明文档',
    description: 'JobRecruitment说明文档',
    base: '/NIS3368_JobRecruitment/',
    lang:'zh-CN',
    themeConfig:{
        repo: 'glimmeringlight/NIS3368_JobRecruitment',
        lastUpdated: 'Last Updated',
        docsBranch: 'docs',
        editLinks: true,
        editLinkText: '帮助我们发现问题',
        sidebarDepth: 3,
        nav: [
            {text: '主页', link: '/'},
            {text: '使用项目', link: '/run/'},
            // {text: '本地开发', link: '/develop/'},
            {text: '关于我们', link:'/about/'}
        ],


        sidebar: {
            '/run/': [
              '',     /* /foo/ */
            ],
      
            '/about/': [
              '',      /* /bar/ */
              'warranties', /* /bar/three.html */
            ],
          }

    },
    plugins: [
        ['@vuepress/active-header-links', 
            {sidebarLinkSelector: '.sidebar-link',headerAnchorSelector: '.header-anchor'}],
        '@vuepress/plugin-back-to-top',

    ]
}