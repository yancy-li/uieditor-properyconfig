export default function(uiEditor) {
    return {
        rule: 'ht.ui.FlowLayout',
        categories: [
            {
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [
                    {
                        rule: 'ht.ui.View',
                        categoryId: 'basic'
                    }
                ],
                properties: [
                    {
                        name: 'translateY',
                        displayName: uiEditor.getString('editor.property.translatey'),
                        type: 'int'
                    }
                ]
            },
            {
                displayName: uiEditor.getString('toolkit.flowlayout'),
                properties: [
                    {
                        name: 'direction',
                        displayName: uiEditor.getString('editor.property.direction'),
                        type: 'enum',
                        editorParams: {
                            datas: ['leftToRight', 'rightToLeft', 'topToDown', 'bottomToUp'],
                            readOnly: true
                        }
                    }
                ]
            }
        ]
    }
}