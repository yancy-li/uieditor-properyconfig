export default function(uiEditor) {
    return {
        rule: 'ht.ui.TreeTablePane',
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
                        type: 'int',
                        getValue: function (view, property) {
                            var tableView = view.getTableView();
                            return tableView[ht.Default.prefixGetter(property.name)]();
                        },
                        setValue: function (view, value, property) {
                            var tableView = view.getTableView();
                            return tableView[ht.Default.prefixSetter(property.name)](value);
                        },
                    },
                    {
                        name: 'translateY',
                        displayName: uiEditor.getString('editor.property.translatey'),
                        type: 'int',
                        getValue: function (view, property) {
                            var tableView = view.getTableView();
                            return tableView[ht.Default.prefixGetter(property.name)]();
                        },
                        setValue: function (view, value, property) {
                            var tableView = view.getTableView();
                            return tableView[ht.Default.prefixSetter(property.name)](value);
                        },
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
                        },
                        getValue: function (view, property) {
                            var tableView = view.getTableView();
                            return tableView[ht.Default.prefixGetter(property.name)]();
                        },
                        setValue: function (view, value, property) {
                            var tableView = view.getTableView();
                            return tableView[ht.Default.prefixSetter(property.name)](value);
                        },
                    },
                    {
                        name: 'scrollBarColor',
                        displayName: uiEditor.getString('editor.property.scrollbarcolor'),
                        type: 'color',
                        getValue: function (view, property) {
                            var tableView = view.getTableView();
                            return tableView[ht.Default.prefixGetter(property.name)]();
                        },
                        setValue: function (view, value, property) {
                            var tableView = view.getTableView();
                            return tableView[ht.Default.prefixSetter(property.name)](value);
                        },
                    },
                    {
                        name: 'scrollBarSize',
                        displayName: uiEditor.getString('editor.property.scrollbarsize'),
                        type: 'int',
                        getValue: function (view, property) {
                            var tableView = view.getTableView();
                            return tableView[ht.Default.prefixGetter(property.name)]();
                        },
                        setValue: function (view, value, property) {
                            var tableView = view.getTableView();
                            return tableView[ht.Default.prefixSetter(property.name)](value);
                        },
                    }
                ]
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
                            displayName: uiEditor.getString('editor.property.listdatas'),
                            name: 'listDatas',
                            type: 'datas',
                            editorParams: {
                                hierarchic: true
                            }
                        },
                        {
                            displayName: uiEditor.getString('editor.property.checkmode'),
                            name: 'is:checkMode',
                            type: 'enum',
                            getValue: function (view, property) {
                                var tableView = view.getTableView();
                                return tableView.getCheckMode();
                            },
                            setValue: function (view, value, property) {
                                var tableView = view.getTableView();
                                tableView.setCheckMode(value);
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
                    ]
                }]
            },
            {
                displayName: uiEditor.getString('toolkit.tablefooter'),
                extends: [{
                    rule: 'ht.ui.TablePane',
                    categoryId: 'TableFooter'
                }]
            },
            {
                displayName: uiEditor.getString('toolkit.treeview'),
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
                        'selectCollapseIcon', 
                        {
                            displayName: uiEditor.getString('editor.property.indeterminateicon'),
                            name: 'indeterminateIcon',
                            type: 'drawable'
                        }],
                }]
            }
        ]
    }

}