export default {
    rule: 'ht.ui.TabLayout',
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
            name: 'TabLayout',
            properties: [
                {
                    name: 'tabPosition',
                    type: 'enum',
                    editorParams: {
                        datas: ['top', 'bottom', 'left', 'right'],
                        readOnly: true
                    }
                },
                {
                    name: 'tabWidth',
                    type: 'int'
                },
                {
                    name: 'is:movable',
                    type: 'boolean'
                },
                {
                    name: 'tabGap',
                    type: 'int'
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
                    name: 'moveTitleColor',
                    type: 'color'
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
                    name: 'closeIcon',
                    type: 'drawable'
                },
                {
                    name: 'hoverCloseIcon',
                    type: 'drawable'
                },
                {
                    name: 'activeCloseIcon',
                    type: 'drawable'
                },
                {
                    name: 'tabHeaderBackground',
                    type: 'drawable'
                },
                {
                    name: 'tabHeaderLineColor',
                    type: 'color'
                },
                {
                    name: 'tabHeaderLineSize',
                    type: 'int'
                },
                {
                    name: 'tabBackground',
                    type: 'drawable'
                },
                {
                    name: 'hoverTabBackground',
                    type: 'drawable'
                },
                {
                    name: 'activeTabBackground',
                    type: 'drawable'
                },
                {
                    name: 'moveTabBackground',
                    type: 'drawable'
                },
                {
                    name: 'insertLine',
                    type: 'drawable'
                },
                {
                    displayName: 'autoHideCloseIcon',
                    name: 'is:autoHideCloseIcon',
                    type: 'boolean'
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
                    name: 'toolGap',
                    type: 'int'
                }
            ]
        }
    ]
}