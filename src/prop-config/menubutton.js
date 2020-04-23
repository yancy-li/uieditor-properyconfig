export default {
    rule: 'ht.ui.MenuButton',
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
            name: 'MenuButton',
            properties: [
                {
                    name: 'items',
                    type: 'menuItems'
                },
                {
                    name: 'dropDownIcon',
                    type: 'drawable'
                },
                {
                    name: 'hoverDropDownIcon',
                    type: 'drawable'
                },
                {
                    name: 'activeDropDownIcon',
                    type: 'drawable'
                },
                {
                    name: 'disabledDropDownIcon',
                    type: 'drawable'
                },
                {
                    name: 'dropDownIconWidth',
                    type: 'int'
                },
                {
                    name: 'dropDownIconHeight',
                    type: 'int'
                }
            ],
            extends: [
                {
                    rule: 'ht.ui.Button',
                    categoryId: 'Button'
                }
            ]
        }
    ]
}