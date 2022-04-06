export default function(uiEditor) {
    return {
        rule: 'ht.ui.PropertyView',
        categories: [{
            displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [{
                    rule: 'ht.ui.View',
                    categoryId: 'basic'
                }]
            },
            {
                displayName: uiEditor.getString('toolkit.propertyview'),
                extends: [{
                    rule: 'ht.ui.TreeView',
                    categoryId: 'TreeView',
                    filter: [
                        {
                            displayName: uiEditor.getString('editor.property.propertydatas'),
                            name: 'propertyDatas',
                            type: 'properties'
                        },
                        'labelColor', 'hoverLabelColor', 'selectLabelColor', 'labelFont', 'expandIcon', 'collapseIcon',
                        'rowHeight', 'rowLineVisible', 'rowLineColor', 'rowLineSize', 'is:clipLastRowLine', 'rowBackground', 'hoverRowBackground', 'selectRowBackground',
                        'translateY'
                    ]
                }],
                properties: [
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
