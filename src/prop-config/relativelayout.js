export default function(uiEditor) {
    return {
        rule: 'ht.ui.RelativeLayout',
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
