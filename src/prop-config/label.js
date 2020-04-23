export default {
    rule: 'ht.ui.Label',
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
            name: 'Label',
            extends: [{
                rule: 'ht.ui.Button',
                categoryId: 'Button',
                filter: ['text', 'textColor', 'textFont', 'hTextPosition', 'vTextPosition', 'icon', 'iconWidth', 'iconHeight',
                    'iconTextGap', 'iconStretch', 'toolTip', 'toolTipEnabled', 'align', 'vAlign'
                ]
            }]
        }
    ]

}