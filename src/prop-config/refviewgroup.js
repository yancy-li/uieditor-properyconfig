export default function(uiEditor) {
    return {
        rule: 'ht.ui.RefViewGroup',
        categories: [
            {
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [
                    {
                        rule: 'ht.ui.View',
                        categoryId: 'basic',
                        filter: [
                            {
                                name: 'id',
                                displayName: uiEditor.getString('editor.id'),
                                type: 'string',
                                desc: uiEditor.getString('editor.id'),
                            },
                            'boxShadow',
                            'is:visible'
                        ]
                    }
                ]
            },
            {
                name: 'RefViewGroup',
                displayName: uiEditor.getString('toolkit.refviewgroup'),
                properties: [
                    {
                        name: 'url',
                        displayName: uiEditor.getString('editor.property.url'),
                        type: 'slotResource'
                    }
                ],
                extends: [
                    {
                        rule: 'ht.ui.ListView',
                        categoryId: 'ListView',
                        filter: [
                            'dropdownFunc'
                        ]
                    },
                    {
                        rule: 'ht.ui.Button',
                        categoryId: 'Button',
                        filter: [
                            'dropdownFunc'
                        ]
                    },
                    {
                        rule: 'ht.ui.ColorPane',
                        categoryId: 'ColorPane',
                        filter: [
                            'dropdownFunc'
                        ]
                    },
                    {
                        rule: 'ht.ui.DateTimePane',
                        categoryId: 'DateTimePane',
                        filter: [
                            'dropdownFunc'
                        ]
                    },
                ]
            }
        ]
    }
}