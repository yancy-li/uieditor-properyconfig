export default function(uiEditor) {
    return {
        rule: 'ht.ui.UIGraphView',
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
                displayName: uiEditor.getString('toolkit.uigraphview'),
                extends: [
                    {
                        rule: 'ht.ui.UIVectorView',
                        categoryId: 'uivectorview'
                    }
                ]
            }
        ]
    }
}