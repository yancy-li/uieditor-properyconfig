export default function(uiEditor) {
    return {
        rule: 'ht.ui.VButtonGroup',
        categories: [
            {
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [
                    {
                        rule: 'ht.ui.View',
                        categoryId: 'basic'
                    }
                ]
            }
        ]
    }
}