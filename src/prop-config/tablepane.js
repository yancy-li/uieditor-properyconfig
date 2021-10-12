
export default function(uiEditor) {
    return {
        rule: 'ht.ui.TablePane',
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
                        displayName: uiEditor.getString('editor.property.background'),
                        name: 'background',
                        type: 'drawable'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.border'),
                        name: 'border',
                        type: 'border'
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
                properties: [{
                    displayName: uiEditor.getString('editor.property.columns'),
                        name: 'columnDatas',
                        type: 'columns'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.listdatas'),
                        name: 'listDatas',
                        type: 'datas'
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
                        displayName: uiEditor.getString('editor.property.rowlinesize'),
                        name: 'rowLineSize',
                        type: 'int'
                    },
                    {
                        displayName: uiEditor.getString('editor.property.cliplastrowline'),
                        name: 'is:clipLastRowLine',
                        type: 'boolean'
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
                        displayName: uiEditor.getString('editor.property.checkmode'),
                        name: 'is:checkMode',
                        type: 'simpleEnum',
                        editorParams: {
                            datas: [
                                {
                                    value: true,
                                    text: uiEditor.getString('editor.true'),
                                },
                                {
                                    value: false,
                                    text: uiEditor.getString('editor.false'),
                                }
                            ]
                        }
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
                    return footer[ht.Default.prefixSetter(property.name)](value);
                },
                properties: [{
                        displayName: uiEditor.getString('editor.property.visible'),
                        name: 'visible',
                        type: 'boolean',
                    },
                    {
                        displayName: uiEditor.getString('editor.property.background'),
                        name: 'background',
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