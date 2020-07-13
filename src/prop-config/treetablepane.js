export default function(uiEditor) {
    return {
        rule: 'ht.ui.TreeTablePane',
        categories: [
            {
                displayName: uiEditor.getString('editor.property.baseproperty'),
                extends: [{
                    rule: 'ht.ui.View',
                    categoryId: 'basic'
                }]
            },
            {
                displayName: uiEditor.getString('toolkit.tableheader'),
                extends: [{
                    rule: 'ht.ui.TablePane',
                    categoryId: 'TableHeader'
                }]
            },
            {
                displayName: uiEditor.getString('toolkit.tableview'),
                extends: [{
                    rule: 'ht.ui.TablePane',
                    categoryId: 'TableView',
                    replace: [
                        {
                            displayName: uiEditor.getString('editor.property.tableview'),
                            name: 'listDatas',
                            type: 'datas',
                            editorParams: {
                                hierarchic: true
                            }
                        }
                    ]
                }]
            },
            {
                displayName: uiEditor.getString('editor.property.tablefooter'),
                extends: [{
                    rule: 'ht.ui.TablePane',
                    categoryId: 'TableFooter'
                }]
            },
            {
                displayName: uiEditor.getString('editor.property.tableview'),
                getValue: function(view, property) {
                    var tableView = view.getTableView();
                    return tableView[ht.Default.prefixGetter(property.name)]();
                },
                setValue:function(view, value, property) {
                    var tableView = view.getTableView();
                    return tableView[ht.Default.prefixSetter(property.name)](value);
                },
                extends: [{
                    rule: 'ht.ui.TreeView',
                    categoryId: 'TreeView',
                    filter: ['expandIcon', 'hoverExpandIcon', 'selectExpandIcon', 'collapseIcon', 'hoverCollapseIcon', 
                        'selectCollapseIcon', 'checkIcon', 'uncheckIcon', 'radioOnIcon', 'radioOffIcon'],
                }]
            }
        ]
    }

}