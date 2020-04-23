export default {
    rule: 'ht.ui.TreeView',
    categories: [
        {
            name: '基本属性',
            extends: [{
                rule: 'ht.ui.View',
                categoryId: 'basic'
            }]
        },
        {
            id: 'TreeView',
            name: 'TreeView',
            extends: [{
                rule: 'ht.ui.ListView',
                categoryId: 'ListView',
                filter: ['listDatas', 'labelColor', 'hoverLabelColor', 'selectLabelColor', 'labelFont',
                    'rowHeight', 'rowLineVisible', 'rowLineColor', 'rowBackground', 'hoverRowBackground', 'selectRowBackground', 'focusRowBackground',
                    'iconWidth', 'iconHeight', 'iconGap' ,'iconStretch', 'checkIcon', 'uncheckIcon', 'radioOnIcon', 'radioOffIcon',
                    'dragEnabled', 'dropEnabled', 'dropLineColor', 'editable', 'editorClass', 'checkMode', 'rowIndent',
                    'pannable'
                ],
                replace: [
                    {
                        displayName: 'listDatas',
                        name: 'listDatas',
                        type: 'datas',
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
                            ],
                            hierarchic: true
                        }
                    },
                ]
            }],
            properties: [
                {
                    displayName: 'expandIcon',
                    name: 'expandIcon',
                    type: 'drawable'
                },
                {
                    displayName: 'hoverExpandIcon',
                    name: 'hoverExpandIcon',
                    type: 'drawable'
                },
                {
                    displayName: 'selectExpandIcon',
                    name: 'selectExpandIcon',
                    type: 'drawable'
                },
                {
                    displayName: 'collapseIcon',
                    name: 'collapseIcon',
                    type: 'drawable'
                },
                {
                    displayName: 'hoverCollapseIcon',
                    name: 'hoverCollapseIcon',
                    type: 'drawable'
                },
                {
                    displayName: 'selectCollapseIcon',
                    name: 'selectCollapseIcon',
                    type: 'drawable'
                }
            ]
        }
    ]
}