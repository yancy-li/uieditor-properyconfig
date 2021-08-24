export default function(uiEditor) {
    return {
        rule: 'ht.ui.UIGraph3dView',
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
                displayName: uiEditor.getString('toolkit.uigraph3dview'),
                properties: [
                    {
                        name: 'url',
                        displayName: uiEditor.getString('editor.property.url'),
                        type: 'urlResource',
                        editorParams: {
                            readOnly: true
                        }
                    }
                ]
            }
        ]
    }
}