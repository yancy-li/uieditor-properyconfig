export default function(uiEditor) {
    return {
        rule: 'ht.ui.LinkButton',
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
                name: 'LinkButton',
                displayName: uiEditor.getString('toolkit.linkebutton'),
                extends: [
                    {
                        rule: 'ht.ui.Button',
                        categoryId: 'Button'
                    }
                ]
            }
        ]
    }
}