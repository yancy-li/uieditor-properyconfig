export default function(uiEditor) {
    return {
        rule: 'ht.ui.DateTimeDropDownView',
        categories: [
            {
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [
                    {
                        rule: 'ht.ui.VBoxLayout',
                        categoryId: 'Basic'
                    }
                ]
            },
            {
                displayName: uiEditor.getString('toolkit.datetimedropdownview'),
                extends: [
                    {
                        rule: 'ht.ui.VBoxLayout',
                        categoryId: 'VBoxLayout'
                    }
                ]
            }
        ]
    }
}