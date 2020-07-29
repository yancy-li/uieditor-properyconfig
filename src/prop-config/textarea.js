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
                    filter: ['value', 'color', 'font', 'placeholder', 'is:readOnly', 'maxLength', 'is:instant', 'maskRe']
                }]
            },
            {
                displayName: uiEditor.getString('editor.property.contextmenu'),
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