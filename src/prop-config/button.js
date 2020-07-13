export default function(uiEditor) {
    return {
        rule: 'ht.ui.Button',
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
                id: 'Button',
                displayName: uiEditor.getString('toolkit.button'),
                properties: [
                    {
                        name: 'text',
                        displayName: uiEditor.getString('editor.property.text'),
                        type: 'string'
                    },
                    {
                        name: 'textColor',
                        displayName: uiEditor.getString('editor.property.textcolor'),
                        type: 'color',
                    },
                    {
                        name: 'hoverTextColor',
                        displayName: uiEditor.getString('editor.property.hovertextcolor'),
                        type: 'color'
                    },
                    {
                        name: 'activeTextColor',
                        displayName: uiEditor.getString('editor.property.activetextcolor'),
                        type: 'color'
                    },
                    {
                        name: 'textFont',
                        displayName: uiEditor.getString('editor.property.textfont'),
                        type: 'font'
                    },
                    {
                        name: 'hoverBackground',
                        displayName: uiEditor.getString('editor.property.hoverbackground'),
                        type: 'drawable'
                    },
                    {
                        name: 'activeBackground',
                        displayName: uiEditor.getString('editor.property.activebackground'),
                        type: 'drawable'
                    },
                    {
                        name: 'hTextPosition',
                        displayName: uiEditor.getString('editor.property.htextposition'),
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
                        name: 'vTextPosition',
                        displayName: uiEditor.getString('editor.property.vtextposition'),
                        type: 'simpleEnum',
                        editorParams: {
                            datas: [{
                                text: uiEditor.getString('editor.top'),
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
                        name: 'disabledIcon',
                        displayName: uiEditor.getString('editor.property.disabledicon'),
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
                        name: 'iconStretch',
                        displayName: uiEditor.getString('editor.property.iconstretch'),
                        type: 'enum',
                        editorParams: {
                            datas: [uiEditor.getString('editor.property.stretch.fill'), uiEditor.getString('editor.property.stretch.uniform'),
                            uiEditor.getString('editor.property.stretch.centeruniform'), uiEditor.getString('editor.property.stretch.center'), null],
                            readOnly: true
                        }
                    },
                    {
                        name: 'toolTip',
                        displayName: uiEditor.getString('editor.property.tooltip'),
                        type: 'string'
                    },
                    {
                        name: 'toolTipEnabled',
                        displayName: uiEditor.getString('editor.property.tooltipenabled'),
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.pixcelperfect'),
                        name: 'is:pixelPerfect',
                        type: 'boolean'
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
                            }],
                        }
                    },
                    {
                        name: 'vAlign',
                        displayName: uiEditor.getString('editor.property.valign'),
                        type: 'simpleEnum',
                        editorParams: {
                            datas: [{
                                text: uiEditor.getString('editor.top'),
                                value: 'top'
                            },
                            {
                                text: uiEditor.getString('editor.middle'),
                                value: 'middle'
                            },
                            {
                                text: uiEditor.getString('editor.bottom'),
                                value: 'bottom'
                            }],
                        }
                    }
                ]
            }
        ]
    }
}
