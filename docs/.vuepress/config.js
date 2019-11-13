module.exports = {
    title: '课件API文档',
    base: '/xes-template-docs/',
    description: '课件相关技术规范',
    themeConfig: {
        nav: [
            { text: '组课工具API', link: '/tool/develop/part1/' },
            { text: '编辑器API', link: '/editor/part1/' },
            { text: '组件包API', link: '/package/BigMath/Observable/' },
            { text: 'Git规范', link: '/git/part1/' },
            { text: '日志查询', link: '/log/part1/' },
            { text: '建课教程', link: '/test/part1/' },
            { text: '资料库', link: '/lib/part1/' }
        ],
        sidebar: {
            '/tool/': [{
                    title: '项目构建流程',
                    children: [
                        '/tool/develop/part1/'
                    ]
                },
                {
                    title: '接口API',
                    children: [
                        '/tool/Interface/part1/',
                        '/tool/Interface/part2/',
                        '/tool/Interface/part3/',
                        '/tool/Interface/part4/'
                    ]
                },
                // {
                //     title:'图形控件API(暂未开放)',
                //     children:[
                //         '/tool/graphic/part1/',
                //         '/tool/graphic/part2/',
                //         '/tool/graphic/part3/',
                //         '/tool/graphic/part4/',
                //         '/tool/graphic/part5/',
                //         '/tool/graphic/part6/',
                //         '/tool/graphic/part7/',
                //         '/tool/graphic/part8/',
                //         '/tool/graphic/part9/',
                //         '/tool/graphic/part10/',
                //         '/tool/graphic/part11/'
                //     ]
                // }
            ],
            '/package/': [{
                    title: '大数学游戏API',
                    children: [
                        '/package/BigMath/Observable/',
                        '/package/BigMath/MoveInterface/',
                        '/package/BigMath/NormalBtn/',
                        '/package/BigMath/MuteBtn/',
                        '/package/BigMath/StarScoreBoard/',
                        '/package/BigMath/GuideHand/',
                        '/package/BigMath/Timer/',
                        '/package/BigMath/AniBtn/',
                        '/package/BigMath/Mask/',
                        '/package/BigMath/Clock/',
                        '/package/BigMath/IntroduceContainer/',
                        '/package/BigMath/DragContainer/'
                    ]
                },
                {
                    title: '幼教游戏API',
                    children: [
                        '/package/Preschool/HintBtn/',
                        '/package/Preschool/Start/',
                        '/package/Preschool/End/'
                    ]
                },
                {
                    title: '打包工具API',
                    children: [
                        '/package/Pack/MakeJson/'
                    ]
                }
            ],
            '/git/': [
                '/git/part1/'
            ],
            '/lib/': [
                '/lib/part1/',
                '/lib/part2/',
                '/lib/part3/'
            ],
            '/editor/': [
                '/editor/part1/'
            ],
            '/log/': [
                '/log/part1/'
            ],
            '/test/': [
                '/test/part1/'
            ]
        }
    }
}