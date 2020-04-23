export default {
    rule: 'ht.ui.ListView',
    categories: [
        {
            name: '基本属性',
            extends: [{
                rule: 'ht.ui.View',
                categoryId: 'basic'
            }]
        },
        {
            id: 'ListView',
            name: 'ListView',
            properties: [
                {
                    displayName: 'listDatas',
                    name: 'listDatas',
                    editorParams: {
                        'columns': [{
                                class: 'ht.ui.Column',
                                displayName: '名称',
                                name: 'name',
                                editable: true,
                                editorClass: 'ht.ui.editor.StringEditor',
                                sortable: false
                            },
                            {
                                class: 'ht.ui.Column',
                                displayName: '图标',
                                name: 'icon',
                                editable: true,
                                editorClass: 'ht.ui.editor.StringEditor',
                                sortable: false
                            },
                            {
                                class: 'ht.ui.Column',
                                displayName: '自定义属性1',
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
                    displayName: 'labelColor',
                    name: 'labelColor',
                    type: 'color',
                },
                {
                    displayName: 'hoverLabelColor',
                    name: 'hoverLabelColor',
                    type: 'color',
                },
                {
                    displayName: 'selectLabelColor',
                    name: 'selectLabelColor',
                    type: 'color',
                },
                {
                    displayName: 'unselectableLabelColor',
                    name: 'unselectableLabelColor',
                    type: 'color',
                },
                {
                    displayName: 'labelFont',
                    name: 'labelFont',
                    type: 'font'
                },
                {
                    displayName: 'rowHeight',
                    name: 'rowHeight',
                    type: 'int'
                },
                {
                    displayName: 'rowLineVisible',
                    name: 'rowLineVisible',
                    type: 'boolean'
                },
                {
                    displayName: 'rowLineColor',
                    name: 'rowLineColor',
                    type: 'color'
                },
                {
                    displayName: 'pannable',
                    name: 'pannable',
                    type: 'boolean'
                },
                {
                    displayName: 'iconGap',
                    name: 'iconGap',
                    type: 'int'
                },
                {
                    displayName: 'rowBackground',
                    name: 'rowBackground',
                    type: 'drawable'
                },
                {
                    displayName: 'hoverRowBackground',
                    name: 'hoverRowBackground',
                    type: 'drawable'
                },
                {
                    displayName: 'selectRowBackground',
                    name: 'selectRowBackground',
                    type: 'drawable'
                },
                {
                    displayName: 'focusRowBackground',
                    name: 'focusRowBackground',
                    type: 'drawable'
                },
                {
                    displayName: 'iconWidth',
                    name: 'iconWidth',
                    type: 'int'
                },
                {
                    displayName: 'iconHeight',
                    name: 'iconHeight',
                    type: 'int'
                },
                {
                    name: 'iconStretch',
                    type: 'enum',
                    editorParams: {
                        datas: ['fill', 'uniform', 'centerUniform', 'center', null],
                        readOnly: true
                    }
                },
                {
                    displayName: 'checkIcon',
                    name: 'checkIcon',
                    type: 'drawable'
                },
                {
                    displayName: 'uncheckIcon',
                    name: 'uncheckIcon',
                    type: 'drawable'
                },
                {
                    displayName: 'radioOnIcon',
                    name: 'radioOnIcon',
                    type: 'drawable'
                },
                {
                    displayName: 'radioOffIcon',
                    name: 'radioOffIcon',
                    type: 'drawable'
                },
                {
                    displayName: 'dragEnabled',
                    name: 'dragEnabled',
                    type: 'boolean'
                },
                {
                    displayName: 'dropEnabled',
                    name: 'dropEnabled',
                    type: 'boolean'
                },
                {
                    displayName: 'dropLineColor',
                    name: 'dropLineColor',
                    type: 'color'
                },
                {
                    displayName: 'editable',
                    name: 'editable',
                    type: 'boolean'
                },
                {
                    displayName: 'editorClass',
                    name: 'editorClass',
                    type: 'enum',
                    editorParams: {
                        datas: [{
                                label: 'StringEditor',
                                value: 'ht.ui.editor.StringEditor'
                            },
                            {
                                label: 'IntEditor',
                                value: 'ht.ui.editor.IntEditor'
                            },
                            {
                                label: 'NumberEditor',
                                value: 'ht.ui.editor.NumberEditor'
                            },
                            {
                                label: 'ColorEditor',
                                value: 'ht.ui.editor.ColorEditor'
                            }
                        ],
                        valueField: 'value',
                        readOnly: true
                    }
                },
                {
                    displayName: 'checkMode',
                    name: 'is:checkMode',
                    type: 'boolean'
                },
                {
                    displayName: 'rowIndent',
                    name: 'rowIndent',
                    type: 'int'
                }
            ]
        }
    ]
}