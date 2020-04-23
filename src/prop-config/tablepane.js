
export default {
    rule: 'ht.ui.TablePane',
    categories: [
        {
            name: '基本属性',
            extends: [{
                rule: 'ht.ui.View',
                categoryId: 'basic'
            }],
        },
        {
            id: 'TableHeader',
            name: 'TableHeader',
            getValue: function (view, property) {
                var tableHeader = view.getTableHeader();
                return tableHeader[ht.Default.prefixGetter(property.name)]();
            },
            setValue: function (view, value, property) {
                var tableHeader = view.getTableHeader();
                return tableHeader[ht.Default.prefixSetter(property.name)](value);
            },
            properties: [{
                    displayName: 'height',
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
                    displayName: 'indeterminateIcon',
                    name: 'indeterminateIcon',
                    type: 'drawable'
                },
                {
                    displayName: 'sortDescIcon',
                    name: 'sortDescIcon',
                    type: 'drawable'
                },
                {
                    displayName: 'sortAscIcon',
                    name: 'sortAscIcon',
                    type: 'drawable'
                },
                {
                    displayName: 'labelColor',
                    name: 'labelColor',
                    type: 'color'
                },
                {
                    displayName: 'labelFont',
                    name: 'labelFont',
                    type: 'font'
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
                    displayName: 'columnPaddingLeft',
                    name: 'columnPaddingLeft',
                    type: 'int'
                },
                {
                    displayName: 'columnPaddingRight',
                    name: 'columnPaddingRight',
                    type: 'int'
                },
                {
                    displayName: 'movable',
                    name: 'movable',
                    type: 'boolean'
                },
                {
                    displayName: 'moveBackground',
                    name: 'moveBackground',
                    type: 'drawable'
                },
                {
                    displayName: 'insertLine',
                    name: 'insertLine',
                    type: 'drawable'
                },
                {
                    displayName: 'columnLineVisible',
                    name: 'columnLineVisible',
                    type: 'boolean'
                },
                {
                    displayName: 'columnLineColor',
                    name: 'columnLineColor',
                    type: 'color'
                },
                {
                    displayName: 'resizable',
                    name: 'resizable',
                    type: 'boolean'
                },
                {
                    displayName: 'checkMode',
                    name: 'checkMode',
                    type: 'enum',
                    editorParams: {
                        datas: ['all', 'indeterminate', 'none']
                    }
                }
            ]
        },
        {
            id: 'TableView',
            name: 'TableView',
            getValue: function (view, property) {
                var tableView = view.getTableView();
                return tableView[ht.Default.prefixGetter(property.name)]();
            },
            setValue: function (view, value, property) {
                var tableView = view.getTableView();
                return tableView[ht.Default.prefixSetter(property.name)](value);
            },
            properties: [{
                    displayName: 'columns',
                    name: 'columnDatas',
                    type: 'columns'
                },
                {
                    displayName: 'listDatas',
                    name: 'listDatas',
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
                    displayName: 'sortMode',
                    name: 'sortMode',
                    type: 'enum',
                    editorParams: {
                        datas: ['none', 'bistate', 'tristate']
                    }
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
                    displayName: 'columnLineVisible',
                    name: 'columnLineVisible',
                    type: 'boolean'
                },
                {
                    displayName: 'columnLineColor',
                    name: 'columnLineColor',
                    type: 'color'
                },
                {
                    displayName: 'autoMakeVisible',
                    name: 'is:autoMakeVisible',
                    type: 'boolean'
                },
                {
                    displayName: 'rowBackground',
                    name: 'rowBackground',
                    type: 'drawable'
                },
                {
                    displayName: 'hoverRowBackground',
                    name: 'hoverRowBackground',
                    type: 'drawable',
                },
                {
                    displayName: 'selectRowBackground',
                    name: 'selectRowBackground',
                    type: 'drawable'
                },
                {
                    displayName: 'focusRowBackground',
                    name: 'focusRowBackground',
                    type: 'drawable',
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
                    displayName: 'labelFont',
                    name: 'labelFont',
                    type: 'font'
                },
            ]
        },
        {
            id: 'TableFooter',
            name: 'TableFooter',
            getValue: function (view, property) {
                var footer = view.getTableFooter();
                return footer[ht.Default.prefixGetter(property.name)]();
            },
            setValue: function (view, value, property) {
                var footer = view.getTableFooter();
                return footer[ht.Default.prefixGetter(property.name)](value);
            },
            properties: [{
                    displayName: 'visible',
                    name: 'visible',
                    type: 'boolean',
                },
                {
                    displayName: 'labelColor',
                    name: 'labelColor',
                    type: 'color'
                },
                {
                    displayName: 'labelFont',
                    name: 'labelFont',
                    type: 'font'
                },
                {
                    displayName: 'columnPaddingLeft',
                    name: 'columnPaddingLeft',
                    type: 'int'
                },
                {
                    displayName: 'columnPaddingRight',
                    name: 'columnPaddingRight',
                    type: 'int'
                },
                {
                    displayName: 'columnLineVisible',
                    name: 'columnLineVisible',
                    type: 'boolean'
                },
                {
                    displayName: 'columnLineColor',
                    name: 'columnLineColor',
                    type: 'color'
                }
            ]
        }
    ]
}