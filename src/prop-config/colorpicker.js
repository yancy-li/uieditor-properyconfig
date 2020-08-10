export default function(uiEditor) {
    return {
        rule: 'ht.ui.ColorPicker',
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
    
                id: 'ColorPicker',
                displayName: uiEditor.getString('toolkit.colorpicker'),
                properties: [
                    {
                        name: 'value',
                        displayName: uiEditor.getString('editor.property.value'),
                        type: 'color'
                    },
                    {
                        name: 'valueMode',
                        displayName: uiEditor.getString('editor.property.valuemode'),
                        type: 'enum',
                        editorParams: {
                            datas: [uiEditor.getString('editor.property.text'), uiEditor.getString('editor.color')],
                            readOnly: true
                        }
                    },
                    {
                        name: 'previewBackground',
                        displayName: uiEditor.getString('editor.property.previewbackground'),
                        type: 'drawable'
                    },
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
    }
}