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
                            }
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
                    },
                    // {
                    //     name: 'slotreplaceable',
                    //     displayName: uiEditor.getString('editor.property.slotreplaceable'),
                    //     type: 'boolean',
                    //     getValue: function (view, property) {
                    //         return view.a('slotReplaceable');
                    //     },
                    //     setValue: function (view, value, property) {
                    //         view.a('slotReplaceable', !!value)
                    //     }
                    // },
                    // {
                    //     name: 'slotName',
                    //     displayName: uiEditor.getString('editor.property.slotname'),
                    //     type: 'string',
                    //     getValue: function (view, property) {
                    //         return view.a('slot');
                    //     },
                    //     setValue: function (view, value, property) {
                    //         view.a('slot', value)
                    //     }
                    // }
                ]
            }
        ]
    }
}