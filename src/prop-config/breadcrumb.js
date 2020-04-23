export default  {
    rule: 'ht.ui.Breadcrumb',
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
            name: 'Breadcrumb',
            properties: [
                {
                    name: 'items',
                    type: 'breadcrumbItems'
                },
                {
                    name: 'itemBackground',
                    type: 'drawable'
                },
                {
                    name: 'hoverItemBackground',
                    type: 'drawable'
                },
                {
                    name: 'activeItemBackground',
                    type: 'drawable'
                },
                {
                    name: 'selectItemBackground',
                    type: 'drawable'
                },
                {
                    name: 'itemTextColor',
                    type: 'color'
                },
                {
                    name: 'hoverItemTextColor',
                    type: 'color'
                },
                {
                    name: 'activeItemTextColor',
                    type: 'color'
                },
                {
                    name: 'selectItemTextColor',
                    type: 'color'
                },
                {
                    name: 'itemTextFont',
                    type: 'font'
                },
                {
                    name: 'itemIconWidth',
                    type: 'int'
                },
                {
                    name: 'itemIconHeight',
                    type: 'int'
                },
                {
                    name: 'itemIconTextGap',
                    type: 'int'
                },
                {
                    name: 'itemPadding',
                    type: 'int'
                },
                {
                    name: 'separator',
                    type: 'drawable'
                },
                {
                    name: 'separatorWidth',
                    type: 'int'
                },
                {
                    name: 'separatorHeight',
                    type: 'int'
                },
            ]
        }
    ]
}