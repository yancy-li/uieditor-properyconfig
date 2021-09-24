
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
                        displayName: uiEditor.getString('editor.property.background'),
                        name: 'background',
                        type: 'drawable'
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
                                    width: 80,
                                    sortable: false,
                                    strict: false,
                                    's:editorViewProperties': {
                                        strict: false
                                    }
                                },
                                {
                                    className: 'ht.ui.EnumColumn',
                                    datas: [{
                                        label: uiEditor.getString('editor.property.int'),
                                        value: 'int'
                                    },
                                    {
                                        label: uiEditor.getString('editor.property.number'),
                                        value: 'number'
                                    },
                                    {
                                        label: uiEditor.getString('editor.property.color'),
                                        value: 'color'
                                    }, 
                                    {
                                        label: uiEditor.getString('editor.property.boolean'),
                                        value: 'boolean'
                                    },
                                    {
                                        label: uiEditor.getString('editor.property.string'),
                                        value: 'string'
                                    },
                                    {
                                        label: uiEditor.getString('editor.property.enum'),
                                        value: 'enum'
                                    }
                                    ],
                                    readOnly: true,
                                    editable: true,
                                    displayName: uiEditor.getString('editor.property.valuetype'),
                                    name: 'valueType',
                                    width: 80,
                                    sortable: false,
                                },
                                {
                                    displayName: uiEditor.getString('editor.property.visible'),
                                    name: 'visible',
                                    valueType: 'boolean',
                                    editable: true,
                                    width: 60,
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
                                    width: 60,
                                    getValue: function (data, column) {
                                        if (data.a('sortable') !== false) return true;
                                        else return false;
                                    },
                                    sortable: false,
                                },
                                {
                                    displayName: uiEditor.getString('editor.property.width'),
                                    name: 'width',
                                    width: 60,
                                    valueType: 'number',
                                    editable: true,
                                    editorClass: 'ht.ui.editor.NumberEditor',
                                    sortable: false,
                                    
                                },
                                {
                                    displayName: uiEditor.getString('editor.property.align'),
                                    className: 'ht.ui.EnumColumn',
                                    name: 'align',
                                    width: 60,
                                    editable: true,
                                    sortable: false,
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
                                            label: uiEditor.getString('editor.center'),
                                            value: 'center'
                                        }
                                    ]
                                },
                                {
                                    className: 'ht.ui.EnumColumn',
                                    displayName: uiEditor.getString('editor.property.fixedposition'),
                                    name: 'fixed',
                                    editable: true,
                                    width: 60,
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
                                    className: 'ht.ui.Column',
                                    width: 60,
                                    displayName: uiEditor.getString('editor.property.editable'),
                                    name: 'editable',
                                    editable: true,
                                    valueType: 'boolean',
                                    sortable: false,
                                },
                                {
                                    className: 'ht.uieditor.ResourceColumn',
                                    width: 120,
                                    displayName: uiEditor.getString('editor.property.renderer'),
                                    name: 'renderer',
                                    editable: true,
                                    'a:datas': uiEditor.getRenderers(),
                                    sortable: false,
                                },
                                {
                                    className: 'ht.ui.Column',
                                    width: 120,
                                    displayName: uiEditor.getString('editor.property.editorstyle'),
                                    name: 'a:editorStyle',
                                    editable: true,
                                    editorClass: 'ht.ui.editor.StringEditor',
                                    sortable: false,
                                },
                                {
                                    className: 'ht.ui.EnumColumn',
                                    displayName: uiEditor.getString('editor.property.summary'),
                                    name: 'summary',
                                    editable: true,
                                    width: 80,
                                    valueField: 'value',
                                    readOnly: true,
                                    datas: [{
                                            label: uiEditor.getString('editor.property.min'),
                                            value: 'min'
                                        },
                                        {
                                            label: uiEditor.getString('editor.property.max'),
                                            value: 'max'
                                        },
                                        {
                                            label: uiEditor.getString('editor.property.sum'),
                                            value: 'sum'
                                        },
                                        {
                                            label: uiEditor.getString('editor.property.average'),
                                            value: 'average'
                                        },
                                        {
                                            label: uiEditor.getString('editor.property.first'),
                                            value: 'first'
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
                                },
                                {
                                    className: 'ht.ui.Column',
                                    width: 80,
                                    displayName: uiEditor.getString('editor.property.paddingleft'),
                                    name: 'paddingLeft',
                                    editable: true,
                                    editorClass: 'ht.ui.editor.IntEditor',
                                    valueType: 'int',
                                    sortable: false
                                },
                                {
                                    className: 'ht.ui.Column',
                                    width: 80,
                                    displayName: uiEditor.getString('editor.property.paddingright'),
                                    name: 'paddingRight',
                                    editable: true,
                                    valueType: 'int',
                                    sortable: false,
                                    editorClass: 'ht.ui.editor.IntEditor',
                                },
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
                            readOnly: true,
                            datas: [
                                {
                                    label: uiEditor.getString('editor.property.nothing'),
                                    value: null
                                },
                                {
                                    label: uiEditor.getString('editor.property.bistate'),
                                    value: 'bistate'
                                },
                                {
                                    label: uiEditor.getString('editor.property.tristate'),
                                    value: 'tristate'
                                }
                            ]
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
                properties: [
                    {
                        name: 'background',
                        type: 'drawable',
                        displayName: uiEditor.getString('editor.property.background'),
                        desc: uiEditor.getString('editor.property.background')
                    },
                    {
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
                id: 'TableFooter',
                displayName: uiEditor.getString('toolkit.tablefooter'),
                getValue: function (view, property) {
                    var footer = view.getTableFooter();
                    return footer[ht.Default.prefixGetter(property.name)]();
                },
                setValue: function (view, value, property) {
                    var footer = view.getTableFooter();
                    return footer[ht.Default.prefixSetter(property.name)](value);
                },
                properties: [
                    {
                        name: 'background',
                        type: 'drawable',
                        displayName: uiEditor.getString('editor.property.background'),
                        desc: uiEditor.getString('editor.property.background')
                    },
                    {
                    displayName: uiEditor.getString('editor.property.visible'),
                        name: 'visible',
                        type: 'boolean',
                        getValue: function (view) {
                            return view.isTableFooterVisible();
                        },
                        setValue: function (view, value) {
                            view.setTableFooterVisible(!!value);
                        },
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
            }
        ]
    }

}