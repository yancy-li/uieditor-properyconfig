export default function(uiEditor) {
    return {
        rule: 'ht.ui.HBoxLayout',
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
                        name: 'translateX',
                        displayName: uiEditor.getString('editor.property.translatex'),
                        type: 'int'
                    },
                    {
                        name: 'translateY',
                        displayName: uiEditor.getString('editor.property.translatey'),
                        type: 'int'
                    },
                    {
                        name: 'scrollBarMode',
                        displayName: uiEditor.getString('editor.property.scrollbarmode'),
                        type: 'enum',
                        editorParams: {
                            readOnly: true,
                            datas: [
                                {
                                    label: uiEditor.getString('editor.property.auto'),
                                    value: 'auto'
                                },
                                {
                                    label: uiEditor.getString('editor.property.on'),
                                value: 'on'
                            },
                            {
                                label: uiEditor.getString('editor.property.off'),
                                value: 'off'
                            },
                            {
                                label: uiEditor.getString('editor.property.scrollbarhidden'),
                                value: 'hidden'
                            }],
                        }
                    },
                    {
                        name: 'scrollBarColor',
                        displayName: uiEditor.getString('editor.property.scrollbarcolor'),
                        type: 'color'
                    },
                    {
                        name: 'scrollBarSize',
                        displayName: uiEditor.getString('editor.property.scrollbarsize'),
                        type: 'int'
                    }
                ]
            },
            {
                name: 'HBoxLayout',
                displayName: uiEditor.getString('toolkit.hboxlayout'),
                properties: [{
                        name: 'vAlign',
                        displayName: uiEditor.getString('editor.property.valign'),
                        type: 'simpleEnum',
                        editorParams: {
                            datas: [{
                                text:  uiEditor.getString('editor.top'),
                                value: 'top'
                            },
                            {
                                text: uiEditor.getString('editor.middle'),
                                value: 'middle'
                            },
                            {
                                text: uiEditor.getString('editor.bottom'),
                                value: 'bottom'
                            }]
                        }
                    },
                    {
                        name: 'align',
                        displayName: uiEditor.getString('editor.property.align'),
                        type: 'simpleEnum',
                        editorParams: {
                            datas: [{
                                text: uiEditor.getString('editor.left'),
                                value: 'left'
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
                    {
                        name: 'gap',
                        displayName: uiEditor.getString('editor.property.gap'),
                        type: 'int',
                    },
                    {
                        name: 'equalMode',
                        displayName: uiEditor.getString('editor.property.equalmode'),
                        type: 'simpleEnum',
                        editorParams: {
                            datas: [
                                {
                                    text: uiEditor.getString('editor.property.nothing'),
                                    value: ''
                                },
                                {
                                text: uiEditor.getString('editor.property.spacebetween'),
                                value: 'space-between'
                            },
                            {
                                text: uiEditor.getString('editor.property.spacearound'),
                                value: 'space-around'
                            },
                            {
                                text: uiEditor.getString('editor.property.spaceevenly'),
                                value: 'space-evenly'
                            }]
                        }
                    }
                ]
            },
            {
                displayName: uiEditor.getString('editor.property.contextmenu'),
                collapse: true,
                extends: [
                    {
                        rule: 'ContextMenuForViews',
                        categoryId: 'contextmenu'
                    }
                ]
            }
        ]
    }
}