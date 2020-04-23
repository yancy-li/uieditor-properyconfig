export default {
    rule: 'ht.ui.BorderLayout',
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
            name: 'BorderLayout',
            properties: [
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
                    name: 'leftWidth',
                    type: 'int'
                },
                {
                    name: 'rightWidth',
                    type: 'int'
                },
                {
                    name: 'topHeight',
                    type: 'int'
                },
                {
                    name: 'bottomHeight',
                    type: 'int'
                },
                {
                    name: 'is:leftExpanded',
                    displayName: 'leftExpanded',
                    type: 'boolean'
                },
                {
                    name: 'is:rightExpanded',
                    displayName: 'rightExpanded',
                    type: 'boolean'
                },
                {
                    name: 'is:topExpanded',
                    displayName: 'topExpanded',
                    type: 'boolean'
                },
                {
                    name: 'is:bottomExpanded',
                    displayName: 'bottomExpanded',
                    type: 'boolean'
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