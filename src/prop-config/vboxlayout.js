export default function(uiEditor) {
    return {
        rule: 'ht.ui.VBoxLayout',
        categories: [
            {
                id: 'Basic',
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
                id: 'VBoxLayout',
                displayName: uiEditor.getString('toolkit.vboxlayout'),
                properties: [
                    {
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
                        type: 'int'
                    },
                    {
                        name: 'equalMode',
                        displayName: uiEditor.getString('editor.property.equalmode'),
                        type: 'enum',
                        editorParams: {
                            readOnly: true,
                            dropDownConfig: {
                                'dropDownView.toolTipEnabled': true,
                                'dropDownView.zIndex': 0,
                                'dropDownView.iconWidth': 30,
                                'dropDownView.iconHeight': 16,
                                'width': 200,
                                'dropDownView.iconStretch': 'fill'
                            },
                            datas: [
                                {
                                    label: uiEditor.getString('editor.property.nothing'),
                                    value: '',
                                    listDataProperties: {
                                        toolTip: uiEditor.getString('editor.property.nothing')
                                    }
                                },
                                {
                                    label: uiEditor.getString('editor.property.spacebetween'),
                                    value: 'space-between',
                                    icon: 'UIEditor.propertypane.space-between',
                                    listDataProperties: {
                                        toolTip: uiEditor.getString('editor.property.spacebetween')
                                    }
                                },
                                {
                                    label: uiEditor.getString('editor.property.spacearound'),
                                    value: 'space-around',
                                    icon: 'UIEditor.propertypane.space-around',
                                    listDataProperties: {
                                        toolTip: uiEditor.getString('editor.property.spacearound')
                                    }
                                },
                                {
                                    label: uiEditor.getString('editor.property.spaceevenly'),
                                    value: 'space-evenly',
                                    icon: 'UIEditor.propertypane.space-evenly',
                                    listDataProperties: {
                                        toolTip: uiEditor.getString('editor.property.spaceevenly')
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        ]
    }
}