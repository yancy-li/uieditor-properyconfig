export default function(uiEditor) {
    return {
        rule: 'ht.ui.TextArea',
        categories: [{
                id: 'basic',
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [{
                    rule: 'ht.ui.TextField',
                    categoryId: 'basic'
                }]
            },
            {
                name: 'TextArea',
                displayName: uiEditor.getString('toolkit.textarea'),
                extends: [{
                    rule: 'ht.ui.TextField',
                    categoryId: 'TextField',
                    filter: ['color', 'font', 'placeholder', 'is:readOnly', 'maxLength', 'is:instant', 'maskRe', 'align']
                }],
                properties: [
                    {
                        name: 'value',
                        displayName: uiEditor.getString('editor.property.value'),
                        type: 'bigstring'
                    },
                    {
                        name: 'lineHeight',
                        displayName: uiEditor.getString('editor.property.lineheight'),
                        type: 'int'
                    },
                    {
                        name: 'resizeMode',
                        displayName: uiEditor.getString('editor.property.resizemode'),
                        type: 'enum',
                        editorParams: {
                            datas: [{
                                label: uiEditor.getString('editor.horizontal'),
                                value: 'h'
                            }, {
                                label: uiEditor.getString('editor.vertical'),
                                value: 'v'
                            },{
                                label: uiEditor.getString('editor.property.both'),
                                value: 'both'
                            },{
                                label: uiEditor.getString('editor.property.nothing'),
                                value: ''
                            },],
                            readOnly: true
                        }
                    },
                    {
                        name: 'resizeIcon',
                        displayName: uiEditor.getString('editor.property.resizeicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'resizeIconWidth',
                        displayName: uiEditor.getString('editor.property.resizeiconwidth'),
                        type: 'int'
                    },
                    {
                        name: 'resizeIconHeight',
                        displayName: uiEditor.getString('editor.property.resizeiconheight'),
                        type: 'int'
                    },
                    {
                        name: 'wordLimitVisible',
                        displayName: uiEditor.getString('editor.property.wordlimitvisible'),
                        type: 'boolean'
                    },
                ]
            }
        ]
    };
}