export default {
    rule: 'ht.ui.RadioButton',
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
            name: 'RadioButton',
            extends: [
                {
                    rule: 'ht.ui.CheckBox',
                    categoryId: 'CheckBox'
                }
            ]
        }
    ]
}