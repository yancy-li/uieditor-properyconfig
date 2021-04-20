export default function(uiEditor) {
    return {
        rule: 'ht.ui.RefViewGroup',
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
                name: 'RefViewGroup',
                displayName: uiEditor.getString('toolkit.refviewgroup'),
                properties: [{
                        name: 'url',
                        displayName: uiEditor.getString('editor.property.url'),
                        type: 'string'
                    }
                ]
            }
        ]
    }
}