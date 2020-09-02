
export default function(uiEditor) {
    return {
        rule: 'ht.ui.GridPane',
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
                    }
                ]
            },
            {
                id: 'TableHeader',
                displayName: uiEditor.getString('toolkit.tableheader'),
                getValue: function (view, property) {
                    var tableHeader = view.getTableHeader();
                    return tableHeader[ht.Default.prefixGetter(property.name)]();
                },
                setValue: function (view, value, property) {
                    var tableHeader = view.getTableHeader();
                    return tableHeader[ht.Default.prefixSetter(property.name)](value);
                },
                properties: [{
                    displayName: uiEditor.getString('editor.property.height'),
                        name: 'height',
                        type: 'int',
                        getValue: function (view, property) {
                            return view.getTableHeader().getPreferredSize().height;
                        },
                        setValue: function (view, value, property) {
                            view.getTableHeader().setPreferredSize(1, value);
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
                        displayName: uiEditor.getString('editor.property.indeterminateicon'),
                        name: 'indeterminateIcon',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.descicon'),
                        name: 'sortDescIcon',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.ascicon'),
                        name: 'sortAscIcon',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.labelcolor'),
                        name: 'labelColor',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.labelfont'),
                        name: 'labelFont',
                        type: 'font'
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
                        displayName: uiEditor.getString('editor.property.columnpaddingleft'),
                        name: 'columnPaddingLeft',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.columnpaddingright'),
                        name: 'columnPaddingRight',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.movable'),
                        name: 'movable',
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.movebackground'),
                        name: 'moveBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.insertline'),
                        name: 'insertLine',
                        type: 'drawable'
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
                    },
                    {
                        displayName: uiEditor.getString('editor.property.resizable'),
                        name: 'resizable',
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.checkmode'),
                        name: 'checkMode',
                        type: 'enum',
                        editorParams: {
                            datas: [uiEditor.getString('editor.property.all'), uiEditor.getString('editor.property.indeterminate'),  uiEditor.getString('editor.property.nothing')]
                        }
                    }
                ]
            },
            {
                id: 'RowHeader',
                displayName: uiEditor.getString('toolkit.rowheader'),
                getValue: function (view, property) {
                    var rowHeader = view.getRowHeader();
                    return rowHeader[ht.Default.prefixGetter(property.name)]();
                },
                setValue: function (view, value, property) {
                    var rowHeader = view.getRowHeader();
                    return rowHeader[ht.Default.prefixSetter(property.name)](value);
                },
                properties: [{
                    displayName: uiEditor.getString('editor.property.labelcolor'),
                        name: 'labelColor',
                        type: 'color'
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
                    }
                ]
            },
            {
                id: 'TableView',
                displayName: uiEditor.getString('toolkit.tableview'),
                getValue: function (view, property) {
                    var tableView = view.getTableView();
                    return tableView[ht.Default.prefixGetter(property.name)]();
                },
                setValue: function (view, value, property) {
                    var tableView = view.getTableView();
                    return tableView[ht.Default.prefixSetter(property.name)](value);
                },
                properties: [
                    {
                        displayName: uiEditor.getString('editor.property.cellselectenabled'),
                        name: 'cellSelectEnabled',
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.columns'),
                        name: 'columnDatas',
                        type: 'columns',
                        editorParams: {
                            columns: [
                                {
                                    displayName: uiEditor.getString('editor.property.displayname'),
                                    name: 'displayName',
                                    editable: true,
                                    editorClass: 'ht.ui.editor.StringEditor',
                                    sortable: false,
                                },
                                {
                                    className: 'ht.ui.EnumColumn',
                                    datas: [{
                                            label: 'Property',
                                            value: null
                                        },
                                        {
                                            label: 'Attr',
                                            value: 'attr'
                                        },
                                        {
                                            label: 'Style',
                                            value: 'style'
                                        }
                                    ],
                                    readOnly: true,
                                    editable: true,
                                    displayName: uiEditor.getString('editor.property.accesstype'),
                                    valueField: 'value',
                                    name: 'accessType',
                                    sortable: false,
                                    strict: false,
                                    's:editorViewProperties': {
                                        strict: false
                                    }
                                },
                                {
                                    className: 'ht.ui.EnumColumn',
                                    datas: [uiEditor.getString('editor.int'), uiEditor.getString('editor.number'), uiEditor.getString('editor.color'), uiEditor.getString('editor.boolean'), uiEditor.getString('editor.string')],
                                    readOnly: true,
                                    editable: true,
                                    displayName: uiEditor.getString('editor.property.valuetype'),
                                    name: 'valueType',
                                    sortable: false,
                                },
                                {
                                    displayName: uiEditor.getString('editor.property.visible'),
                                    name: 'visible',
                                    valueType: 'boolean',
                                    editable: true,
                                    getValue: function (data, column) {
                                        if (data.a('visible') !== false) return true;
                                        else return false;
                                    },
                                    sortable: false,
                                },
                                {
                                    displayName: uiEditor.getString('editor.property.sortable'),
                                    name: 'sortable',
                                    valueType: 'boolean',
                                    editable: true,
                                    getValue: function (data, column) {
                                        if (data.a('sortable') !== false) return true;
                                        else return false;
                                    },
                                    sortable: false,
                                },
                                {
                                    displayName: uiEditor.getString('editor.property.width'),
                                    name: 'width',
                                    valueType: 'int',
                                    editable: true,
                                    editorClass: 'ht.ui.editor.IntEditor',
                                    sortable: false,
                                },
                                {
                                    className: 'ht.ui.EnumColumn',
                                    displayName: uiEditor.getString('editor.property.fixedposition'),
                                    name: 'fixed',
                                    editable: true,
                                    valueField: 'value',
                                    readOnly: true,
                                    datas: [{
                                            label: uiEditor.getString('editor.left'),
                                            value: 'left'
                                        },
                                        {
                                            label: uiEditor.getString('editor.right'),
                                            value: 'right'
                                        },
                                        {
                                            label: uiEditor.getString('editor.property.nothing'),
                                            value: null
                                        }
                                    ],
                                    sortable: false,
                                },
                                {
                                    className: 'ht.ui.EnumColumn',
                                    displayName: uiEditor.getString('editor.property.filterclass'),
                                    name: 'a:filterClass',
                                    editable: true,
                                    valueField: 'value',
                                    readOnly: true,
                                    datas: [{
                                            label: uiEditor.getString('editor.property.filter.textfilter'),
                                            value: 'ht.ui.tablefilter.TextFilter'
                                        },
                                        {
                                            label: uiEditor.getString('editor.property.nothing'),
                                            value: null
                                        }
                                    ],
                                    sortable: false,
                                }
                            ]
                        },
                        setValue: function(view, value, property) {
                            var tableView = view.getTableView();
                            if (typeof value === 'string') {
                                value = ht.Default.parse(value);
                            }
                            tableView[ht.Default.prefixSetter(property.name)](value, true);
                        },
                        getValue: function(view, property) {
                            var tableView = view.getTableView();
                            return tableView[ht.Default.prefixGetter(property.name)]()
                        }
                    },
                    {
                        displayName: uiEditor.getString('editor.property.listdatas'),
                        name: 'listDatas',
                        type: 'gridDatas',
                        setValue: function(view, value, property) {
                            var tableView = view.getTableView();
                            var dm = tableView.dm();
                            if (typeof value === 'string') {
                                value = ht.Default.parse(value);
                            }
                            dm.a('grid.mergeMap', value.mergeMap);
                            tableView[ht.Default.prefixSetter(property.name)](value.datas, true);
                        },
                        getValue: function(view, property) {
                            var tableView = view.getTableView();
                            var dm = tableView.dm();
                            return {
                                'mergeMap': dm.a('grid.mergeMap'),
                                datas: tableView[ht.Default.prefixGetter(property.name)]()
                            }
                        }
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
                        displayName: uiEditor.getString('editor.property.sortmode'),
                        name: 'sortMode',
                        type: 'enum',
                        editorParams: {
                            datas: [uiEditor.getString('editor.property.nothing'), uiEditor.getString('editor.property.bistate'), uiEditor.getString('editor.property.tristate')]
                        }
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
                        displayName: uiEditor.getString('editor.property.columnlinevisible'),
                        name: 'columnLineVisible',
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.columnlinecolor'),
                        name: 'columnLineColor',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.automakevisible'),
                        name: 'is:autoMakeVisible',
                        type: 'boolean'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.rowbackground'),
                        name: 'rowBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.hoverrowbackground'),
                        name: 'hoverRowBackground',
                        type: 'drawable',
                    },
                    {
                        displayName: uiEditor.getString('editor.property.selectrowbackground'),
                        name: 'selectRowBackground',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.focusrowbackground'),
                        name: 'focusRowBackground',
                        type: 'drawable',
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
                        displayName: uiEditor.getString('editor.property.labelfont'),
                        name: 'labelFont',
                        type: 'font'
                    },
                ]
            },
            {
                id: 'TableFooter',
                displayName: uiEditor.getString('toolkit.tablefooter'),
                getValue: function (view, property) {
                    var footer = view.getTableFooter();
                    return footer[ht.Default.prefixGetter(property.name)]();
                },
                setValue: function (view, value, property) {
                    var footer = view.getTableFooter();
                    return footer[ht.Default.prefixGetter(property.name)](value);
                },
                properties: [{
                    displayName: uiEditor.getString('editor.property.visible'),
                        name: 'visible',
                        type: 'boolean',
                    },
                    {
                        displayName: uiEditor.getString('editor.property.labelcolor'),
                        name: 'labelColor',
                        type: 'color'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.labelfont'),
                        name: 'labelFont',
                        type: 'font'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.columnpaddingleft'),
                        name: 'columnPaddingLeft',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.columnpaddingright'),
                        name: 'columnPaddingRight',
                        type: 'int'
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