export default function(uiEditor) {
    return {
        rule: 'ht.ui.RadioButton',
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
                displayName: uiEditor.getString('toolkit.radiobutton'),
                extends: [
                    {
                        rule: 'ht.ui.CheckBox',
                        categoryId: 'CheckBox',
                    }
                ]
            }
        ]
    }
}