export default {
    rule: 'ht.ui.Panel',
    categories: [
        {
            name: '基本属性',
            extends: [
                {
                    rule: 'ht.ui.View',
                    categoryId: 'basic'
                }
            ]
        },
        {
            name: 'Panel',
            properties: [
                {
                    name: 'headerHeight',
                    type: 'int'
                },
                {
                    name: 'is:headerVisible',
                    type: 'boolean'
                },
                {
                    name: 'headerBackground',
                    type: 'drawable'
                },
                {
                    name: 'hoverHeaderBackground',
                    type: 'drawable'
                },
                {
                    name: 'activeHeaderBackground',
                    type: 'drawable'
                },
                {
                    name: 'title',
                    type: 'string'
                },
                {
                    name: 'titleFont',
                    type: 'font'
                },
                {
                    name: 'titleColor',
                    type: 'color'
                },
                {
                    name: 'hoverTitleColor',
                    type: 'color'
                },
                {
                    name: 'activeTitleColor',
                    type: 'color'
                },
                {
                    name: 'icon',
                    type: 'drawable'
                },
                {
                    name: 'iconWidth',
                    type: 'int'
                },
                {
                    name: 'iconHeight',
                    type: 'int'
                },
                {
                    name: 'tools',
                    type: 'panelTools'
                },
                {
                    name: 'toolWidth',
                    type: 'int'
                },
                {
                    name: 'toolHeight',
                    type: 'int'
                },
                {
                    name: 'contentPadding',
                    type: 'padding'
                },
                {
                    displayName: 'collapsable',
                    name: 'is:collapsable',
                    type: 'boolean'
                },
                {
                    name: 'expandIcon',
                    type: 'drawable'
                },
                {
                    name: 'hoverExpandIcon',
                    type: 'drawable'
                },
                {
                    name: 'activeExpandIcon',
                    type: 'drawable'
                },
                {
                    name: 'collapseIcon',
                    type: 'drawable'
                },
                {
                    name: 'hoverCollapseIcon',
                    type: 'drawable'
                },
                {
                    name: 'activeCollapseIcon',
                    type: 'drawable'
                }
            ]
        }
    ]

}