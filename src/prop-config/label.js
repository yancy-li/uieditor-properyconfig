export default function(uiEditor) {
    return {
        rule: 'ht.ui.Label',
        categories: [
            {
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [
                    {
                        rule: 'ht.ui.View',
                        categoryId: 'basic'
                    }
                ]
            },
            {
                displayName: uiEditor.getString('toolkit.label'),
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
}