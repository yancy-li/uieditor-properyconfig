export default function (uiEditor) {
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
                        name: 'is:clearable',
                        displayName: uiEditor.getString('editor.property.clearable'),
                        type: 'boolean',
                    },
                    {
                        name: 'prefixIcon',
                        displayName: uiEditor.getString('editor.property.prefixicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'hoverPrefixIcon',
                        displayName: uiEditor.getString('editor.property.hoverprefixicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'activePrefixIcon',
                        displayName: uiEditor.getString('editor.property.activeprefixicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'suffixIcon',
                        displayName: uiEditor.getString('editor.property.suffixicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'hoverSuffixIcon',
                        displayName: uiEditor.getString('editor.property.hoversuffixicon'),
                        type: 'drawable'
                    },
                    {
                        name: 'activeSuffixIcon',
                        displayName: uiEditor.getString('editor.property.activesuffixicon'),
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
                    },
                    {
                        name: 'align',
                        displayName: uiEditor.getString('editor.property.align'),
                        type: 'simpleEnum',
                        editorParams: {
                            datas: [{
                                text: uiEditor.getString('editor.left'),
                                value: undefined
                            },
                            {
                                text: uiEditor.getString('editor.center'),
                                value: 'center'
                            },
                            {
                                text: uiEditor.getString('editor.right'),
                                value: 'right'
                            }]
                        }
                    },
                ]
            }
        ]
    }
}