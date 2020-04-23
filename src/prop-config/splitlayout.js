export default {
    rule: 'ht.ui.SplitLayout',
    categories: [
        {
            name: '基本属性',
            extends: [
                {
                    rule: 'ht.ui.View',
                    categoryId: 'basic'
                }
            ]
        },
        {
            name: 'SplitLayout',
            properties: [
                {
                    name: 'orientation',
                    type: 'simpleEnum',
                    editorParams: {
                        datas: [{
                            text: 'horizontal',
                            value: 'h'
                        },
                        {
                            text: 'vertical',
                            value: 'v'
                        }]
                    }
                },
                {
                    name: 'position',
                    type: 'number'
                },
                {
                    name: 'positionType',
                    type: 'simpleEnum',
                    editorParams: {
                        datas: [{
                            text: 'percentage',
                            value: 'percentage'
                        },
                        {
                            text: 'absoluteFirst',
                            value: 'absoluteFirst'
                        },
                        {
                            text: 'absoluteSecond',
                            value: 'absoluteSecond'
                        }
                        ]
                    }
                },
                {
                    name: 'is:splitterVisible',
                    displayName: 'splitterVisible',
                    type: 'boolean'
                },
                {
                    name: 'splitter',
                    type: 'drawable'
                },
                {
                    name: 'hoverSplitter',
                    type: 'drawable'
                },
                {
                    name: 'activeSplitter',
                    type: 'drawable'
                },
                {
                    name: 'splitterSize',
                    type: 'int'
                },
                {
                    name: 'splitterHitSize',
                    type: 'int'
                },
                {
                    name: 'is:resizable',
                    type: 'resizable',
                    type: 'boolean'
                },
                {
                    name: 'resizeHintBackground',
                    type: 'drawable'
                },
                {
                    name: 'is:toggleVisible',
                    displayName: 'toggleVisible',
                    type: 'boolean'
                },
                {
                    name: 'toggle',
                    type: 'drawable'
                },
                {
                    name: 'hoverToggle',
                    type: 'drawable'
                },
                {
                    name: 'activeToggle',
                    type: 'drawable'
                },
                {
                    name: 'toggleSize',
                    type: 'int'
                },
                {
                    name: 'collapseRegion',
                    type: 'simpleEnum',
                    editorParams: {
                        datas: [
                            {
                                text: '无',
                                value: ''
                            },
                            {
                            text: 'first',
                            value: 'first'
                        },
                        {
                            text: 'second',
                            value: 'second'
                        }]
                    }
                },
                {
                    name: 'is:continuous',
                    displayName: 'continuous',
                    type: 'boolean'
                }
            ]
        }
    ]
}