export default function(uiEditor) {
    return {
        rule: 'ht.ui.DateRangeDropDownView',
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
                ],
                properties: [
                    {
                        name: 'shortcuts',
                        displayName: uiEditor.getString('editor.property.daterangeshortchuts'),
                        type: 'dateRangeShortcuts'
                    },
                ]
            }
        ]
    }
}