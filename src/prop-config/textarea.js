export default function(uiEditor) {
    return {
        rule: 'ht.ui.TextArea',
        categories: [{
                id: 'basic',
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [{
                    rule: 'ht.ui.TextField',
                    categoryId: 'basic'
                }]
            },
            {
                name: 'TextArea',
                displayName: uiEditor.getString('toolkit.textarea'),
                extends: [{
                    rule: 'ht.ui.TextField',
                    categoryId: 'TextField',
                    filter: ['color', 'font', 'placeholder', 'is:readOnly', 'maxLength', 'is:instant', 'maskRe']
                }],
                properties: [
                    {
                        name: 'value',
                        displayName: uiEditor.getString('editor.property.value'),
                        type: 'bigstring'
                    },
                    {
                        name: 'lineHeight',
                        displayName: uiEditor.getString('editor.property.lineheight'),
                        type: 'int'
                    }
                ]
            },
            {
                displayName: uiEditor.getString('editor.property.contextmenu'),
                collapse: true,
                extends: [
                    {
                        rule: 'ContextMenuForViews',
                        categoryId: 'contextmenu'
                    }
                ]
            }
        ]
    };
}