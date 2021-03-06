export default function(uiEditor) {
    return {
        rule: 'ht.ui.ListView',
        categories: [
            {
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [{
                    rule: 'ht.ui.View',
                    categoryId: 'basic'
                }],
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
                id: 'ListView',
                displayName: uiEditor.getString('toolkit.listview'),
                properties: [
                    {
                        displayName: uiEditor.getString('editor.property.listdatas'),
                        name: 'listDatas',
                        editorParams: {
                            'columns': [{
                                    class: 'ht.ui.Column',
                                    displayName: uiEditor.getString('editor.property.name'),
                                    name: 'name',
                                    editable: true,
                                    editorClass: 'ht.ui.editor.StringEditor',
                                    sortable: false
                                },
                                {
                                    class: 'ht.uieditor.ResourceColumn',
                                    displayName: uiEditor.getString('editor.property.icon'),
                                    name: 'icon',
                                    editable: true,
                                    sortable: false
                                },
                                {
                                    class: 'ht.ui.Column',
                                    displayName: uiEditor.getString('editor.property.customattr1'),
                                    name: 'name',
                                    editable: true,
                                    editorClass: 'ht.ui.editor.StringEditor',
                                    accessType: 'attr',
                                    sortable: false
                                }
                            ]
                        },
                        type: 'datas'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.labelcolor'),
                        name: 'labelColor',
                        type: 'color',
                    },
                    {
                        displayName: uiEditor.getString('editor.property.hoverlabelcolor'),
                        name: 'hoverLabelColor',
                        type: 'color',
                    },
                    {
                        displayName: uiEditor.getString('editor.property.selectlabelcolor'),
                        name: 'selectLabelColor',
                        type: 'color',
                    },
                    {
                        displayName: uiEditor.getString('editor.property.unselectablelabelcolor'),
                        name: 'unselectableLabelColor',
                        type: 'color',
                    },
                    {
                        displayName: uiEditor.getString('editor.property.labelfont'),
                        name: 'labelFont',
                        type: 'font'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.rowheight'),
                        name: 'rowHeight',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.rowlinevisible'),
                        name: 'rowLineVisible',
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.rowlinecolor'),
                        name: 'rowLineColor',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.pannable'),
                        name: 'pannable',
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.icongap'),
                        name: 'iconGap',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.rowbackground'),
                        name: 'rowBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.hoverrowbackground'),
                        name: 'hoverRowBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.selectrowbackground'),
                        name: 'selectRowBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.focusrowbackground'),
                        name: 'focusRowBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.iconwidth'),
                        name: 'iconWidth',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.iconheight'),
                        name: 'iconHeight',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.iconstretch'),
                        name: 'iconStretch',
                        type: 'enum',
                        editorParams: {
                            datas: [uiEditor.getString('editor.property.stretch.fill'), uiEditor.getString('editor.property.stretch.uniform'),
                            uiEditor.getString('editor.property.stretch.centeruniform'), uiEditor.getString('editor.property.stretch.center'), null],
                            readOnly: true
                        }
                    },
                    {
                        displayName: uiEditor.getString('editor.property.checkicon'),
                        name: 'checkIcon',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.uncheckicon'),
                        name: 'uncheckIcon',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.radioonicon'),
                        name: 'radioOnIcon',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.radioofficon'),
                        name: 'radioOffIcon',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.dragenabled'),
                        name: 'dragEnabled',
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.dropenabled'),
                        name: 'dropEnabled',
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.droplinecolor'),
                        name: 'dropLineColor',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.editable'),
                        name: 'editable',
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.editorclass'),
                        name: 'editorClass',
                        type: 'enum',
                        editorParams: {
                            datas: [{
                                    label: uiEditor.getString('editor.string'),
                                    value: 'ht.ui.editor.StringEditor'
                                },
                                {
                                    label: uiEditor.getString('editor.int'),
                                    value: 'ht.ui.editor.IntEditor'
                                },
                                {
                                    label: uiEditor.getString('editor.number'),
                                    value: 'ht.ui.editor.NumberEditor'
                                },
                                {
                                    label: uiEditor.getString('editor.color'),
                                    value: 'ht.ui.editor.ColorEditor'
                                }
                            ],
                            valueField: 'value',
                            readOnly: true
                        }
                    },
                    {
                        displayName: uiEditor.getString('editor.property.checkmode'),
                        name: 'is:checkMode',
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.rowindent'),
                        name: 'rowIndent',
                        type: 'int'
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