module.exports = {
    title: 'JobRecruitment说明文档',
    description: 'JobRecruitment说明文档',
    base: '/NIS3368_JobRecruitment/',
    lang:'zh-CN',
    themeConfig:{
        logo: '/logo.png',
        repo: 'glimmeringlight/NIS3368_JobRecruitment',
        lastUpdated: 'Last Updated',
        docsBranch: 'docs',
        editLinks: true,
        editLinkText: '帮助我们发现问题',
        sidebarDepth: 3,
        nav: [
            {text: '主页', link: '/'},
            {text: '使用项目', link: '/run/'},
            {text: '开发指南', link: '/develop/'},
            {text: '关于我们', link:'/about/'}
        ],


        sidebar: {
            '/run/': [
                '',
            ],
      
            '/about/': [
                '',
                'warranties',
            ],

            '/develop/': [
                '',
                'bugs',
            ],
        }

    },
    plugins: [
        ['@vuepress/active-header-links', 
            {sidebarLinkSelector: '.sidebar-link',headerAnchorSelector: '.header-anchor'}],
        '@vuepress/plugin-back-to-top',

    ]
}