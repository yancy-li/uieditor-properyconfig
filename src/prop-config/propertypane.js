export default {
    rule: 'ht.ui.PropertyPane',
    categories: [{
            name: '基本属性',
            extends: [{
                rule: 'ht.ui.View',
                categoryId: 'basic'
            }]
        },
        {
            name: 'header',
            properties: [{
                    displayName: 'toolbarHeight',
                    name: 'toolbarHeight',
                    type: 'int'
                },
                {
                    displayName: 'height',
                    name: 'headerHeight',
                    type: 'int'
                },
                {
                    displayName: 'headerBackground',
                    name: 'headerBackground',
                    type: 'drawable'
                },
                {
                    displayName: 'headerLabelColor',
                    name: 'headerLabelColor',
                    type: 'color'
                },
                {
                    displayName: 'headerLabelFont',
                    name: 'headerLabelFont',
                    type: 'font'
                },
                {
                    displayName: 'headerLabelAlign',
                    name: 'headerLabelAlign',
                    type: 'simpleEnum',
                    editorParams: {
                        datas: [{
                            text: 'left',
                            value: 'left'
                        },
                        {
                            text: 'center',
                            value: 'center'
                        },
                        {
                            text: 'right',
                            value: 'right'
                        }]
                    }
                }
            ]
        },
        {
            name: 'PropertyView',
            getValue: function (view, property) {
                var propertyView = view.getPropertyView();
                return propertyView[ht.Default.prefixGetter(property.name)]();
            },
            setValue: function (view, value, property) {
                var propertyView = view.getPropertyView();
                return propertyView[ht.Default.prefixSetter(property.name)](value);
            },
            extends: [{
                rule: 'ht.ui.TreeView',
                categoryId: 'TreeView',
                filter: ['labelColor', 'hoverLabelColor', 'selectLabelColor', 'labelFont', 'expandIcon', 'collapseIcon',
                    'rowHeight', 'rowLineVisible', 'rowLineColor', 'rowBackground', 'hoverRowBackground', 'selectRowBackground'
                ]
            }],
            properties: [{
                    displayName: 'properties',
                    name: 'propertyDatas',
                    type: 'properties'
                },
                {
                    displayName: 'indentBackground',
                    name: 'indentBackground',
                    type: 'drawable'
                },
                {
                    displayName: 'nameAlign',
                    name: 'nameAlign',
                    type: 'simpleEnum',
                    editorParams: {
                        datas: [{
                            text: 'left',
                            value: 'left'
                        },
                        {
                            text: 'center',
                            value: 'center'
                        },
                        {
                            text: 'right',
                            value: 'right'
                        }]
                    }
                },
                {
                    displayName: 'valueAlign',
                    name: 'valueAlign',
                    type: 'enum',
                    type: 'simpleEnum',
                    editorParams: {
                        datas: [{
                            text: 'left',
                            value: 'left'
                        },
                        {
                            text: 'center',
                            value: 'center'
                        },
                        {
                            text: 'right',
                            value: 'right'
                        }]
                    }
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