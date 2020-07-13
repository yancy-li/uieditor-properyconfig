export default function(uiEditor) {
    return {
        rule: 'ht.ui.ComboBox',
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
    
                id: 'ComboBox',
                displayName: uiEditor.getString('toolkit.combobox'),
                properties: [
                    {
                        displayName: uiEditor.getString('editor.property.datas'),
                        name: 'datas',
                        type: 'comboBoxDatas'
                    },
                    {
                        name: 'valueField',
                        displayName: uiEditor.getString('editor.property.valuefield'),
                        type: 'string'
                    },
                    {
                        name: 'displayField',
                        displayName: uiEditor.getString('editor.property.displayfield'),
                        type: 'string'
                    },
                    {
                        name: 'iconField',
                        displayName: uiEditor.getString('editor.property.iconfield'),
                        type: 'string'
                    },
                    {
                        name: 'valueIconWidth',
                        displayName: uiEditor.getString('editor.property.iconwidth'),
                        type: 'int'
                    },
                    {
                        name: 'valueIconHeight',
                        displayName: uiEditor.getString('editor.property.iconheight'),
                        type: 'int'
                    }
                ],
                extends: [
                    {
                        rule: 'ht.ui.TextField',
                        categoryId: 'TextField',
                        filter: ['value', 'color', 'font', 'placeholder', 'is:readOnly']
                    }
                ]
            }
        ]
    }
}
