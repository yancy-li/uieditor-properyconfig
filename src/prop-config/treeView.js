export default function(uiEditor) {
    return {
        rule: 'ht.ui.TreeView',
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
                id: 'TreeView',
                displayName: uiEditor.getString('toolkit.treeview'),
                extends: [{
                    rule: 'ht.ui.ListView',
                    categoryId: 'ListView',
                    filter: [
                        {
                            displayName: uiEditor.getString('editor.property.listdatas'),
                            name: 'listDatas',
                            type: 'datas',
                            editorParams: {
                            'columns': [
                                // {
                                //     class: 'ht.ui.Column',
                                //     displayName: uiEditor.getString('editor.property.name'),
                                //     name: 'name',
                                //     editable: true,
                                //     editorClass: 'ht.ui.editor.StringEditor',
                                //     sortable: false
                                // },
                                {
                                    className: 'ht.uieditor.ResourceColumn',
                                    displayName: uiEditor.getString('editor.property.icon'),
                                    name: 'icon',
                                    editable: true,
                                    sortable: false
                                }
                            ],
                            hierarchic: true
                        }
                    }, 'labelColor', 'hoverLabelColor', 'selectLabelColor', 'labelFont',
                        'rowHeight', 'rowLineVisible', 'rowLineColor', 'rowLineSize', 'is:clipLastRowLine', 'rowBackground', 'hoverRowBackground', 'selectRowBackground', 'focusRowBackground', 'stripeRowBackground',
                        'iconWidth', 'iconHeight', 'iconGap' ,'iconStretch', 'checkIcon', 'uncheckIcon', 'radioOnIcon', 'radioOffIcon',
                        {
                            displayName: uiEditor.getString('editor.property.indeterminateicon'),
                            name: 'indeterminateIcon',
                            type: 'drawable'
                        },
                        'dragEnabled', 'dropEnabled', 'dropLineColor', 'editable', 'editorClass', 
                        {
                            displayName: uiEditor.getString('editor.property.checkmode'),
                            name: 'is:checkMode',
                            type: 'enum',
                            getValue: function (view, property) {
                                return view.getCheckMode();
                            },
                            setValue: function (view, value, property) {
                                view.setCheckMode(value);
                            },
                            editorParams: {
                                readOnly: true,
                                datas: [
                                    {
                                        value: 'all',
                                        label: uiEditor.getString('editor.property.checkall')
                                    },
                                    {
                                        value: 'descendant',
                                        label: uiEditor.getString('editor.property.checkdescendant')
                                    },
                                    {
                                        value: 'children',
                                        label: uiEditor.getString('editor.property.checkchildren')
                                    },
                                    {
                                        value: 'default',
                                        label: uiEditor.getString('editor.property.checkdefault')
                                    },
                                    {
                                        value: null,
                                        label: uiEditor.getString('editor.property.checknothing')
                                    }
                                ]
                            }
                        }

                        , 'rowIndent',
                        'pannable'
                    ]
                }],
                properties: [
                    {
                        displayName: uiEditor.getString('editor.property.rowrenderer'),
                        name: 'rowRenderer',
                        type: 'rendererResource',
                    },
                    {
                        displayName: uiEditor.getString('editor.property.expandicon'),
                        name: 'expandIcon',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.hoverexpandicon'),
                        name: 'hoverExpandIcon',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.selectexpandicon'),
                        name: 'selectExpandIcon',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.collapseicon'),
                        name: 'collapseIcon',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.hovercollapseicon'),
                        name: 'hoverCollapseIcon',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.selectcollapseicon'),
                        name: 'selectCollapseIcon',
                        type: 'drawable'
                    }
                ]
            }
        ]
    };
}
