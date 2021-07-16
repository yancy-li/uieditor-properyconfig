export default function(uiEditor) {
    return {
        rule: 'ht.ui.ColorDropDownView',
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
                displayName: uiEditor.getString('toolkit.colordropdownview'),
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