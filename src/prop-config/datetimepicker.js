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
                extends: [{
                    rule: 'ht.ui.ComboBox',
                    categoryId: 'ComboBox',
                    filter: [
                        'dropDownViewRenderer', 'is:expanded', 'dropDownWidth', 'dropDownHeight', 
                        {
                            name: 'value',
                            displayName: uiEditor.getString('editor.property.value'),
                            type: 'datetime'
                        },
                        {
                            name: 'format',
                            displayName: uiEditor.getString('editor.property.format'),
                            desc: uiEditor.getString('editor.property.desc.dateformat'),
                            type: 'string'
                        },
                        'color', 'font', 'placeholder',
                        'icon', 'hoverIcon', 'activeIcon',
                        'is:readOnly', 'readOnlyBackground', 'hoverReadOnlyBackground', 'activeReadOnlyBackground'
                    ]
                }]
            }
        ]
    }
}