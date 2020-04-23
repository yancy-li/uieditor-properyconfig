export default {
    rule: 'ht.ui.ToggleButton',
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
            name: 'ToggleButton',
            properties: [
                {
                    name: 'background',
                    type: 'drawable'
                },
                {
                    name: 'hoverBackground',
                    type: 'drawable'
                },
                {
                    name: 'activeBackground',
                    type: 'drawable'
                },
                {
                    name: 'disabledBackground',
                    type: 'drawable'
                },
                {
                    name: 'selectBackground',
                    type: 'drawable'
                },
                {
                    name: 'selectHoverBackground',
                    type: 'drawable'
                },
                {
                    name: 'selectActiveBackground',
                    type: 'drawable'
                },
                {
                    name: 'selectDisabledBackground',
                    type: 'drawable'
                },
                {
                    name: 'is:selected',
                    dis0layName: 'selected',
                    type: 'boolean'
                }
            ]
        }
    ]
}