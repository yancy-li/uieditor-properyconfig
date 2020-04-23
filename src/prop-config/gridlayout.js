export default {
    rule: 'ht.ui.GridLayout',
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
            name: 'GridLayout',
            properties: [
                {
                    name: 'gridHeight',
                    displayName: 'gridHeight',
                    type: 'int',
                    invalidateDesigner: true
                },
                {
                    name: 'columnCount',
                    type: 'int',
                    invalidateDesigner: true
                },
                {
                    name: 'gridGap',
                    type: 'int',
                    invalidateDesigner: true
                },
                {
                    name: 'is:autoFlow',
                    type: 'boolean',
                    invalidateDesigner: true
                }
            ]
        }
    ]
}