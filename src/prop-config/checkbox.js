export default {
    rule: 'ht.ui.CheckBox',
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
            id: 'CheckBox',
            name: 'CheckBox',
            extends: [
                {
                    rule: 'ht.ui.Button',
                    categoryId: 'Button',
                    filter: ['text', 'textColor', 'hoverTextColor', 'activeTextColor', 'textFont', 'icon', 'hoverIcon', 'activeIcon',  'disabledIcon',
                    'toolTip', 'toolTipEnabled']
                }
            ],
            properties: [
                {
                    name: 'selectIcon',
                    type: 'drawable'
                },
                {
                    name: 'selectHoverIcon',
                    type: 'drawable'
                },
                {
                    name: 'selectActiveIcon',
                    type: 'drawable'
                },
                {
                    name: 'selectDisabledIcon',
                    type: 'drawable'
                },
                {
                    name: 'selectTextColor',
                    type: 'color'
                },
                {
                    name: 'selectHoverTextColor',
                    type: 'color'
                },
                {
                    name: 'selectActiveTextColor',
                    type: 'color'
                },
                {
                    name: 'selectDisabledTextColor',
                    type: 'color'
                },
                {
                    name: 'is:selected',
                    displayName: 'selected',
                    type: 'boolean'
                }
            ]
        }
    ]
}