export default function(uiEditor) {
    return {
        rule: 'ht.ui.PropertyPane',
        categories: [{
            displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [{
                    rule: 'ht.ui.View',
                    categoryId: 'basic'
                }],
                properties: [
                    {
                        name: 'translateY',
                        displayName: uiEditor.getString('editor.property.translatey'),
                        type: 'int',
                        getValue: function (view, property) {
                            var pv = view.getPropertyView();
                            return pv[ht.Default.prefixGetter(property.name)]();
                        },
                        setValue: function (view, value, property) {
                            var pv = view.getPropertyView();
                            return pv[ht.Default.prefixSetter(property.name)](value);
                        },
                    }
                ]
            },
            {
                displayName: uiEditor.getString('editor.property.propertyheader'),
                properties: [{
                    displayName: uiEditor.getString('editor.property.toolbarheight'),
                        name: 'toolbarHeight',
                        type: 'int',
                    },
                    {
                        displayName: uiEditor.getString('editor.property.height'),
                        name: 'headerHeight',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.background'),
                        name: 'headerBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.labelcolor'),
                        name: 'headerLabelColor',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.labelfont'),
                        name: 'headerLabelFont',
                        type: 'font'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.align'),
                        name: 'headerLabelAlign',
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
                    }
                ]
            },
            {
                displayName: uiEditor.getString('toolkit.propertyview'),
                getValue: function (view, property) {
                    var propertyView = view.getPropertyView();
                    return propertyView[ht.Default.prefixGetter(property.name)]();
                },
                setValue: function (view, value, property) {
                    var propertyView = view.getPropertyView();
                    return propertyView[ht.Default.prefixSetter(property.name)](value);
                },
                extends: [{
                    rule: 'ht.ui.TreeView',
                    categoryId: 'TreeView',
                    filter: ['labelColor', 'hoverLabelColor', 'selectLabelColor', 'labelFont', 'expandIcon', 'collapseIcon',
                        'rowHeight', 'rowLineVisible', 'rowLineColor', 'rowBackground', 'hoverRowBackground', 'selectRowBackground'
                    ]
                }],
                properties: [{
                    displayName: uiEditor.getString('editor.property.propertydatas'),
                        name: 'propertyDatas',
                        type: 'properties'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.indentbackground'),
                        name: 'indentBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.namealign'),
                        name: 'nameAlign',
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
                        displayName: uiEditor.getString('editor.property.valuealign'),
                        name: 'valueAlign',
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
                        displayName: uiEditor.getString('editor.property.columnlinevisible'),
                        name: 'columnLineVisible',
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.columnlinecolor'),
                        name: 'columnLineColor',
                        type: 'color'
                    }
                ]
            }
        ]
    }
}
