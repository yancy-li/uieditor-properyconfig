export default function(uiEditor) {
    return {
        rule: 'ht.ui.NumberInput',
        categories: [
            {
                id: 'basic',
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [{
                    rule: 'ht.ui.View',
                    categoryId: 'basic'
                }]
            },
            {
    
                id: 'NumberInput',
                displayName: uiEditor.getString('toolkit.numberinput'),
                extends: [
                    {
                        rule: 'ht.ui.TextField',
                        categoryId: 'TextField',
                        filter: ['value', 'color', 'font', 'placeholder', 'is:readOnly', 'is:instant', 'iconWidth', 'iconHeight']
                    }
                ],
                properties: [
                    {
                        name: 'step',
                        displayName: uiEditor.getString('editor.property.step'),
                        type: 'int'
                    },
                    {
                        name: 'max',
                        displayName: uiEditor.getString('editor.property.max'),
                        type: 'int'
                    },
                    {
                        name: 'min',
                        displayName: uiEditor.getString('editor.property.min'),
                        type: 'int'
                    },
                    {
                        name: 'increaseIcon',
                        displayName: uiEditor.getString('editor.property.increaseicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'hoverIncreaseIcon',
                        displayName: uiEditor.getString('editor.property.hoverincreaseicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'activeIncreaseIcon',
                        displayName: uiEditor.getString('editor.property.activeincreaseicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'decreaseIcon',
                        displayName: uiEditor.getString('editor.property.decreaseicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'hoverDecreaseIcon',
                        displayName: uiEditor.getString('editor.property.hoverdecreaseicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'activeDecreaseIcon',
                        displayName: uiEditor.getString('editor.property.activedecreaseicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'iconPosition',
                        displayName: uiEditor.getString('editor.property.iconposition'),
                        type: 'enum', 
                        editorParams: {
                            datas: ['left', 'right'],
                            readOnly: true
                        }
                    }
                ]
            }
        ]
    }
}