export default function(uiEditor) {
    return {
        rule: 'ht.ui.DateRangePicker',
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
    
                id: 'DateRangePicker',
                displayName: uiEditor.getString('toolkit.daterangepicker'),
                extends: [
                    {
                        rule: 'ht.ui.DateTimePicker',
                        categoryId: 'DateTimePicker',
                        replace: [
                            {
                                name: 'value',
                                displayName: uiEditor.getString('editor.property.value'),
                                type: 'daterange'
                            },
                        ]
                    }
                ]
            }
        ]
    }
}