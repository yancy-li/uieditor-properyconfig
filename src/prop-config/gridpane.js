
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
                properties: [
                    {
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
                        displayName: uiEditor.getString('editor.property.border'),
                        name: 'border',
                        type: 'border'
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
                id: 'FilterHeader',
                displayName: uiEditor.getString('toolkit.filterheader'),
                getValue: function (view, property) {
                    var filterHeader = view.getFilterHeader();
                    return filterHeader[ht.Default.prefixGetter(property.name)]();
                },
                setValue: function (view, value, property) {
                    var filterHeader = view.getFilterHeader();
                    return filterHeader[ht.Default.prefixSetter(property.name)](value);
                },
                properties: [
                    {
                        displayName: uiEditor.getString('editor.property.visible'),
                        name: 'visible',
                        type: 'boolean',
                        getValue: function (view) {
                            return view.isFilterHeaderVisible();
                        },
                        setValue: function (view, value) {
                            view.setFilterHeaderVisible(!!value);
                        },
                    },
                    {
                        displayName: uiEditor.getString('editor.property.height'),
                        name: 'height',
                        type: 'int',
                        getValue: function (view, property) {
                            return view.getFilterHeader().getPreferredSize().height;
                        },
                        setValue: function (view, value, property) {
                            view.getFilterHeader().setPreferredSize(1, value);
                        }
                    },
                    {
                        displayName: uiEditor.getString('editor.property.border'),
                        name: 'border',
                        type: 'border'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.background'),
                        name: 'background',
                        type: 'drawable'
                    },
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
                    if (property.name === 'fixedShadow') {
                        view.getTableHeader().iv();
                        view.getFilterHeader().iv();
                        view.getTableFooter().iv();
                    }
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
                        type: 'gridColumns',
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
                        displayName: uiEditor.getString('editor.property.border'),
                        name: 'border',
                        type: 'border'
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
                        displayName: uiEditor.getString('editor.property.striperowbackground'),
                        name: 'stripeRowBackground',
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
                    {
                        displayName: uiEditor.getString('editor.property.fixedshadow'),
                        name: 'fixedShadow',
                        type: 'color'
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
                properties: [
                    {
                        displayName: uiEditor.getString('editor.property.visible'),
                        name: 'visible',
                        type: 'boolean',
                        getValue: function (view) {
                            return view.isRowHeaderVisible();
                        },
                        setValue: function (view, value) {
                            view.setRowHeaderVisible(!!value);
                        },
                    },
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