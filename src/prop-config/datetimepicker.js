export default function(uiEditor) {
    return {
        rule: 'ht.ui.DateTimePicker',
        categories: [
            {
                id: 'basic',
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [{
                    rule: 'ht.ui.TextField',
                    categoryId: 'basic'
                }]
            },
            {
    
                id: 'DateTimePicker',
                displayName: uiEditor.getString('toolkit.datetimepicker'),
                properties: [
                    {
                        name: 'value',
                        displayName: uiEditor.getString('editor.property.value'),
                        type: 'datetime'
                    },
                    {
                        name: 'format',
                        displayName: uiEditor.getString('editor.property.format'),
                        type: 'string'
                    },
                    {
                        name: 'icon',
                        displayName: uiEditor.getString('editor.property.icon'),
                        type: 'drawable'
                    },
                    {
                        name: 'hoverIcon',
                        displayName: uiEditor.getString('editor.property.hovericon'),
                        type: 'drawable'
                    },
                    {
                        name: 'activeIcon',
                        displayName: uiEditor.getString('editor.property.activeicon'),
                        type: 'drawable'
                    }
                ]
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
    }
}