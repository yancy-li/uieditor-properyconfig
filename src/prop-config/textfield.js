export default function(uiEditor) {
    return {
        rule: 'ht.ui.TextField',
        categories: [
            {
                id: 'basic',
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [{
                    rule: 'ht.ui.View',
                    categoryId: 'basic',
                    replace: [
                        {
                            name: 'border',
                            displayName: uiEditor.getString('editor.property.border'),
                            type: 'border',
                            editorParams: {
                                'focusLineBorderVisible': true
                            }
                        }
                    ]
                }]
            },
            {
                id: 'TextField',
                displayName: uiEditor.getString('toolkit.textfield'),
                properties: [
                    {
                        name: 'value',
                        displayName: uiEditor.getString('editor.property.value'),
                        type: 'string'
                    },
                    {
                        name: 'color',
                        displayName: uiEditor.getString('editor.property.color'),
                        type: 'color',
                    },
                    {
                        name: 'font',
                        displayName: uiEditor.getString('editor.property.textfont'),
                        type: 'font',
                    },
                    {
                        name: 'placeholder',
                        displayName: uiEditor.getString('editor.property.placeholder'),
                        type: 'string',
                    },
                    {
                        name: 'is:readOnly',
                        displayName: uiEditor.getString('editor.property.readonly'),
                        type: 'boolean',
                    },
                    {
                        name: 'icon',
                        displayName: uiEditor.getString('editor.property.icon'),
                        type: 'drawable'
                    },
                    {
                        name: 'hoverIcon',
                        displayName: uiEditor.getString('editor.property.hovericon'),
                        type: 'drawable'
                    },
                    {
                        name: 'activeIcon',
                        displayName: uiEditor.getString('editor.property.activeicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'iconWidth',
                        displayName: uiEditor.getString('editor.property.iconwidth'),
                        type: 'int'
                    },
                    {
                        name: 'iconHeight',
                        displayName: uiEditor.getString('editor.property.iconheight'),
                        type: 'int'
                    },
                    {
                        name: 'iconTextGap',
                        displayName: uiEditor.getString('editor.property.icontextgap'),
                        type: 'int'
                    },
                    {
                        name: 'iconPosition',
                        displayName: uiEditor.getString('editor.property.iconposition'),
                        type: 'simpleEnum',
                        editorParams: {
                            datas: [{
                                text: uiEditor.getString('editor.left'),
                                value: 'left'
                            },
                            {
                                text: uiEditor.getString('editor.right'),
                                value: 'right'
                            }]
                        }
                    },
                    {
                        name: 'maxLength',
                        displayName: uiEditor.getString('editor.property.maxlength'),
                        type: 'int'
                    },
                    {
                        name: 'is:instant',
                        displayName: uiEditor.getString('editor.property.instant'),
                        type: 'boolean'
                    },
                    {
                        name: 'password',
                        displayName: uiEditor.getString('editor.property.password'),
                        type: 'boolean',
                        getValue: function (view) {
                            return view.getType() === 'password'
                        },
                        setValue: function (view, value) {
                            if (value) {
                                view.setType('password');
                            }
                            else {
                                view.setType('text');
                            }
                        }
                    },
                    {
                        name: 'maskRe',
                        displayName: uiEditor.getString('editor.property.maskre'),
                        type: 'regexp'
                    }
                ]
            }
        ]
    }
}