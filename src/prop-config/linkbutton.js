export default {
    rule: 'ht.ui.LinkButton',
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
            name: 'LinkButton',
            extends: [
                {
                    rule: 'ht.ui.Button',
                    categoryId: 'Button'
                }
            ]
        }
    ]
}