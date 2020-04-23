export default {
    rule: 'ht.ui.TreeTablePane',
    categories: [
        {
            name: '基本属性',
            extends: [{
                rule: 'ht.ui.View',
                categoryId: 'basic'
            }]
        },
        {
            name: 'TableHeader',
            extends: [{
                rule: 'ht.ui.TablePane',
                categoryId: 'TableHeader'
            }]
        },
        {
            name: 'TableView',
            extends: [{
                rule: 'ht.ui.TablePane',
                categoryId: 'TableView',
                replace: [
                    {
                        displayName: 'listDatas',
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
            name: 'TableFooter',
            extends: [{
                rule: 'ht.ui.TablePane',
                categoryId: 'TableFooter'
            }]
        },
        {
            name: 'TreeView',
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